# Chuleta — Dominio 1: Principios de Seguridad

> Repaso de última hora: memoriza las diferencias en negrita y usa los ejemplos para comprobar que sabes aplicar cada concepto.

## 1. Triada CIA: el núcleo de la seguridad

| Principio | Pregunta | Qué protege | Ejemplos de controles |
| --- | --- | --- | --- |
| **Confidencialidad** | ¿Quién puede verlo? | La información frente a divulgación no autorizada | Cifrado, permisos, clasificación, necesidad de saber |
| **Integridad** | ¿Sigue siendo correcto? | La exactitud y completitud frente a cambios no autorizados | Hash, firmas digitales, control de cambios, validación |
| **Disponibilidad** | ¿Está accesible cuando se necesita? | El acceso oportuno a sistemas y datos | Redundancia, copias, mantenimiento, recuperación, alta disponibilidad |

**Regla rápida:** cifrar ayuda sobre todo a la confidencialidad; un hash ayuda a detectar cambios y, por tanto, a la integridad; la redundancia y las copias ayudan a la disponibilidad. Un control puede contribuir a más de un principio.

## 2. Identidad, acceso y trazabilidad

- **Identificación:** declarar quién eres, por ejemplo con un nombre de usuario.
- **Autenticación:** demostrar quién eres mediante algo que sabes, tienes o eres.
- **Autorización:** decidir qué puedes hacer después de autenticarte.
- **Accounting / registro:** dejar evidencia de qué hiciste, cuándo, desde dónde y con qué resultado.
- **No repudio:** aportar pruebas para dificultar que una parte niegue una acción; las firmas digitales son más fuertes que un log aislado.

### Factores de autenticación

- **Conocimiento:** contraseña, PIN, respuesta secreta.
- **Posesión:** tarjeta, token, móvil, certificado.
- **Inherencia:** huella, rostro, iris, voz.
- **Ubicación o contexto:** localización, dispositivo o comportamiento; suelen reforzar la decisión, pero no sustituyen automáticamente a los tres factores clásicos.

**MFA** exige factores de categorías distintas. Contraseña + PIN son dos elementos de conocimiento, no dos factores independientes.

### AAA en orden

**Identificación → autenticación → autorización → registro/accounting.**

Autenticarse correctamente no significa tener permiso para todo. Aplica **mínimo privilegio**, limita los accesos privilegiados y usa **separación de funciones** para que una sola persona no controle una operación completa.

## 3. Privacidad y protección de la información

- La **privacidad** trata del uso legítimo y responsable de información sobre personas: finalidad, minimización, acceso, retención y derechos.
- La **protección de la información** cubre todo su ciclo de vida: crear, clasificar, almacenar, usar, compartir, archivar y destruir.
- Clasifica los datos según sensibilidad y aplica controles proporcionales.
- Recoger más datos de los necesarios aumenta exposición y riesgo; anonimizar o seudonimizar reduce riesgo, pero no garantiza que no haya reidentificación.
- Seguridad y privacidad se relacionan, pero no son idénticas: un dato puede estar bien protegido técnicamente y aun así usarse con una finalidad no legítima.

## 4. Gestión del riesgo

### Vocabulario imprescindible

- **Activo:** algo que tiene valor para la organización.
- **Amenaza:** circunstancia o actor con capacidad e intención/oportunidad de causar daño.
- **Vulnerabilidad:** debilidad que puede ser explotada.
- **Probabilidad:** posibilidad de que ocurra el evento.
- **Impacto:** consecuencia si ocurre.
- **Riesgo:** combinación de probabilidad e impacto sobre un activo u objetivo.
- **Riesgo inherente:** antes de aplicar controles.
- **Riesgo residual:** después de aplicar controles.
- **Propietario del riesgo:** autoridad responsable de decidir cómo se gestiona y si se acepta.
- **Propietario del activo:** responsable de su uso y protección.

Una forma útil de recordarlo es: **amenaza explota vulnerabilidad → ocurre un evento → produce impacto**.

### Ciclo de gestión

1. Establecer contexto: misión, objetivos, activos, obligaciones y criterios.
2. Identificar activos, amenazas, vulnerabilidades y consecuencias.
3. Analizar y evaluar: estimar probabilidad e impacto y priorizar.
4. Tratar el riesgo: evitar, mitigar, transferir/compartir o aceptar.
5. Implementar y comunicar controles, responsables, recursos y plazos.
6. Monitorizar y revisar; los cambios, incidentes y auditorías reinician el ciclo.

**Apetito de riesgo** = cantidad y tipo de riesgo que la organización está dispuesta a asumir en general. **Tolerancia** = límite o variación concreta aceptable para un objetivo. La tolerancia impulsa decisiones y escalados.

**Aceptar** no es ignorar: debe ser una decisión informada, documentada y aprobada por la autoridad adecuada. El profesional de seguridad recomienda e implementa; la dirección acepta el riesgo de negocio.

## 5. Controles de seguridad

