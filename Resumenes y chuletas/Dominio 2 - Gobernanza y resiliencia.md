# Chuleta — Dominio 2: Gobernanza, respuesta y resiliencia

> Repaso de última hora: este dominio conecta la preparación antes del incidente con la continuidad durante la interrupción y la recuperación posterior.

## 1. Conceptos y prioridades

| Concepto | Qué significa | Pista para el examen |
| --- | --- | --- |
| **Evento** | Ocurrencia observable en un sistema o red | La mayoría de los eventos no son incidentes |
| **Incidente** | Evento que real o potencialmente amenaza CIA | Requiere evaluación y respuesta coordinada |
| **Brecha** | Acceso, divulgación o pérdida no autorizada de información | Puede existir aunque todavía no se conozca todo el impacto |
| **Intrusión** | Incidente deliberado en el que se obtiene o intenta obtener acceso sin autorización | Es una categoría de incidente, no un simple fallo |
| **Exploit** | Ataque concreto que aprovecha una vulnerabilidad | La vulnerabilidad es la debilidad; el exploit es su uso |
| **Zero day** | Vulnerabilidad desconocida o sin mitigación disponible | Puede no encajar en firmas o patrones conocidos |

**Prioridad absoluta:** proteger la vida, la salud y la seguridad de las personas. Después se priorizan misión, servicios críticos, información y activos según el impacto y las instrucciones de la dirección.

## 2. Respuesta a incidentes: ciclo esencial

1. **Preparación:** política aprobada, plan, roles, contactos, herramientas, formación, inteligencia, canales alternativos y ejercicios.
2. **Detección y análisis:** monitorizar señales, validar si es un incidente, determinar alcance, impacto, vector y prioridad; documentar todo de forma consistente.
3. **Contención:** limitar la propagación y el daño. Puede ser aislamiento de sistemas, bloqueo de cuentas, segmentación o retirada temporal de un servicio.
4. **Erradicación:** eliminar la causa, malware, persistencia o acceso no autorizado; corregir vulnerabilidades y cambiar credenciales comprometidas.
5. **Recuperación:** restaurar desde una fuente confiable, validar la seguridad, monitorizar con atención y devolver el servicio a producción de forma controlada.
6. **Actividad posterior:** conservar evidencia, realizar análisis de causa raíz, documentar lecciones aprendidas, cumplir notificaciones y mejorar controles y planes.

**Contención no es erradicación:** contener limita el incidente; erradicar elimina la causa; recuperar devuelve la operación confiable.

### Durante el incidente

- Seguir el playbook y la autoridad definida; no improvisar cambios destructivos.
- Preservar evidencia y registrar hora, acción, responsable, decisión y resultado.
- Coordinar con dirección, legal, comunicaciones, TI, propietarios de datos, proveedores y fuerzas del orden cuando corresponda.
- Usar canales alternativos si el correo, la red o la telefonía pueden estar comprometidos.
- Compartir información según necesidad de saber; no todo lo que se conoce es apto para prensa o personal externo.
- No investigar por cuenta propia si puede destruir evidencia o aumentar el impacto.

## 3. Equipo de respuesta a incidentes

Un CIRT/CSIRT puede ser dedicado, distribuido o mixto. Debe incluir las capacidades necesarias, no solo personal técnico:

- Dirección o patrocinador con autoridad para priorizar y aceptar impacto.
- Seguridad de la información y primeros respondedores de TI.
- Ingeniería de sistemas y redes.
- Legal, privacidad, cumplimiento y gestión de riesgos.
- Comunicaciones/asuntos públicos y, cuando proceda, recursos humanos, proveedores y fuerzas del orden.

Responsabilidades clave: determinar alcance y daño, comprobar si se comprometió información confidencial, activar recuperación, coordinar remediación y supervisar medidas para evitar recurrencia.

## 4. Continuidad del negocio (BC) y recuperación ante desastres (DR)

| Disciplina | Objetivo | Pregunta principal |
| --- | --- | --- |
| **BC / continuidad** | Mantener funciones y servicios críticos durante una interrupción, aunque sea con capacidad reducida | ¿Cómo seguimos operando? |
| **DR / recuperación** | Restaurar sistemas, datos, infraestructura y servicios tecnológicos hasta volver a operaciones confiables | ¿Cómo recuperamos la tecnología? |

