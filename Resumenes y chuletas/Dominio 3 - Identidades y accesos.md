# Chuleta — Dominio 3: Control de acceso e identidades

> Repaso de última hora: el objetivo es que la entidad correcta tenga el acceso correcto, al recurso correcto, durante el tiempo correcto y por una razón autorizada.

## 1. Sujetos, objetos y reglas

| Elemento | Qué es | Ejemplo |
| --- | --- | --- |
| **Sujeto** | Entidad activa que solicita acceso | Usuario, proceso, aplicación, dispositivo o bot |
| **Objeto** | Recurso pasivo al que se intenta acceder | Archivo, base de datos, servidor, sala o impresora |
| **Regla** | Instrucción que permite o deniega según identidad y atributos | ACL de firewall o permisos de un archivo |

El control de acceso no solo deniega: concede a sujetos autorizados el nivel de acceso necesario y bloquea el resto. Una decisión puede considerar identidad, rol, clasificación, ubicación, dispositivo, hora, acción y estado del recurso.

**Denegación por defecto:** todo acceso se rechaza salvo que exista una regla explícita que lo permita. **Necesidad de conocer:** incluso una identidad autorizada solo recibe la información necesaria para su función.

## 2. Principios fundamentales

- **Mínimo privilegio:** conceder únicamente los permisos necesarios, durante el tiempo necesario y con el alcance mínimo.
- **Just-in-time (JIT):** activar privilegios solo cuando se solicitan y durante un periodo limitado.
- **Just-enough-access (JEA):** limitar también las operaciones concretas que puede realizar la identidad.
- **Separación de funciones (SoD):** dividir una operación sensible entre personas o roles diferentes.
- **Defensa en profundidad:** combinar controles administrativos, técnicos y físicos en capas independientes.
- **Revisión y recertificación:** confirmar periódicamente que cada acceso sigue siendo necesario y apropiado.

La separación de funciones puede ser **preventiva** (bloquea combinaciones incompatibles) o **detectiva** (las identifica para revisión). No elimina por sí sola la colusión: necesita logs, auditoría y supervisión.

## 3. Controles de acceso

### Capas y tipos

- **Administrativos:** políticas, procedimientos, formación, contratos y aprobaciones.
- **Técnicos/lógicos:** MFA, ACL, firewall, cifrado, PAM, directorio y logging.
- **Físicos:** cerraduras, tarjetas, guardias, cámaras, barreras y zonas restringidas.

Una arquitectura de defensa en profundidad puede exigir control físico para entrar al centro de datos, autenticación para acceder a la red y autorización específica para consultar los datos. Ninguna capa garantiza por sí sola que un ataque no ocurra.

### Evaluación de controles

El control debe corresponder al valor del activo y al riesgo. Evalúa eficacia, coste, cobertura, facilidad de uso, impacto operativo y capacidad de auditoría. Más controles no siempre significa más seguridad: deben ser proporcionales y mantenerse eficaces en el entorno actual.

## 4. Acceso privilegiado y cuentas administrativas

Una cuenta privilegiada tiene permisos superiores a los de un usuario normal: administración de sistemas, soporte, seguridad, bases de datos o aplicaciones.

Riesgos principales: compromiso con gran impacto, abuso interno, errores irreversibles, cuentas compartidas y privilegios permanentes. Controles recomendados:

- Cuenta separada para administración y uso normal.
- MFA y autenticación reforzada para elevar privilegios.
- Acceso JIT/JEA, aprobación y caducidad automática.
- Vault para secretos, rotación de credenciales y no guardar claves en código.
- Registro detallado, monitorización, grabación de sesiones y auditorías frecuentes.
- Menor alcance posible: por ejemplo, permitir restablecer contraseñas sin otorgar Domain Admin completo.
- Revisión de confianza, responsabilidades y necesidad de cada titular.

