# Chuleta — Dominio 5: Operaciones de seguridad

> Repaso de última hora: protege los datos durante todo su ciclo de vida, registra lo que ocurre, cambia los sistemas con control y responde con evidencia, prioridad y trazabilidad.

## 1. Ciclo de vida y manejo de datos

| Etapa | Qué ocurre | Controles clave |
| --- | --- | --- |
| **Crear** | Se generan datos o conocimiento | Finalidad, clasificación, propietario |
| **Almacenar** | Se registra en un soporte | Acceso, cifrado, backup, ubicación |
| **Usar** | Se consulta o modifica | Mínimo privilegio, integridad, logging |
| **Compartir** | Se copia o transfiere | Autorización, canal seguro, necesidad de conocer |
| **Archivar** | Se conserva sin uso operativo habitual | Retención, acceso restringido, integridad |
| **Destruir** | Se elimina al terminar su utilidad u obligación | Sanitización, evidencia y destrucción defendible |

### Clasificación, retención y destrucción

- **Clasificar** determina el impacto de una pérdida de confidencialidad, integridad o disponibilidad.
- **Etiquetar** aplica una marca que permite manejar el dato de forma coherente con su sensibilidad.
- Usa pocas categorías claras: altamente restringido, restringido, uso interno y público son ejemplos; la organización define su propio esquema.
- Conserva datos solo durante el periodo útil, legal, contractual o regulatorio. Guardarlo todo durante el periodo más largo aumenta coste, exposición y ruido.
- **Destrucción defendible** significa que existe una política y una base legal/organizativa que justifican qué se destruye, cuándo y cómo.
- **Remanencia** es la posibilidad de que queden restos recuperables después de borrar.
- **Borrar/clear:** elimina de forma lógica o sobrescribe; puede no bastar para datos muy sensibles.
- **Purgar/sanitize:** reduce fuertemente la posibilidad de recuperación, según tecnología y requisito.
- **Destruir físicamente:** triturar, cortar, desintegrar o destruir el soporte cuando el riesgo lo exige.

Protege datos en uso, en reposo y en tránsito. El propietario decide valor, clasificación y uso; el custodio aplica controles y manejo operativo.

## 2. Logging y monitorización

Un **evento** es una acción observable que produce un cambio medible. El logging captura señales para atribución, detección, troubleshooting, auditoría, forense y cumplimiento.

### Qué registrar

- Identidad de usuario, cuenta de servicio o proceso.
- Fecha/hora sincronizada y zona horaria.
- Host, dispositivo, IP, ubicación y sesión.
- Accesos exitosos y rechazados.
- Creación, modificación y eliminación de cuentas o permisos.
- Cambios de configuración, parches y estado de controles de protección.
- Procesos, comandos, conexiones, errores y transferencias relevantes.
- Alertas, respuesta ejecutada y resultado.

### Buenas prácticas

- Define qué se registra, con qué nivel y durante cuánto tiempo según riesgo y requisitos.
- Centraliza y correlaciona logs; separa almacenamiento y administración para dificultar manipulación.
- Sincroniza relojes para reconstruir la secuencia real.
- Protege confidencialidad, integridad y disponibilidad: acceso mínimo, cifrado, control de cambios y capacidad suficiente.
- Conserva originales y evidencia cuando pueda existir investigación; documenta cadena de custodia.
- Revisa alertas con rapidez y prueba que el logging funciona; un sistema que no registra no puede investigarse bien.
- Evita registrar secretos o datos innecesarios; los logs también contienen información sensible.

**SIEM** centraliza y correlaciona eventos. **SOAR** automatiza enriquecimiento y acciones mediante playbooks. La automatización debe estar autorizada, probada y ser reversible cuando sea posible.

## 3. Cifrado, hashing y protección de secretos