La respuesta a incidentes gestiona el incidente; **BC** mantiene la misión durante la interrupción; **DR** restaura la tecnología y la operación normal. Se solapan y deben coordinarse, pero no son lo mismo.

La continuidad necesita patrocinio ejecutivo, prioridades claras, listas de comprobación y comunicación redundante. El plan debe estar disponible fuera del edificio principal y no depender de un único formato o canal; una copia física controlada puede ser necesaria si los sistemas no están disponibles.

## 5. BIA, objetivos y redundancia

El **Business Impact Analysis (BIA)** identifica procesos críticos, dependencias, personas, proveedores, impactos por tiempo de interrupción y prioridades de recuperación.

- **MTD (Maximum Tolerable Downtime):** tiempo máximo de interrupción antes de producir un daño inaceptable.
- **RTO (Recovery Time Objective):** tiempo objetivo para restaurar un servicio.
- **RPO (Recovery Point Objective):** pérdida máxima de datos tolerable, expresada como tiempo.

**Ejemplo:** RTO de 4 horas = el servicio debe recuperarse en 4 horas; RPO de 15 minutos = como máximo se acepta perder 15 minutos de datos.

Cuanto menores sean RTO y RPO, normalmente mayores serán el coste y la complejidad. El BIA decide prioridades; no se eligen objetivos solo por comodidad técnica.

### Redundancia y sitios alternativos

- Energía: UPS, generadores y proveedores alternativos.
- Datos: backups, replicación y ubicaciones separadas.
- Sistemas y red: equipos, rutas, enlaces y proveedores alternativos.
- Instalaciones: trabajo remoto, sitio frío, templado o caliente.
- Personas: suplentes formados y funciones cruzadas.

La redundancia no sirve si comparte la misma causa de fallo. Dos servidores en la misma sala siguen siendo vulnerables al mismo incendio, inundación o corte eléctrico.

**Sitio frío:** requiere preparar equipo y configuración. **Sitio templado:** dispone de parte de la infraestructura. **Sitio caliente:** está preparado para asumir operaciones rápidamente. Las capacidades reales deben verificarse y probarse.

## 6. Copias, pruebas y mantenimiento

- Una copia de seguridad no demuestra que la recuperación sea posible: hay que probar restauraciones.
- Protege las copias contra borrado, corrupción, ransomware y acceso no autorizado; conserva versiones y ubicaciones separadas.
- Revisa contactos, proveedores, dependencias, inventario, configuraciones y procedimientos cuando cambie el entorno.
- Usa recorridos, ejercicios de mesa, simulaciones, pruebas técnicas y failover según el riesgo.
- Convierte las lecciones aprendidas en acciones con responsable, plazo y verificación.

## 7. GRC: gobernanza, riesgo y cumplimiento

- **Gobernanza:** quién decide, qué objetivos se persiguen, cómo se supervisan y quién rinde cuentas.
- **Riesgo:** identifica amenazas y vulnerabilidades, estima probabilidad/impacto, prioriza y selecciona tratamiento.
- **Cumplimiento:** demuestra que se satisfacen leyes, regulaciones, contratos, políticas y estándares aplicables.

GRC alinea la seguridad con el negocio, evita controles duplicados, asigna propietarios, mantiene evidencias y facilita auditorías. Una herramienta GRC registra riesgos, controles, requisitos, excepciones, evidencias y planes; **no sustituye el liderazgo ni el criterio**.

**Cumplimiento no equivale a riesgo cero:** una organización puede cumplir una obligación concreta y seguir expuesta a riesgos no cubiertos por esa obligación.

## 8. Cultura, concienciación e ingeniería social

- **Cultura:** valores y comportamientos cotidianos frente al riesgo.
- **Concienciación:** recuerda a toda la plantilla los riesgos y conductas esperadas.
- **Formación:** desarrolla habilidades para un rol o tarea concreta.
- **Educación:** proporciona comprensión más amplia y profunda.

La dirección marca el tono: debe proporcionar recursos, seguir las mismas reglas, apoyar el reporte y corregir causas sistémicas. Una cultura sana no castiga a quien reporta de buena fe y evita que se oculten errores.

### Ingeniería social