**PAM (Privileged Access Management)** protege cuentas y operaciones privilegiadas. El principio clave es que el privilegio administrativo no permanezca activo las 24 horas si solo se necesita durante una tarea concreta.

## 5. Modelos de control de acceso

| Modelo | Quién/qué decide | Fortalezas | Riesgo o limitación |
| --- | --- | --- | --- |
| **DAC** | El propietario del objeto | Flexible; común en archivos compartidos | Propagación de permisos e inconsistencias |
| **MAC** | Autoridad central mediante etiquetas/clasificaciones | Control fuerte y uniforme | Rígido; el usuario no puede cambiar permisos |
| **RBAC** | Roles de trabajo | Escalable y fácil de administrar | Roles mal definidos generan exceso de permisos |
| **ABAC** | Atributos del sujeto, objeto, acción y entorno | Granular y dinámico | Requiere atributos fiables y reglas comprensibles |
| **Basado en reglas** | Condiciones definidas por la organización | Útil para horarios, redes o ubicaciones | Las reglas pueden ser demasiado amplias o complejas |

### Diferencias que caen en el examen

- **DAC:** el propietario decide y puede compartir.
- **MAC:** la autoridad central impone etiquetas y reglas; ni el usuario ni el propietario las cambian.
- **RBAC:** los permisos pertenecen al rol y el usuario recibe el rol.
- **ABAC:** la decisión evalúa atributos y contexto, no solo el puesto.
- **Autenticación:** comprueba la identidad. **Autorización:** decide el permiso.

Un escenario real puede combinar modelos: RBAC para el departamento, ABAC para exigir dispositivo corporativo y horario, y reglas para bloquear países o redes no aprobadas.

## 6. RBAC, privilege creep y SoD

RBAC funciona bien cuando varias personas comparten requisitos de acceso similares. El alta y el cambio de puesto deben asignar roles estándar, no copiar los permisos de otro usuario real.

**Privilege creep / permissions creep** es la acumulación progresiva de permisos: se añaden accesos por cambios temporales o de puesto y nunca se retiran. Se evita con:

- Proceso formal de cambios de rol.
- Retirada de permisos antiguos al conceder los nuevos.
- Fechas de caducidad para accesos temporales.
- Revisiones de acceso y certificación por propietarios.
- Detección de combinaciones incompatibles y privilegios excesivos.

La SoD evita que una persona controle de principio a fin una transacción de alto riesgo: solicitar, aprobar y ejecutar deben estar separados cuando sea necesario.

## 7. IAM: ciclo de vida de una identidad

IAM administra identidades, credenciales, roles y permisos para personas, dispositivos, aplicaciones, cuentas de servicio, procesos y bots.

1. **Definir roles:** negocio y propietarios de datos determinan qué necesita cada función; IAM implementa la decisión.
2. **Provisioning / aprovisionamiento:** crear identidad, vincular credenciales y conceder permisos con solicitud y aprobación.
3. **Joiner:** alta de una persona o entidad con acceso disponible cuando empieza a necesitarlo, no antes.
4. **Mover:** retirar permisos antiguos y conceder los nuevos al cambiar de puesto, función o responsabilidad.
5. **Revisión/recertificación:** validar cuentas, roles, permisos, excepciones, propietarios y necesidad actual.
6. **Leaver / deprovisioning:** deshabilitar o retirar acceso al terminar la relación o la necesidad.

En una salida involuntaria puede ser necesario revocar inmediatamente sesiones, tokens, claves, acceso remoto, dispositivos y accesos de terceros. Deshabilitar primero suele conservar mejor logs y propiedad de archivos que borrar la cuenta de inmediato.

**Fuente autoritativa:** sistema aprobado, como Recursos Humanos para empleados, que inicia altas, cambios y bajas. La automatización reduce errores, pero necesita validaciones, logs, excepciones y supervisión.

## 8. Directorios, IdP, SSO, federación e IGA