| Concepto | Propósito | Ejemplos / regla |
| --- | --- | --- |
| **Cifrado simétrico** | Confidencialidad con la misma clave para cifrar y descifrar | Rápido; protege grandes volúmenes |
| **Cifrado asimétrico** | Usa clave pública y privada | Intercambio, autenticación y firmas |
| **Hash** | Huella de longitud fija para detectar cambios | No es cifrado ni reversible |
| **Firma digital** | Integridad, autenticidad y apoyo al no repudio | Se crea con clave privada y se verifica con pública |
| **Salt** | Valor único añadido antes de hashear una contraseña | Evita hashes idénticos y dificulta tablas precalculadas |

- La **clave pública** se puede distribuir; la **privada** debe protegerse.
- La criptografía no sirve si las claves, certificados o secretos se exponen.
- Para contraseñas, usa hashing adaptativo con salt y controles de acceso; nunca almacenes la contraseña en claro.
- La criptografía poscuántica prepara algoritmos resistentes a amenazas cuánticas futuras; no sustituye la gestión de claves ni la configuración correcta.
- **Enmascaramiento** oculta parte del dato para uso limitado; **sanitización** elimina o transforma contenido sensible antes de compartirlo.

## 4. Contraseñas, phishing e ingeniería social

- Contraseñas/frases largas, únicas y no reutilizadas.
- Gestor aprobado y MFA con factores distintos.
- No compartir credenciales, secretos ni códigos MFA.
- Cambiar credenciales tras evidencia de compromiso, no solo por rutina sin contexto.
- Desconfía de urgencia, autoridad, enlaces extraños, adjuntos, cambios de cuenta bancaria y peticiones de secreto.
- **Phishing:** campaña masiva; **spear phishing:** dirigida; **whaling:** dirigida a altos cargos.
- **Vishing:** voz; **smishing:** SMS/mensajería; **pretexting:** historia falsa; **baiting:** señuelo; **tailgating:** acceso físico siguiendo a alguien.
- Verifica solicitudes sensibles por un canal independiente y conocido.
- Si interactúas con un mensaje sospechoso, conserva evidencia y reporta inmediatamente.

La IA puede generar mensajes, voces, imágenes y vídeos convincentes. La gramática correcta o la voz conocida no prueban autenticidad.

## 5. Gestión de configuración y cambios

Una **baseline** es el estado aprobado de configuración. **Configuration drift** es la desviación entre el estado real y esa baseline.

### Flujo normal de cambios

1. Solicitar y describir el cambio.
2. Evaluar riesgo, impacto, dependencias y ventana.
3. Probar en un entorno adecuado.
4. Obtener aprobación de la autoridad correspondiente.
5. Preparar backup y rollback.
6. Implementar de forma controlada.
7. Verificar resultado, registrar evidencia y actualizar documentación.

Los cambios de emergencia pueden acortar pasos, pero necesitan autoridad, registro y revisión posterior. Saltarse toda trazabilidad por urgencia puede introducir una vulnerabilidad mayor que el problema original.

## 6. Políticas, procedimientos y concienciación

- **Política:** intención y reglas de alto nivel de la dirección.
- **Estándar:** requisito obligatorio y medible.
- **Procedimiento:** pasos concretos para realizar una tarea.
- **Directriz:** recomendación flexible.
- **Playbook:** acciones repetibles para un escenario concreto, como phishing o ransomware.

Un programa de concienciación debe ser continuo, adaptado al rol y medible: incorporación, recordatorios, formación, simulaciones y canal sencillo de reporte. Los administradores, finanzas, dirección y personal técnico tienen riesgos diferentes.

Una cultura sana favorece el reporte temprano y el aprendizaje; no mide éxito solo por cursos completados ni incentiva ocultar errores.

## 7. Triaje y priorización de eventos

**Evento → alerta → investigación → incidente**, pero no son sinónimos. El **triaje** valida la señal, recoge contexto, decide prioridad y determina si se cierra, observa, investiga o escala.

### Pasos

- Confirmar fuente, hora, activo, identidad y regla que generó la alerta.
- Validar que los datos están completos, sincronizados y son fiables.
- Enriquecer con criticidad, vulnerabilidades, contexto de amenazas e historial.
- Correlacionar eventos relacionados y buscar secuencia.
- Estimar alcance, impacto, urgencia y confianza de la detección.
- Documentar evidencia, decisiones y acciones.
- Seguir playbook: cerrar como legítimo, monitorizar, investigar o escalar.

