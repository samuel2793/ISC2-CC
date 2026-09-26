# Chuleta — Dominio 4: Seguridad de redes y de la nube

> Repaso de última hora: entiende qué comunica cada capa, qué controla cada dispositivo y cómo limitar el movimiento lateral entre redes, servicios y cargas.

## 1. Redes y dispositivos

| Elemento | Función principal | Pista de seguridad |
| --- | --- | --- |
| **LAN** | Red en un área limitada, como edificio o planta | Segmenta por función y sensibilidad |
| **WAN** | Conecta redes geográficamente alejadas | Protege enlaces y extremos |
| **Hub** | Repite tráfico a todos los puertos | Poco eficiente y expone más tráfico |
| **Switch** | Envía tramas al puerto asociado | Puede crear VLAN y separar dominios de broadcast |
| **Router** | Enruta paquetes entre redes | Controla rutas y conecta segmentos |
| **Firewall** | Filtra tráfico según reglas | Denegación por defecto y revisión de reglas |
| **Endpoint** | Extremo de una comunicación | Puede ser servidor, portátil, móvil o IoT |

**MAC** identifica una interfaz en la red local; **IP** es una dirección lógica enrutable. Ethernet (**IEEE 802.3**) define comunicaciones cableadas; Wi-Fi usa estándares inalámbricos de la familia 802.11.

## 2. OSI y TCP/IP

### Modelo OSI: de abajo arriba

| Capa | Nombre | Ejemplos / unidad |
| --- | --- | --- |
| 7 | Aplicación | HTTP, DNS, SMTP; datos |
| 6 | Presentación | Formato, cifrado, compresión; datos |
| 5 | Sesión | Establecer y mantener sesiones; datos |
| 4 | Transporte | TCP/UDP; segmentos o datagramas |
| 3 | Red | IP, routers; paquetes |
| 2 | Enlace de datos | Ethernet, switches, MAC; tramas |
| 1 | Física | Cable, radio, bits |

**Encapsulación** añade cabeceras al bajar por las capas; **desencapsulación** las interpreta y retira al subir. El modelo OSI es una referencia conceptual para localizar problemas y controles, no una suite de protocolos única.

### TCP/IP esencial

- **TCP:** orientado a conexión, fiable, ordenado y con control de entrega; más overhead.
- **UDP:** sin conexión, menor overhead y latencia; no garantiza entrega ni orden.
- **ICMP:** mensajes de control y diagnóstico; `ping` usa echo y `traceroute` ayuda a observar la ruta.
- **DNS:** traduce nombres a direcciones.
- **DHCP:** asigna configuración IP automáticamente.
- **HTTP/HTTPS:** comunicación web; HTTPS añade TLS.
- **SSH:** administración remota segura; sustituye a Telnet.
- **FTP:** transferencia sin protección inherente; usa alternativas seguras cuando corresponda.

## 3. Direccionamiento y puertos

- **IPv4:** 32 bits, notación decimal con cuatro octetos; usa subredes y máscara.
- **IPv6:** 128 bits, hexadecimal separado por `:`; `::1` es loopback y `2001:db8::/32` se usa en documentación.
- **127.0.0.1:** loopback IPv4.
- Rangos privados IPv4: `10.0.0.0/8`, `172.16.0.0/12` y `192.168.0.0/16`.
- Las direcciones privadas no son enrutable directamente en Internet; suelen traducirse mediante NAT.
- IPv6 no significa cifrado automático: IPsec puede estar disponible, pero la seguridad depende de configuración e implementación.

### Puertos frecuentes

| Servicio | Puerto habitual | Nota de seguridad |
| --- | ---: | --- |
| FTP | 20/21 | Sin cifrado inherente |
| SSH | 22 | Administración segura |
| Telnet | 23 | Texto claro; evitar |
| SMTP | 25 | Envío de correo; proteger y autenticar |
| DNS | 53 | UDP/TCP según uso |
| DHCP | 67/68 | Asignación automática |
| HTTP | 80 | Web sin TLS |
| POP3 | 110 | Correo; preferir variante segura |
| IMAP | 143 | Correo; preferir variante segura |
| HTTPS | 443 | Web sobre TLS |
| RDP | 3389 | Restringir y proteger con MFA/VPN |

**Regla de examen:** no memorices solo el número; asocia puerto, protocolo, servicio y riesgo. Un puerto abierto no es una vulnerabilidad por sí mismo, pero amplía superficie de ataque si el servicio no es necesario o está mal configurado.

## 4. Wi-Fi, Bluetooth y redes inalámbricas