### Según su naturaleza

- **Administrativos:** políticas, procedimientos, formación, contratos y gestión del riesgo.
- **Técnicos/lógicos:** MFA, cifrado, firewall, control de acceso, antivirus, logging.
- **Físicos:** cerraduras, guardias, cámaras, barreras, control de entrada.

### Según su función

- **Preventivos:** evitan o reducen la probabilidad antes del evento.
- **Detectivos:** descubren un evento o desviación.
- **Correctivos:** restauran o corrigen después del evento.
- **Disuasorios:** desincentivan una acción, por ejemplo una cámara visible.
- **Compensatorios:** alternativa que cubre un riesgo cuando el control principal no es viable.
- **Directivos:** orientan el comportamiento mediante políticas y normas.

**Defensa en profundidad** combina capas independientes. Si una falla, otra reduce la probabilidad o el impacto. La eficacia de un control se debe evaluar, no asumir: revisa diseño, funcionamiento, cobertura y coste frente al riesgo.

## 6. Gobernanza, ética y cumplimiento

### Jerarquía documental

- **Ley/regulación:** obligación externa con posible sanción.
- **Política:** intención y reglas de alto nivel de la dirección.
- **Estándar:** requisito obligatorio y medible dentro de la organización.
- **Procedimiento:** pasos concretos para realizar una tarea.
- **Directriz/guideline:** recomendación flexible.
- **Framework/marco:** estructura para organizar resultados y actividades; no sustituye automáticamente una ley ni garantiza cumplimiento.

Marcos frecuentes: **ISO/IEC 27001** (SGSI basado en riesgos), **NIST CSF** (organizar resultados y comunicar prioridades) y **CIS Controls/Benchmarks** (salvaguardas priorizadas y configuraciones seguras). Se pueden combinar y adaptar al contexto.

### Código de ética ISC2

Actúa de forma **honorable, honesta, justa, responsable y legal**; protege a la sociedad, al bien común y a la infraestructura; trabaja con competencia; y evita conflictos de interés o uso indebido de privilegios. Cumplir la ley es el mínimo: una conducta puede ser legal y aun así ser poco ética.

### Due care vs due diligence

- **Due diligence:** investigar, evaluar y supervisar. Ejemplo: revisar riesgos y controles de un proveedor.
- **Due care:** aplicar precauciones razonables. Ejemplo: exigir controles, corregir una deficiencia y formar al personal.

**Diligence descubre qué hacer; care ejecuta lo razonable.** Ambos deben mantenerse y poder demostrarse con documentación y evidencia.

## 7. Inteligencia artificial y seguridad

La IA no reemplaza CIA, AAA, riesgo, controles ni ética: añade activos, amenazas y decisiones automatizadas.

- **Confidencialidad/privacidad:** protege prompts, datos de entrenamiento, entradas, salidas, modelos y credenciales; evita introducir datos sensibles en herramientas no autorizadas.
- **Integridad:** controla versiones y cambios; considera envenenamiento de datos/modelo, entradas maliciosas, alucinaciones y resultados manipulados.
- **Disponibilidad:** contempla límites de uso, dependencia de proveedor, redundancia, copias y plan alternativo.
- **AAA y trazabilidad:** autentica usuarios y servicios, autoriza quién entrena/modifica/despliega y registra versión, identidad, entrada, decisión y acción.
- **Gobernanza:** aplica supervisión humana proporcional al impacto, pruebas, monitorización, revisión de sesgos y asignación clara de responsabilidades.

**Idea clave:** automatizar no elimina la responsabilidad. Las acciones críticas deben poder explicarse, revisarse, revertirse y atribuirse.

## 8. Trampas típicas del examen

- **Identificación no es autenticación.** La primera declara; la segunda demuestra.
- **Autenticación no es autorización.** Saber quién eres no te da todos los permisos.
- **Confidencialidad no es privacidad.** La privacidad añade finalidad, legitimidad y derechos.
- **Amenaza no es vulnerabilidad.** La amenaza actúa; la vulnerabilidad es la debilidad explotable.
- **Riesgo residual no es riesgo cero.** Los controles reducen, pero rara vez eliminan completamente el riesgo.
- **Política no es procedimiento.** La política dice qué exige la dirección; el procedimiento dice cómo hacerlo.
- **Due diligence no es due care.** Investigar/supervisar frente a actuar/aplicar medidas.
- **MFA no es dos contraseñas.** Necesita categorías de factores diferentes.
- **Un log no garantiza por sí solo no repudio.** La evidencia debe estar protegida y vinculada a una identidad fiable.
- **La dirección acepta el riesgo.** El área técnica recomienda y facilita la decisión.

## Mini mapa mental

**CIA** protege la información → **AAA** controla y registra el acceso → **riesgo** prioriza qué proteger → **controles** reducen el riesgo → **gobernanza y ética** dirigen las decisiones → **IA** aplica los mismos principios con trazabilidad y supervisión.