La prioridad no depende solo de severidad técnica: incluye criticidad del activo, sensibilidad de datos, impacto en CIA/personas/negocio, propagación, privilegios, requisitos legales y tiempo para actuar.

### Resultados de detección

- **Verdadero positivo:** alerta de actividad maliciosa real.
- **Falso positivo:** alerta de actividad legítima.
- **Verdadero negativo:** no alerta ante actividad legítima.
- **Falso negativo:** no detecta actividad maliciosa.

La fatiga de alertas aparece cuando hay demasiado volumen y poco valor. Reduce ruido ajustando reglas, eliminando casos inútiles y mejorando contexto, umbrales y propietarios.

## 8. Actores, CTI y frameworks

### Actores y motivaciones

Ciberdelincuentes, estados/grupos patrocinados, hacktivistas, insiders, competidores, oportunistas y cuentas comprometidas. Sus motivaciones pueden ser dinero, espionaje, ideología, venganza, reconocimiento, interrupción o ventaja estratégica.

**Actor = quién; motivación = por qué; técnica = cómo.** La atribución absoluta suele ser difícil y no siempre es necesaria para contener.

### Cyber Threat Intelligence (CTI)

CTI es información analizada, contextualizada y accionable sobre amenazas. Una IP aislada o un hash sin contexto es un dato, no necesariamente inteligencia.

- **Estratégica:** tendencias y riesgo para dirección.
- **Operacional:** campañas, actores y objetivos.
- **Táctica:** técnicas y comportamientos.
- **Técnica:** indicadores concretos como dominios, hashes e IP.

Evalúa fuente, actualidad, relevancia, confianza y posibilidad de acción. Los indicadores pueden caducar o ser falsificados; comparte según clasificación, privacidad, contratos y canales autorizados.

### Frameworks

- **MITRE ATT&CK:** tácticas y técnicas observadas.
- **Cyber Kill Chain:** etapas generales desde reconocimiento hasta acciones sobre objetivos.
- **Diamond Model:** adversario, capacidad, infraestructura y víctima.

Un framework organiza lenguaje, detecciones y carencias; no bloquea ataques por sí mismo.

## 9. Respuesta a incidentes, evidencia y ejercicios

El **Incident Response Plan (IRP)** define preparación, detección, análisis, contención, erradicación, recuperación y mejora. El **playbook** adapta esos principios a un escenario concreto.

Debe incluir alcance, criterios de activación, roles, autoridad, prioridades, comunicaciones, contactos, preservación de evidencia, relación con BC/DR, cierre y lecciones aprendidas.

### Evidencia y comunicaciones

- Clasifica y etiqueta evidencias y comunicaciones.
- Usa repositorios y canales aprobados, cifrado, acceso por necesidad de conocer y retención definida.
- **Cadena de custodia:** registra quién obtuvo, recibió, almacenó, accedió, transfirió o modificó la evidencia.
- Conserva versiones, configuraciones, entradas, salidas y logs relevantes de sistemas de IA.
- Solo personas autorizadas contactan con clientes, medios, reguladores o actores externos.
- La seguridad de las personas tiene prioridad sobre sistemas, datos o evidencia.

### Tipos de ejercicios

- **Walkthrough/revisión:** recorrer el plan paso a paso.
- **Tabletop:** discutir decisiones en un escenario simulado sin tocar producción.
- **Simulación funcional:** ejecutar procedimientos en un entorno controlado.
- **Prueba técnica:** validar herramientas, restauración, comunicaciones o controles concretos.

Todo ejercicio necesita objetivo, alcance, reglas, observadores y criterios de éxito. Los hallazgos deben tener propietario, plazo y verificación; un ejercicio sin corrección no mejora la preparación.

## 10. Ciclo de vida y protección de activos