Los riesgos inalámbricos incluyen escuchas, puntos de acceso falsos, interferencias, suplantación, configuraciones débiles y dispositivos fuera del perímetro físico.

- Usa WPA2/WPA3 según compatibilidad y configuración segura; evita protocolos obsoletos.
- Protege la administración del punto de acceso, cambia credenciales predeterminadas y actualiza firmware.
- Separa red corporativa, invitados e IoT; no confíes solo en ocultar el SSID.
- Verifica certificados y redes antes de conectarte; una red con nombre conocido puede ser falsa.
- En Bluetooth, desactiva cuando no sea necesario, evita modo detectable permanente, confirma emparejamientos, elimina vínculos antiguos y no aceptes solicitudes inesperadas.

## 5. Amenazas y controles de red

### Amenazas habituales

- **Sniffing:** captura de tráfico; el cifrado reduce exposición del contenido.
- **Spoofing:** suplantación de identidad, dirección o servicio.
- **Man-in-the-middle:** interceptación y posible modificación entre partes.
- **DoS/DDoS:** agotamiento de recursos desde uno o muchos orígenes.
- **Ransomware y malware:** cifrado, destrucción o control de sistemas.
- **Escaneo y reconocimiento:** búsqueda de hosts, puertos y servicios.
- **VLAN hopping:** intento de acceder a tráfico de otras VLAN.
- **Movimiento lateral:** desplazamiento desde un sistema comprometido a otros segmentos o recursos.

### Herramientas y funciones

- **IDS:** detecta y alerta; no necesariamente bloquea.
- **IPS:** inspecciona y puede bloquear o prevenir tráfico malicioso en línea.
- **Firewall:** permite o deniega según origen, destino, puerto, protocolo, aplicación, identidad o contexto.
- **NAC:** valida identidad, estado y cumplimiento del dispositivo antes o durante su conexión; puede ponerlo en red corporativa, de invitados o de cuarentena.
- **Proxy:** intermedia solicitudes, aplica política y puede registrar o filtrar.

Las alertas automáticas son señales para investigar. Una detección no prueba por sí sola que exista un ataque; analiza contexto, falsos positivos y procedimiento de escalado.

## 6. Arquitectura y segmentación

### Zonas típicas

- **Externa/no confiable:** Internet y redes fuera del control de la organización.
- **DMZ:** servicios que necesitan exposición externa, como web o correo; aislados de la red interna.
- **Interna:** usuarios y servicios corporativos.
- **Restringida:** administración, bases de datos, datos sensibles y sistemas críticos.
- **Invitados/IoT:** dispositivos que no deben acceder directamente a recursos internos.

La regla preferida es **denegar por defecto y permitir solo flujos necesarios**. Las reglas deben tener propósito, propietario, alcance, caducidad cuando proceda y revisión. Controla también el tráfico de salida para limitar exfiltración y comunicación con infraestructura maliciosa.

### Segmentación

- **Física:** infraestructura separada; mayor aislamiento, normalmente más coste.
- **Lógica:** VLAN, subredes, ACL, firewalls y SDN; flexible, pero sensible a errores de configuración.
- **VLAN:** segmenta a nivel de enlace y limita broadcast; no garantiza seguridad completa ni impide por sí sola VLAN hopping.
- **Microsegmentación:** políticas granulares entre cargas, aplicaciones o procesos; reduce movimiento lateral en centros de datos y nube.
- **DMZ:** separa servicios públicos de la red interna; no debe tratarse como una zona plenamente confiable.

### Zero Trust

Zero Trust no confía automáticamente por estar dentro de la red. Cada solicitud se evalúa según identidad, dispositivo, recurso, contexto y política; aplica mínimo privilegio y monitorización continua.

**Zero Trust es una estrategia amplia, no solo una VLAN, una VPN o una microsegmentación.**

## 7. VPN y comunicaciones seguras

Una VPN es una conexión lógica punto a punto entre hosts o gateways. **No es necesariamente un túnel cifrado:** la confidencialidad depende de los protocolos y de la configuración.

- **Acceso remoto:** usuario/dispositivo hacia recursos de la organización.
- **Gateway-to-gateway:** conecta sedes o socios por Internet.
- Protege autenticación, claves, endpoints, rutas y permisos; una VPN no debe conceder acceso indiscriminado a toda la red.
- Usa MFA, segmentación y acceso mínimo; monitoriza sesiones y revoca accesos cuando ya no sean necesarios.

## 8. Nube y responsabilidad compartida

### Características esenciales

- Autoservicio bajo demanda.
- Acceso amplio a la red.
- Agrupación de recursos compartidos con separación lógica.
- Elasticidad rápida.
- Servicio medido.

