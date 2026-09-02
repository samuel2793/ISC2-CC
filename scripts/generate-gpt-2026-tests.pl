#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use open qw(:std :encoding(UTF-8));
use FindBin qw($Bin);
use File::Path qw(make_path);
use JSON::PP;

my $root = "$Bin/..";
my $output_dir = "$root/tests/gpt-2026";
make_path($output_dir);

my %domain_titles = (
  1 => 'Principios de seguridad — novedades 2026',
  2 => 'Gobernanza de la seguridad — novedades 2026',
  3 => 'IAM — novedades 2026',
  4 => 'Redes y nube — novedades 2026',
  5 => 'Operaciones y respuesta a incidentes — novedades 2026',
);

my @concepts;
while (my $line = <DATA>) {
  chomp $line;
  next if $line =~ /^\s*$/ || $line =~ /^#/;
  my ($domain, $term, $definition, $scenario) = split /\|/, $line, 4;
  die "Registro incompleto: $line\n" unless defined $scenario;
  push @concepts, {
    domain => 0 + $domain,
    term => $term,
    definition => $definition,
    scenario => $scenario,
  };
}

sub options_with_answer {
  my ($correct, $distractors, $position) = @_;
  my @options = @$distractors;
  splice @options, $position, 0, $correct;
  return (\@options, $position);
}

for my $domain (1 .. 5) {
  my @items = grep { $_->{domain} == $domain } @concepts;
  die "El dominio $domain necesita al menos 14 conceptos\n" if @items < 14;
  my @questions;

  for my $index (0 .. $#items) {
    my $item = $items[$index];
    my @other = map { $items[($_ + $index) % @items] } (1, 7, 13);
    my $explanation = "$item->{term}: $item->{definition} Ejemplo: $item->{scenario}";

    for my $variant (0 .. 3) {
      my $correct_position = ($index + $variant) % 4;
      my ($question, $correct, @distractors);

      if ($variant == 0) {
        $question = "¿Qué concepto corresponde a esta descripción: $item->{definition}?";
        $correct = $item->{term};
        @distractors = map { $_->{term} } @other;
      } elsif ($variant == 1) {
        $question = "$item->{scenario} ¿Qué concepto del temario 2026 se aplica MEJOR?";
        $correct = $item->{term};
        @distractors = map { $_->{term} } @other;
      } elsif ($variant == 2) {
        $question = "¿Cuál de las siguientes opciones describe MEJOR «$item->{term}»?";
        $correct = $item->{definition};
        @distractors = map { $_->{definition} } @other;
      } else {
        $question = "¿Qué situación constituye el MEJOR ejemplo de «$item->{term}»?";
        $correct = $item->{scenario};
        @distractors = map { $_->{scenario} } @other;
      }

      my ($options, $answer) = options_with_answer($correct, \@distractors, $correct_position);
      push @questions, {
        pregunta => $question,
        opciones => $options,
        respuesta => $answer,
        explicacion => $explanation,
        dominio => $domain,
      };
    }
  }

  my $battery = {
    titulo => "GPT · CC 2026 — $domain_titles{$domain}",
    procedencia => 'Preguntas originales generadas para este proyecto a partir del temario nuevo CC 2026; no son preguntas oficiales de ISC2',
    descripcion => "Preguntas centradas exclusivamente en los contenidos nuevos o ampliados del Dominio $domain para el examen vigente desde el 1 de septiembre de 2026.",
    preguntas => \@questions,
  };

  open my $fh, '>:encoding(UTF-8)', "$output_dir/domain-$domain.json" or die $!;
  print {$fh} JSON::PP->new->utf8(0)->canonical(1)->pretty(1)->encode($battery);
  close $fh;
  print "Dominio $domain: " . scalar(@questions) . " preguntas\n";
}