1. Planificar necesidad, propietario, requisitos y riesgos.
2. Adquirir/desarrollar evaluando proveedor, seguridad, soporte y dependencias.
3. Registrar y clasificar: identificador, criticidad, ubicación, propietario y datos.
4. Desplegar baseline, parches, acceso y logging.
5. Operar, monitorizar, mantener y gestionar cambios.
6. Retirar: migrar datos, revocar accesos y claves, sanitizar, actualizar inventario y disponer del activo.

Incluye hardware, software, SaaS, repositorios, certificados, dominios, cuentas de servicio, snapshots y recursos cloud. **EOL** es fin de vida comercial/útil; **fin de soporte** significa que el proveedor deja de ofrecer mantenimiento o parches.

Un activo sin soporte exige actualizar, reemplazar, retirar o aplicar controles compensatorios documentados y temporales: aislamiento, acceso restringido y monitorización reforzada.

## 11. Pruebas técnicas y físicas

- **Blue team:** defiende, monitoriza, detecta y responde.
- **Red team:** simula adversarios contra objetivos acordados.
- **Purple team:** colaboración red/blue para compartir técnicas y mejorar detecciones.
- **Escaneo de vulnerabilidades:** identifica posibles debilidades; puede producir falsos positivos y no prueba explotación.
- **Pentest:** intenta validar/explotar vulnerabilidades dentro de un alcance autorizado.
- **SAST:** analiza código, bytecode o binarios sin ejecutar.
- **DAST:** prueba la aplicación en ejecución desde sus interfaces.
- **Threat modeling:** identifica activos, límites de confianza, flujos, actores y mitigaciones de forma proactiva.

Las pruebas físicas pueden incluir phishing autorizado, tailgating o impersonation. Todas necesitan autorización escrita, alcance, reglas, protección de datos, límites de seguridad y gestión de hallazgos.

Un informe debe incluir evidencia, riesgo, impacto, recomendación, propietario y fecha. Corregir o aceptar formalmente y volver a probar es más importante que contar vulnerabilidades.

## 12. IA en operaciones de seguridad

- IA puede correlacionar logs, agrupar alertas, enriquecer casos, detectar anomalías y resumir evidencia.
- Comprueba fuentes, contexto y evidencia original: una recomendación automática puede equivocarse.
- Automatiza antes acciones reversibles y de bajo riesgo; bloquear cuentas críticas o borrar sistemas requiere autoridad y supervisión.
- No introduzcas credenciales, secretos, datos sensibles o evidencia de incidentes en servicios públicos no autorizados.
- Inventaría modelos, datasets, prompts, plugins, configuraciones, cuentas de servicio y endpoints como activos.
- Define propietario, baseline, control de cambios, logging, accesos, retención y retirada.
- La IA no debe inventar evidencia; sus conclusiones deben ser trazables a fuentes originales.

## Trampas típicas del examen

- **Borrar no siempre destruye.** Considera remanencia, purga y destrucción física.
- **Un log no es fiable por existir.** Debe tener tiempo sincronizado, integridad, retención y protección.
- **Hash no es cifrado.** El hash detecta cambios; el cifrado protege confidencialidad.
- **Evento no es alerta ni incidente.** El triaje aporta contexto y decide el siguiente paso.
- **Severidad técnica no equivale a prioridad.** Importan activo, impacto, propagación y negocio.
- **KPI no es KRI.** KPI mide rendimiento; KRI exposición al riesgo.
- **SAST no es DAST.** SAST no ejecuta; DAST prueba en ejecución.
- **Escaneo no es pentest.** El escaneo identifica posibilidades; el pentest valida de forma autorizada.
- **IRP no es playbook.** El plan gobierna el programa; el playbook guía un escenario concreto.
- **Un ejercicio sin acciones correctivas no mejora la seguridad.** Hay que asignar, corregir y volver a verificar.
- **La IA no sustituye la evidencia ni la autoridad humana.** Automatiza apoyo, no responsabilidad.

## Mini mapa mental

**Datos → logs → configuración → triaje → inteligencia → respuesta → activos → pruebas → mejora continua.** Las operaciones eficaces convierten señales en decisiones trazables y decisiones en controles verificables.