- **Phishing:** campaña fraudulenta normalmente masiva.
- **Spear phishing:** dirigido a una persona o grupo concreto.
- **Whaling:** dirigido a altos cargos o figuras con autoridad.
- **Vishing:** fraude por voz o teléfono.
- **Smishing:** fraude por SMS o mensajería.
- **Pretexting:** historia inventada para justificar una solicitud.
- **Baiting:** señuelo que promete un beneficio o despierta curiosidad.
- **Tailgating:** entrar físicamente siguiendo a una persona autorizada.

Señales: urgencia artificial, cambio de cuenta bancaria, dominio parecido, enlace extraño, adjunto inesperado, petición de credenciales o intento de saltarse el procedimiento. Verifica solicitudes sensibles por un canal independiente y conocido.

Contraseñas: largas, únicas, no reutilizadas, protegidas con gestor aprobado y MFA. No compartas credenciales ni apruebes solicitudes MFA inesperadas. Si ya has interactuado con un mensaje sospechoso, reporta de inmediato y conserva la evidencia.

## 9. Métricas, KRI y reporting

- **Métrica:** medida cuantitativa.
- **KPI:** indicador de rendimiento frente a un objetivo.
- **KRI:** indicador de exposición o cambio en el riesgo, con umbrales de revisión o escalado.
- **Dashboard:** vista de seguimiento con valores, tendencias, excepciones y contexto.
- **Scorecard:** comparación contra objetivos o niveles esperados.
- **Reporte:** evidencia interpretada con conclusiones, impacto, limitaciones y acciones.

Un KRI útil tiene definición, fuente, periodo, propietario, umbral y respuesta prevista. Ejemplos: restauraciones fallidas, vulnerabilidades críticas fuera de plazo, cuentas privilegiadas sin revisión, dependencia de un proveedor o sistemas sin backup probado.

**Cuidado con la interpretación:** más incidentes reportados puede significar más ataques o una mejor cultura de reporte; completar cursos no demuestra por sí solo que el riesgo haya bajado. Las definiciones y fuentes deben mantenerse estables para comparar periodos.

## 10. IA aplicada a gobernanza y resiliencia

- Registra propietario, finalidad, datos, proveedor, requisitos, controles y riesgos de cada sistema de IA.
- Define usos permitidos, datos autorizados, supervisión humana, retención y canal de reporte.
- Usa IA para correlacionar señales, pero valida falsos positivos y negativos; una alerta automática no es una verdad.
- Incluye en la continuidad modelos, versiones, instrucciones, configuraciones, datasets autorizados, dependencias y alternativas al proveedor.
- **Model drift / deriva:** el rendimiento empeora porque cambian los datos o el entorno, aunque el servicio siga técnicamente disponible.
- Monitoriza errores, deriva, uso de herramientas no autorizadas, decisiones sin revisión y dependencias críticas sin alternativa.
- La IA hace el phishing más convincente mediante personalización, voz, imagen o vídeo falsos; la verificación independiente sigue siendo obligatoria.

## Trampas típicas del examen

- **Evento no es incidente.** Un incidente amenaza o puede amenazar CIA y requiere respuesta.
- **Contener no es erradicar.** Primero limitas la propagación; después eliminas la causa.
- **BC no es DR.** BC mantiene la función; DR recupera la tecnología y la operación normal.
- **RTO no es RPO.** RTO mide tiempo; RPO mide pérdida de datos.
- **MTD no es RTO.** MTD es el límite máximo tolerable; RTO es el objetivo de recuperación.
- **Un backup no es una recuperación probada.** Hay que restaurar y verificar.
- **Dos componentes iguales juntos no garantizan redundancia.** Pueden compartir el mismo punto único de fallo.
- **KRI no es KPI.** KRI mide exposición al riesgo; KPI mide rendimiento frente a un objetivo.
- **La formación no es concienciación.** La formación desarrolla habilidades; la concienciación refuerza comportamientos.
- **No se verifica un phishing usando el mismo canal sospechoso.** Usa una vía independiente.

## Mini mapa mental

**Preparar → detectar y analizar → contener → erradicar → recuperar → aprender**. En paralelo, **BC mantiene el negocio**, **DR restaura la tecnología**, **GRC dirige y demuestra**, y las **métricas convierten el riesgo en decisiones**.