__DATA__
# dominio|concepto|definición|escenario
1|Autorización|Decisión que determina qué recursos y acciones están permitidos para una identidad ya autenticada|Una empleada inicia sesión correctamente, pero el sistema le impide modificar las nóminas porque su rol solo permite consultarlas.
1|Accounting de AAA|Registro y atribución de actividades a una identidad, con datos como hora, recurso, acción y resultado|El sistema conserva quién reinició un servidor, cuándo lo hizo y si la operación terminó correctamente.
1|Ciclo de vida del riesgo|Proceso continuo de establecer contexto, identificar, analizar, tratar, monitorizar y revisar riesgos|Tras implantar un control, el equipo comprueba su eficacia y reevalúa el riesgo cuando cambia la amenaza.
1|Riesgo inherente|Nivel de riesgo existente antes de aplicar controles o tratamientos|La dirección estima la exposición de un servicio público antes de instalar firewall y MFA.
1|Riesgo residual|Riesgo que permanece después de aplicar los controles seleccionados|Después de cifrar y limitar accesos todavía queda una probabilidad aceptada de divulgación.
1|Propietario del riesgo|Persona con autoridad y responsabilidad para decidir y supervisar el tratamiento de un riesgo|La responsable de negocio aprueba formalmente aceptar una exposición que queda dentro de la tolerancia.
1|Directriz|Recomendación flexible que orienta buenas prácticas sin imponer necesariamente un único método|La organización aconseja, pero no obliga, a utilizar una plantilla concreta para documentar revisiones.
1|Framework de ciberseguridad|Estructura que organiza resultados, actividades o controles y debe adaptarse al contexto de la organización|Una empresa adopta NIST CSF como lenguaje común y lo ajusta a sus riesgos y obligaciones.
1|CIS Controls|Conjunto priorizado de salvaguardas publicado por el Center for Internet Security|El equipo utiliza una lista priorizada de medidas para reducir los ataques más comunes.
1|CIS Benchmarks|Recomendaciones de configuración segura para tecnologías y productos concretos|Administración compara la configuración de un servidor con la guía CIS específica de ese sistema.
1|Due care|Aplicación de precauciones razonables para evitar daños y proteger activos|La empresa corrige una vulnerabilidad conocida, forma al personal y aplica controles apropiados.
1|Due diligence|Investigación y supervisión continuas para conocer riesgos, obligaciones y eficacia de controles|Antes de contratar un proveedor y durante el servicio, la empresa revisa evidencias y vuelve a evaluar sus controles.
1|Apetito de riesgo|Cantidad y tipo general de riesgo que una organización está dispuesta a asumir para lograr objetivos|El consejo define que puede aceptar cierta experimentación, pero no exposición de datos sanitarios.
1|Tolerancia al riesgo|Límite o variación concreta aceptable alrededor de un objetivo de riesgo|La dirección establece que un servicio crítico no puede superar quince minutos de indisponibilidad.
1|Envenenamiento de modelos|Manipulación de datos o del proceso de entrenamiento para alterar el comportamiento de una IA|Un atacante introduce ejemplos maliciosos en el dataset para que el modelo clasifique incorrectamente ciertas operaciones.
1|Privacidad de datos de entrenamiento|Protección del uso, procedencia, retención y acceso a datos personales empleados por una IA|Antes de entrenar un modelo se minimizan datos personales y se comprueba la base autorizada para utilizarlos.
1|Trazabilidad de acciones de IA|Capacidad de relacionar una acción automatizada con sistema, versión, identidad autorizante y evidencia|Un log registra qué versión del agente bloqueó una cuenta y bajo la autorización de qué responsable.
1|Supervisión humana de IA|Revisión proporcional al impacto para validar o corregir decisiones automatizadas|Una persona debe aprobar la recomendación de IA antes de denegar un servicio esencial.
2|GRC|Integración de gobernanza, riesgo y cumplimiento para dirigir la seguridad de forma coherente y demostrable|Una plataforma relaciona obligaciones, riesgos, controles, propietarios, evidencias y acciones correctivas.
2|Gobernanza de seguridad|Estructura mediante la que la dirección establece objetivos, autoridad, políticas y supervisión|El consejo aprueba el apetito de riesgo y exige informes periódicos sobre el programa de seguridad.
2|Cumplimiento|Demostración de que se satisfacen leyes, regulaciones, contratos, políticas y estándares aplicables|Una auditoría verifica evidencias de que los controles cumplen un requisito contractual.
2|Herramienta GRC|Sistema que centraliza riesgos, controles, obligaciones, excepciones, evidencias y remediaciones|El equipo asigna propietarios y fechas a hallazgos dentro de una plataforma común.
2|Redundancia|Duplicación o alternativa de componentes y capacidades para reducir puntos únicos de fallo|Un servicio utiliza dos proveedores y rutas independientes en lugar de dos enlaces que comparten la misma central.
2|BIA|Análisis que identifica procesos críticos, dependencias, impactos y prioridades de recuperación|La empresa determina qué función debe restaurarse primero y cuánto daño provoca cada hora de interrupción.
2|RTO|Tiempo objetivo para restaurar un servicio después de una interrupción|El plan exige recuperar la aplicación de pagos en un máximo de dos horas.
2|RPO|Cantidad máxima de datos expresada como tiempo que la organización puede permitirse perder|El negocio acepta perder como máximo los últimos quince minutos de transacciones.
2|Continuidad del negocio|Capacidad de mantener funciones críticas durante una interrupción, aunque sea de forma reducida|Facturación continúa desde un sitio alternativo mientras se reconstruye la oficina principal.
2|Recuperación ante desastres|Restauración de sistemas, datos e infraestructura tecnológica tras una interrupción|TI recupera servidores y comunicaciones desde copias verificadas para volver a la operación normal.
2|Cultura de seguridad|Valores y comportamientos compartidos que convierten la seguridad en parte del trabajo diario|El personal reporta errores sin ocultarlos y la organización utiliza los reportes para mejorar.
2|Liderazgo de seguridad|Ejemplo, apoyo, recursos y responsabilidad proporcionados visiblemente por la dirección|Los directivos completan la formación, respetan controles y financian las correcciones prioritarias.
2|Concienciación|Actividades continuas que mantienen la atención sobre riesgos y conductas esperadas|Recordatorios breves enseñan a reconocer y reportar mensajes sospechosos.
2|Formación de seguridad|Desarrollo de habilidades para ejecutar tareas o responder a situaciones concretas|El personal practica cómo utilizar el canal de reporte y qué hacer ante una solicitud fraudulenta.
2|KRI|Indicador que señala cambios en la exposición a un riesgo y puede activar escalado|El porcentaje de restauraciones fallidas supera el umbral y provoca una revisión de respaldos.
2|KPI|Indicador que compara el rendimiento con un objetivo establecido|El equipo mide si corrige el porcentaje objetivo de vulnerabilidades dentro del plazo.
2|Dashboard|Vista visual de métricas, tendencias, excepciones y umbrales para facilitar seguimiento|La dirección consulta un panel mensual que destaca riesgos fuera de tolerancia.
2|Model drift|Pérdida de rendimiento de un modelo porque cambian datos, entorno o relaciones aprendidas|Una IA sigue disponible, pero sus clasificaciones empeoran hasta afectar una función crítica.
3|Definición de roles|Diseño de funciones y permisos estándar según responsabilidades de negocio|Los propietarios de datos acuerdan qué acceso necesita el rol de analista antes de asignar usuarios.
3|Provisioning|Creación de una identidad y concesión de credenciales y permisos previamente aprobados|El sistema de RRHH activa una solicitud autorizada para crear la cuenta de una nueva empleada.
3|Cambio de rol|Actualización que concede permisos nuevos y retira los antiguos cuando cambian responsabilidades|Al pasar de Ventas a Finanzas se elimina el acceso comercial y se añade únicamente el financiero necesario.
3|Revisión de acceso|Comprobación periódica de que cuentas, roles y permisos siguen siendo necesarios y apropiados|La propietaria de datos certifica accesos vigentes y solicita retirar cuentas huérfanas.
3|Deprovisioning|Revocación de cuentas, sesiones, tokens, claves y permisos cuando termina la necesidad|Al salir un contratista se deshabilita su cuenta y se revocan sus tokens y acceso remoto.
3|Joiner mover leaver|Modelo que resume incorporación, cambio de función y salida de una identidad humana|IAM automatiza el alta, la modificación de permisos y la baja a partir de eventos laborales.
3|Servicio de directorio|Repositorio organizado de identidades, grupos y atributos consultado por distintos sistemas|Varias aplicaciones consultan una fuente central para conocer grupos y atributos de usuarios.
3|Identity Provider|Servicio que autentica identidades y emite información fiable para aplicaciones que confían en él|Una aplicación redirige el inicio de sesión a un proveedor central y acepta su afirmación autenticada.
3|SSO|Mecanismo que permite autenticarse una vez y acceder a varias aplicaciones autorizadas|Tras un único inicio de sesión, una usuaria abre tres servicios sin introducir de nuevo la contraseña.
3|Federación de identidades|Relación de confianza que permite aceptar identidades o afirmaciones de otro dominio|Una empresa permite a un socio acceder con su propia identidad corporativa bajo reglas acordadas.
3|IGA|Herramientas y procesos para gobernar solicitudes, aprobaciones, roles, revisiones y bajas|Una campaña pide a responsables recertificar permisos y conserva evidencia de cada decisión.
3|PAM|Protección de accesos privilegiados mediante bóveda, aprobación, rotación y control de sesiones|Una credencial administrativa se libera temporalmente, se rota después y la sesión queda registrada.
3|Acceso just-in-time|Concesión de privilegios únicamente durante el periodo en que son necesarios|Una administradora recibe permisos elevados durante treinta minutos para una tarea aprobada.
3|ABAC|Modelo que decide autorización mediante atributos de sujeto, objeto, acción y entorno|El acceso depende del departamento, clasificación, dispositivo gestionado, país y horario.
3|Fuente autoritativa|Sistema aprobado cuyos datos fiables desencadenan altas, cambios y bajas|El estado laboral registrado en RRHH inicia automáticamente la retirada de accesos.
3|Cuenta de servicio|Identidad no humana utilizada por una aplicación o proceso automatizado|Un bot consulta alertas con una identidad propia, propietario conocido y permisos de solo lectura.
3|Viaje imposible|Detección de accesos tan distantes y próximos en el tiempo que el desplazamiento físico no sería viable|La misma cuenta inicia sesión desde Madrid y Tokio con cinco minutos de diferencia.
3|Autenticación adaptativa|Ajuste de requisitos de acceso según riesgo, dispositivo, ubicación y comportamiento|El sistema exige un factor adicional al detectar un dispositivo nuevo y una ubicación anómala.
4|Bluetooth seguro|Configuración y uso controlado de comunicaciones inalámbricas de corto alcance|Se desactiva el modo detectable, se confirma el emparejamiento y se eliminan dispositivos antiguos.
4|Sistema embebido|Computador especializado integrado en un equipo mayor y limitado a funciones concretas|Un controlador dentro de una máquina tiene firmware específico y capacidad limitada para agentes de seguridad.
4|IoT|Conjunto de dispositivos conectados que recogen datos o actúan sobre el entorno|Sensores y cámaras se inventarían, cambian credenciales predeterminadas y se aíslan de servidores.
4|ICS|Tecnología que supervisa o controla procesos físicos y donde un fallo puede afectar seguridad y producción|Una red de control industrial se separa de la red corporativa y sus cambios se prueban cuidadosamente.
4|Zona de firewall|Agrupación de sistemas con confianza o requisitos similares cuyo tráfico se controla en los límites|Un firewall aplica políticas distintas entre internet, DMZ, usuarios y sistemas restringidos.
4|DMZ|Segmento para servicios accesibles externamente que permanece aislado de la red interna|El servidor web público acepta HTTPS desde internet sin estar situado en la red de bases de datos.
4|Denegación por defecto|Política que bloquea tráfico salvo que exista una regla expresa que lo permita|Al instalar un firewall se rechazan todos los flujos y se abren solo los justificados.
4|Filtrado de salida|Control del tráfico que abandona una zona para impedir exfiltración o conexiones maliciosas|Un servidor interno solo puede comunicarse hacia los destinos externos necesarios.
4|Segmentación lógica|Separación mediante VLAN, subredes, firewalls o controles definidos por software|Un switch crea redes virtuales distintas sin desplegar cableado físico separado.
4|Microsegmentación|Aplicación de políticas granulares entre cargas, aplicaciones o procesos individuales|Cada carga cloud solo puede hablar con dependencias concretas aunque comparta la misma infraestructura.
4|Zero Trust|Estrategia que no confía por ubicación y evalúa identidad, dispositivo, recurso y contexto en cada solicitud|Una conexión desde la red interna también debe demostrar identidad y estado del dispositivo.
4|Autoservicio bajo demanda|Característica cloud que permite aprovisionar recursos cuando se necesitan sin intervención manual continua del proveedor|Un equipo crea capacidad de cómputo desde un portal sin abrir un ticket al proveedor.
4|Acceso amplio a la red|Característica cloud que ofrece capacidades mediante red y mecanismos estándar|Usuarios autorizados consumen el servicio desde distintos tipos de cliente a través de interfaces comunes.
4|Agrupación de recursos|Característica cloud en la que el proveedor comparte infraestructura manteniendo separación lógica|La capacidad física atiende a varios clientes cuyos recursos permanecen lógicamente aislados.
4|Elasticidad rápida|Característica cloud que ajusta capacidad con rapidez según aumenta o disminuye la demanda|Una aplicación añade instancias durante un pico y las retira cuando termina.
4|Servicio medido|Característica cloud que monitoriza y asigna consumo según el uso|El proveedor registra almacenamiento y procesamiento consumidos para facturación y control.
4|Responsabilidad compartida|Distribución de tareas de seguridad entre proveedor cloud y cliente según el servicio|En SaaS el proveedor opera la plataforma, pero el cliente conserva responsabilidad sobre usuarios y datos.
4|IaaS|Modelo cloud donde el cliente suele gestionar sistema operativo, aplicaciones, identidades y datos sobre infraestructura del proveedor|La empresa recibe máquinas virtuales y debe parchear sus sistemas operativos.
4|PaaS|Modelo cloud donde el proveedor opera infraestructura y plataforma y el cliente gestiona aplicaciones y datos|El equipo despliega su código sin administrar directamente el sistema operativo subyacente.
4|SaaS|Modelo cloud donde el proveedor opera la aplicación, pero el cliente gestiona uso, identidades y configuración disponible|La empresa contrata correo web y sigue siendo responsable de cuentas, permisos y datos.
5|Enmascaramiento de datos|Ocultación o sustitución de valores sensibles para reducir exposición durante su uso|Una pantalla muestra únicamente los últimos cuatro dígitos de una tarjeta.
5|Tokenización|Sustitución de un dato sensible por un token cuya relación se guarda separadamente|Una aplicación procesa un identificador sustituto mientras el número real queda en una bóveda.
5|Seudonimización|Sustitución de identificadores que permite reidentificación mediante información adicional separada|Un estudio usa códigos de participante y conserva la tabla de correspondencia bajo otro control.
5|Sanitización de medios|Eliminación del acceso a datos con un método apropiado para soporte, riesgo y destino|Antes de reasignar un SSD se aplica y verifica el procedimiento aprobado para esa tecnología.
5|Criptografía poscuántica|Algoritmos diseñados para resistir ataques de ordenadores clásicos y cuánticos|La organización inventaría criptografía y prueba estándares resistentes antes de una migración.
5|Harvest now decrypt later|Captura actual de datos cifrados con intención de descifrarlos cuando exista capacidad futura|Un adversario almacena comunicaciones que deben seguir secretas durante décadas.
5|Triaje de eventos|Validación, contextualización, priorización y decisión sobre cerrar, investigar o escalar señales|Una analista revisa activo, identidad, evidencia e impacto antes de declarar un incidente.
5|Caso de uso de detección|Definición del comportamiento buscado, fuentes, correlación, umbral, propietario y respuesta|El SIEM busca fallos repetidos seguidos de acceso correcto y elevación de privilegios.
5|Correlación de eventos|Combinación de señales relacionadas para revelar una secuencia significativa|Varios eventos aislados se unen para mostrar acceso, privilegios y transferencia anómala.
5|Fatiga de alertas|Pérdida de capacidad para reconocer lo importante debido a volumen y baja calidad de alertas|El equipo ajusta reglas ruidosas porque cientos de falsos positivos ocultan casos urgentes.
5|CTI|Información sobre amenazas analizada y contextualizada para apoyar una decisión|Un informe combina actor, campaña, técnicas, confianza y recomendaciones relevantes.
5|Actor de amenaza|Persona o grupo con capacidad, intención u oportunidad de causar daño|El análisis distingue ciberdelincuentes, estados, hacktivistas y amenazas internas.
5|MITRE ATT&CK|Framework que organiza tácticas y técnicas observadas en adversarios|El equipo mapea detecciones para descubrir técnicas sin cobertura.
5|Cyber Kill Chain|Modelo que representa etapas generales de una intrusión|Defensa organiza controles desde reconocimiento hasta acciones sobre objetivos.
5|IRP|Plan que define preparación, autoridad, comunicación, respuesta, recuperación y aprendizaje ante incidentes|La dirección aprueba roles, escalado, contactos y criterios de activación para incidentes.
5|Playbook|Procedimiento repetible para responder a un escenario concreto|El equipo sigue pasos preaprobados específicos para una denuncia de phishing.
5|Cadena de custodia|Registro de posesión y manejo de evidencia desde que se obtiene|Cada transferencia de un disco forense queda documentada con persona, hora y finalidad.
5|Ejercicio tabletop|Discusión guiada de un escenario simulado sin actuar sobre producción|Dirección, legal y TI recorren decisiones de ransomware en una reunión facilitada.
5|End of Support|Momento en que el proveedor deja de ofrecer mantenimiento o parches|Un servidor sin actualizaciones se sustituye o se aísla temporalmente con controles compensatorios.
5|Configuration drift|Desviación de la configuración real respecto a la baseline aprobada|Una herramienta detecta que un puerto deshabilitado volvió a abrirse fuera del proceso de cambios.
5|Red team|Equipo autorizado que simula comportamiento adversario para alcanzar objetivos acordados|Especialistas intentan llegar a un activo crítico para probar detección y respuesta.
5|Blue team|Equipo que defiende, monitoriza, detecta y responde|Analistas revisan alertas, contienen actividad y mejoran controles defensivos.
5|Purple team|Colaboración entre ataque y defensa para validar técnicas y acelerar mejoras|Red explica una técnica a blue y ambos comprueban juntos si la detección funciona.
5|SAST|Análisis de código, bytecode o binarios sin ejecutar la aplicación|Una herramienta revisa el código durante el desarrollo para encontrar patrones inseguros.
5|DAST|Prueba de una aplicación mientras está ejecutándose desde sus interfaces|Un escáner interactúa con la aplicación desplegada para observar respuestas vulnerables.
5|Seguridad del espacio de trabajo de IA|Protección frente a fuga y uso indebido cuando empleados utilizan herramientas de IA|La política prohíbe copiar secretos en chatbots públicos y exige masking en herramientas aprobadas.