- **Directorio:** almacena identidades, grupos y atributos para que los sistemas los consulten.
- **IdP (Identity Provider):** autentica y emite información fiable sobre la identidad para servicios que confían en él.
- **SSO (Single Sign-On):** una autenticación permite acceder a varias aplicaciones autorizadas; no concede autorización universal.
- **Federación:** establece confianza entre organizaciones o dominios para aceptar identidades o afirmaciones de otra parte.
- **IGA (Identity Governance and Administration):** gestiona solicitudes, aprobaciones, roles, revisiones, SoD, provisioning y deprovisioning.
- **PAM:** controla las cuentas y operaciones privilegiadas.

SSO mejora la experiencia y centraliza MFA y bajas, pero una identidad comprometida puede abrir muchas aplicaciones. La federación exige controlar atributos compartidos, duración de la confianza, revocación, contratos y propietarios.

## 9. Identidades no humanas e IA

Bots, agentes de IA, aplicaciones, procesos y cuentas de servicio necesitan una identidad propia; no deben compartir la identidad de una persona.

- Define propietario, finalidad, permisos, sistemas autorizados y condición de retirada.
- Aprovisiona con mínimo privilegio y revisa periódicamente.
- Protege y rota secretos; nunca los incrustes sin protección en código o archivos.
- Registra acciones para atribuirlas a la identidad automatizada.
- Separa recomendación, aprobación y ejecución en acciones sensibles; mantén supervisión humana.
- Al retirar el bot, revoca cuenta, tokens, claves, sesiones y permisos delegados.

## 10. Acceso adaptativo y autenticación basada en riesgo

El acceso adaptativo analiza contexto como dispositivo, ubicación, hora, sensibilidad del recurso, velocidad de desplazamiento y comportamiento. Según el riesgo puede pedir MFA adicional, limitar permisos, bloquear temporalmente o enviar a revisión.

**Viaje imposible:** dos accesos de la misma identidad aparecen en ubicaciones tan distantes y cercanas en el tiempo que el desplazamiento físico no sería posible. Puede indicar credenciales comprometidas, pero también VPN, proxy o un error de geolocalización.

La analítica de comportamiento ayuda a priorizar, pero puede producir falsos positivos, sesgos y datos personales. Aplica minimización, retención adecuada, protección de logs, transparencia y revisión de decisiones incorrectas.

**MFA sigue significando factores de categorías distintas:** conocimiento, posesión o inherencia. Una señal de comportamiento no convierte automáticamente dos comprobaciones en MFA.

## Trampas típicas del examen

- **Sujeto no es objeto.** El sujeto inicia; el objeto responde.
- **DAC no es MAC.** DAC deja decidir al propietario; MAC impone una autoridad central.
- **RBAC no es ABAC.** RBAC usa roles; ABAC evalúa atributos y contexto.
- **SSO no significa acceso a todo.** Simplifica la autenticación; cada aplicación mantiene su autorización.
- **Más permisos no es mejor servicio.** Mínimo privilegio reduce el impacto de errores y compromisos.
- **Añadir permisos no basta al cambiar de puesto.** Hay que retirar los antiguos para evitar privilege creep.
- **PAM no es solo una contraseña fuerte.** Incluye control, aprobación, JIT, vault, rotación, registro y auditoría.
- **Una cuenta de servicio también necesita propietario y ciclo de vida.** Las identidades no humanas no son excepciones.
- **Un viaje imposible es una señal, no una prueba.** Investiga VPN, proxies y errores antes de concluir compromiso.
- **MFA no son dos contraseñas.** Los factores deben pertenecer a categorías diferentes.

## Mini mapa mental

**Identidad → autenticación → modelo de autorización → mínimo privilegio → monitorización → revisión → retirada.** IAM mantiene el ciclo; PAM protege los privilegios; RBAC/ABAC adaptan las decisiones; la IA añade identidades automatizadas y señales de riesgo.