**Escalabilidad** es poder aumentar o reducir capacidad; **elasticidad** es hacerlo dinámicamente según demanda.

### Modelos de servicio

| Modelo | Proveedor gestiona | Cliente conserva responsabilidad sobre |
| --- | --- | --- |
| **IaaS** | Instalaciones, hardware y virtualización | Sistemas operativos, red/configuración, aplicaciones, identidades y datos |
| **PaaS** | Lo anterior + sistema operativo y plataforma | Código, datos, identidades y configuración disponible |
| **SaaS** | Aplicación e infraestructura operada | Usuarios, permisos, configuración, uso y datos bajo su control |

Las fronteras exactas dependen del servicio y el contrato. El proveedor protege la infraestructura **de** la nube; el cliente configura y protege lo que pone **en** la nube.

### Modelos de despliegue

- **Pública:** proveedor ofrece recursos a múltiples clientes.
- **Privada:** dedicada a una organización.
- **Comunitaria:** compartida por organizaciones con requisitos comunes.
- **Híbrida:** integra dos o más entornos.

Riesgos que el cliente no puede delegar: almacenamiento público accidental, permisos excesivos, secretos expuestos, cuentas sin MFA, recursos olvidados, falta de logging, datos fuera de región y claves de API sin control.

## 9. IoT, sistemas embebidos e ICS

- **IoT:** dispositivos conectados que recogen datos o actúan sobre el entorno; cambia credenciales predeterminadas, desactiva servicios innecesarios, actualiza y segmenta.
- **Sistema embebido:** función específica dentro de un equipo mayor; puede tener recursos limitados, soporte largo y pocas opciones de parcheo.
- **ICS/OT:** controla procesos físicos de fabricación, energía, agua, transporte o edificios; una alteración puede afectar seguridad humana y producción.

Antes de conectar un dispositivo, identifica propietario, finalidad, versión, interfaces, dependencias, soporte y retirada. Si no admite controles directos, usa controles compensatorios: segmentación, filtrado, monitorización y acceso restringido.

En ICS, disponibilidad y seguridad física pueden ser prioritarias. No apliques parches ni escaneos agresivos sin probarlos y coordinarlos; separa OT de redes corporativas e Internet y limita el movimiento lateral.

## 10. IA en redes y cloud

- Puede detectar anomalías, correlacionar eventos e identificar comportamientos que no coinciden con firmas conocidas.
- También puede generar falsos positivos/negativos, depender de datos deficientes y automatizar ataques o evasión.
- Los datos de entrenamiento, modelos, interfaces y recursos de cómputo son activos de alto valor.
- Separa desarrollo, entrenamiento y producción; limita cuentas de servicio y aplica microsegmentación.
- Protege endpoints públicos, claves API, logs, datos de entrada y dependencias de proveedor.
- Comprueba si el proveedor conserva entradas, las usa para entrenar, las comparte o las procesa fuera de la región esperada.
- Una alerta de IA requiere contexto, procedimiento y supervisión; no reemplaza controles preventivos ni revisión humana.

## Trampas típicas del examen

- **Switch no es router.** El switch conecta dentro del segmento; el router conecta redes y decide rutas.
- **IDS no es IPS.** IDS alerta; IPS puede bloquear en línea.
- **VLAN no es seguridad completa.** Segmenta broadcast, pero necesita controles entre segmentos y protección contra hopping.
- **DMZ no es red interna.** Expone servicios necesarios con aislamiento adicional.
- **VPN no implica cifrado automáticamente.** Depende de la configuración y protocolos.
- **IPv6 no está cifrado por defecto.** IPsec disponible no significa IPsec activo en todo el tráfico.
- **Zero Trust no es solo microsegmentación.** Verifica cada solicitud y combina identidad, contexto y mínimo privilegio.
- **Cloud no elimina responsabilidad del cliente.** Datos, identidades, permisos y configuración siguen siendo críticos.
- **SaaS no transfiere todo al proveedor.** El cliente conserva usuarios, permisos, configuración y uso.
- **IoT/ICS no son simples endpoints.** Pueden tener limitaciones y consecuencias físicas; inventaría y segmenta.
- **Una anomalía no es un incidente confirmado.** Investiga y escala según el procedimiento.

## Mini mapa mental

**Capas OSI/TCP-IP → dispositivos y puertos → amenazas → IDS/IPS/NAC/firewall → segmentación/DMZ/VLAN → Zero Trust/VPN → nube compartida → IoT/ICS → IA supervisada.**
