const DOMAINS = [
  {
    id: "dominio-1",
    number: "Dominio 1",
    title: "Principios de Seguridad",
    path: "Dominio 1: Principios de Seguridad",
    files: [
      "01.La Triada de Confidencialidad, Integridad y Disponibilidad (CIA).md",
      "02.Profundizacion en la Triada CIA.md",
      "03.CIA en el mundo real.md",
      "04.Autenticacion.md",
      "05.Metodos de autenticacion.md",
      "06.Demostracion de identidad.md",
      "07.No repudio.md",
      "08.Privacidad.md",
      "09.Privacidad en el entorno laboral.md",
      "10.Proteccion de la informacion.md",
      "11.Introduccion a la gestion del riesgo.md",
      "12.Importancia de la gestion del riesgo.md",
      "13.Terminologia de gestion del riesgo.md",
      "14.Amenazas, vulnerabilidades y probabilidad.md",
      "15.Identificacion de riesgos.md",
      "16.Evaluacion de riesgos.md",
      "17.Tratamiento del riesgo.md",
      "18.El riesgo en nuestra vida.md",
      "19.Prioridades de riesgo.md",
      "20.Toma de decisiones basada en prioridades de riesgo.md",
      "21.Tolerancia al riesgo.md",
      "22.La tolerancia al riesgo impulsa la toma de decisiones.md",
      "23.Que son los controles de seguridad.md",
      "24.Estableciendo conexiones.md",
      "25.Elementos de gobernanza.md",
      "26.Importancia de los elementos de gobernanza.md",
      "27.Codigo profesional de conducta.md",
      "28.Ejemplo teorico Codigo de Etica.md"
    ]
  },
  {
    id: "dominio-2",
    number: "Dominio 2",
    title: "Respuesta a Incidentes, Continuidad del Negocio y Recuperacion ante Desastres",
    path: "Dominio 2: Respuesta a Incidentes, Continuidad del Negocio y Recuperacion ante Desastres",
    files: [
      "01.Terminologia de incidentes.md",
      "02.El objetivo de la respuesta a incidentes.md",
      "03.Componentes del plan de respuesta a incidentes.md",
      "04.Consulta con la direccion.md",
      "05.Equipo de respuesta a incidentes.md",
      "06.Continuidad del negocio en el lugar de trabajo.md",
      "07.El objetivo de la continuidad del negocio.md",
      "08.La importancia de la continuidad del negocio.md",
      "09.El objetivo de la recuperacion ante desastres.md",
      "10.Recuperacion ante desastres en el mundo real.md",
      "11.Componentes de un plan de continuidad del negocio.md",
      "12.Continuidad del negocio en accion.md",
      "13.Componentes de un plan de recuperacion ante desastres.md"
    ]
  },
  {
    id: "dominio-3",
    number: "Dominio 3",
    title: "Conceptos de Control de Acceso",
    path: "Dominio 3: Conceptos de Control de Acceso",
    files: [
      "01.Controles de seguridad.md",
      "02.Resumen de controles.md",
      "03.Evaluaciones de controles.md",
      "04.Defensa en profundidad.md",
      "05.Defensa en profundidad en la practica.md",
      "06.Ejemplos de minimo privilegio.md",
      "07.Gestion de acceso privilegiado.md",
      "08.Cuentas privilegiadas.md",
      "09.Separacion de funciones.md",
      "10.Personal autorizado frente a no autorizado.md",
      "11.El beneficio de multiples controles.md",
      "12.Controles de seguridad fisica.md",
      "13.Tipos de controles de acceso fisico.md",
      "14.Monitoreo.md",
      "15.Controles de acceso logico.md",
      "16.Control de acceso discrecional (DAC).md",
      "17.Control de acceso obligatorio (MAC).md",
      "18.Control de acceso obligatorio (MAC) en el lugar de trabajo.md",
      "19.Control de acceso basado en roles.md",
      "20.Controles y riesgos.md",
      "21.Control de acceso basado en roles (RBAC) en el lugar de trabajo.md"
    ]
  },
  {
    id: "dominio-4",
    number: "Dominio 4",
    title: "Seguridad de Redes",
    path: "Dominio 4: Seguridad de Redes",
    files: [
      "01.Redes.md",
      "02.Redes de un vistazo.md",
      "03.Modelos de red.md",
      "04.Modelo Open Systems Interconnection (OSI).md",
      "05.Protocolo de Control de Transmision Protocolo de Internet (TCP IP).md",
      "06.Protocolo de Internet (IPv4 e IPv6).md",
      "07.Wi-Fi.md",
      "08.Seguridad de la red.md",
      "09.Puertos y protocolos (aplicaciones y servicios).md",
      "10.Puertos seguros.md",
      "11.Handshake SYN, SYN-ACK, ACK.md",
      "12.Tipos de amenazas.md",
      "13.Herramientas para identificar y prevenir amenazas.md",
      "14.Sistema de deteccion de intrusiones (IDS).md",
      "15.Identificacion de amenazas.md",
      "16.Prevencion de amenazas.md",
      "17.Centros de datos on-premises.md",
      "18.Profundizacion en centros de datos on-premises.md",
      "19.Redundancia.md",
      "20.Ejemplo de redundancia (aplicacion).md",
      "21.Memorando de entendimiento (MOU) y memorando de acuerdo (MOA).md",
      "22.Computacion en la nube.md",
      "23.Redundancia en la nube.md",
      "24.Caracteristicas de la nube.md",
      "25.Modelos de servicio.md",
      "26.Modelos de despliegue.md",
      "27.Proveedor de servicios gestionados (MSP).md",
      "28.Acuerdo de nivel de servicio (SLA).md",
      "29.Diseno de red.md",
      "30.Defensa en profundidad.md",
      "31.Zero Trust.md",
      "32.Control de acceso a la red (NAC).md",
      "33.Profundizacion en control de acceso a la red (NAC).md",
      "34.Segmentacion de red zona desmilitarizada (DMZ).md",
      "35.Profundizacion en DMZ (zona desmilitarizada).md",
      "36.Segmentacion para sistemas embebidos e IoT.md",
      "37.Profundizacion en segmentacion para sistemas embebidos e IoT.md",
      "38.Caracteristicas de la microsegmentacion.md",
      "39.Red de area local virtual (VLAN).md",
      "40.Segmentacion con red de area local virtual (VLAN).md",
      "41.Red privada virtual (VPN).md"
    ]
  },
  {
    id: "dominio-5",
    number: "Dominio 5",
    title: "Operaciones de Seguridad",
    path: "Dominio 5: Operaciones de Seguridad",
    files: [
      "01.Manejo de datos.md",
      "02.Profundizacion en manejo de datos.md",
      "03.Practicas de manejo de datos.md",
      "04.Logging y monitoreo de eventos de seguridad.md",
      "05.Ejemplo de evento de seguridad de datos.md",
      "06.Buenas practicas de logging de eventos.md",
      "07.Resumen de cifrado.md",
      "08.Profundizacion en cifrado.md",
      "09.Como funcionan las contrasenas.md",
      "10.Resumen de gestion de configuracion.md",
      "11.Los riesgos del cambio.md",
      "12.Politicas de seguridad comunes.md",
      "13.Profundizacion en politicas de seguridad comunes.md",
      "14.Componentes de gestion de cambios.md",
      "15.Componentes de gestion de cambios en el lugar de trabajo.md",
      "16.Apoyo de politicas de seguridad con procedimientos.md",
      "17.Capacitacion en concienciacion de seguridad.md",
      "18.Ejemplo de capacitacion en concienciacion de seguridad.md",
      "19.Consejos y ejemplos de contrasenas.md",
      "20.Proteccion de contrasenas.md",
      "21.Buenas practicas de capacitacion en concienciacion de seguridad.md",
      "22.Hashing y funciones hash.md",
      "23.Profundizacion en hashing.md",
      "24.Phishing.md",
      "25.Cifrado asimetrico.md",
      "26.Cifrado simetrico.md",
      "27.Ingenieria social.md"
    ]
  }
];

const menu = document.querySelector("#domainMenu");
const tocList = document.querySelector("#tocList");
const content = document.querySelector("#content");
const searchInput = document.querySelector("#searchInput");
const printButton = document.querySelector("#printButton");

let activeDomain = null;
let activeLessons = [];

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseInline(value, basePath) {
  let html = escapeHtml(value);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const url = href.startsWith("http") || href.startsWith("#") ? href : encodePath(`${basePath}/${href}`);
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });

  return html;
}

function renderMarkdown(markdown, basePath) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      const alt = escapeHtml(image[1] || "imagen");
      const src = encodePath(`${basePath}/${image[2]}`);
      blocks.push(`<img src="${src}" alt="${alt}" loading="lazy">`);
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 5);
      blocks.push(`<h${level}>${parseInline(heading[2], basePath)}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(`<li>${parseInline(lines[index].trim().slice(2), basePath)}</li>`);
        index += 1;
      }
      blocks.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    const paragraph = [trimmed];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || next.startsWith("#") || next.startsWith("- ") || next.startsWith("![")) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }
    blocks.push(`<p>${parseInline(paragraph.join(" "), basePath)}</p>`);
  }

  return blocks.join("\n");
}

function titleFromFile(file) {
  return file.replace(/^\d+\./, "").replace(/\.md$/, "");
}

function lessonId(domainId, file) {
  return `${domainId}-${file.slice(0, 2)}`;
}

function renderMenu() {
  menu.innerHTML = DOMAINS.map((domain) => `
    <button class="domain-button" type="button" data-domain="${domain.id}">
      <span class="domain-number">${domain.number}</span>
      <span class="domain-title">${domain.title}</span>
    </button>
  `).join("");

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-domain]");
    if (!button) return;
    loadDomain(button.dataset.domain);
  });
}

function renderToc(domain) {
  tocList.innerHTML = domain.files.map((file) => `
    <li><a href="#${lessonId(domain.id, file)}">${escapeHtml(titleFromFile(file))}</a></li>
  `).join("");
}

function setActiveButton(domainId) {
  document.querySelectorAll(".domain-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.domain === domainId);
  });
}

async function fetchLesson(domain, file) {
  const response = await fetch(encodePath(`${domain.path}/${file}`));
  if (!response.ok) {
    throw new Error(`No se pudo cargar ${file}`);
  }

  return {
    file,
    markdown: await response.text()
  };
}

async function loadDomain(domainId, updateHash = true) {
  const domain = DOMAINS.find((item) => item.id === domainId) || DOMAINS[0];

  activeDomain = domain;
  activeLessons = [];
  setActiveButton(domain.id);
  renderToc(domain);
  searchInput.value = "";

  content.innerHTML = `<div class="loading-state">Cargando ${escapeHtml(domain.number)}...</div>`;

  try {
    const lessons = await Promise.all(domain.files.map((file) => fetchLesson(domain, file)));
    activeLessons = lessons;
    renderDomain(domain, lessons);

    if (updateHash) {
      history.replaceState(null, "", `#${domain.id}`);
    }
  } catch (error) {
    content.innerHTML = `<div class="error-state">${escapeHtml(error.message)}</div>`;
  }
}

function renderDomain(domain, lessons) {
  const body = lessons.map((lesson) => `
    <article id="${lessonId(domain.id, lesson.file)}" class="lesson markdown" data-search="${escapeHtml((titleFromFile(lesson.file) + " " + lesson.markdown).toLowerCase())}">
      ${renderMarkdown(lesson.markdown, domain.path)}
    </article>
  `).join("");

  content.innerHTML = `
    <header class="domain-header">
      <h1>${escapeHtml(domain.number)}: ${escapeHtml(domain.title)}</h1>
      <p class="domain-meta">${lessons.length} secciones unidas en una sola lectura.</p>
    </header>
    <div class="document">${body}</div>
  `;
}

function highlightText(container, query) {
  if (!query) return;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.toLowerCase().includes(query)) return NodeFilter.FILTER_REJECT;
      if (node.parentElement.closest("script, style, mark")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const text = node.nodeValue;
    const lower = text.toLowerCase();
    const fragment = document.createDocumentFragment();
    let start = 0;
    let match = lower.indexOf(query);

    while (match !== -1) {
      fragment.append(document.createTextNode(text.slice(start, match)));
      const mark = document.createElement("mark");
      mark.textContent = text.slice(match, match + query.length);
      fragment.append(mark);
      start = match + query.length;
      match = lower.indexOf(query, start);
    }

    fragment.append(document.createTextNode(text.slice(start)));
    node.parentNode.replaceChild(fragment, node);
  });
}

function filterLessons() {
  if (!activeDomain || activeLessons.length === 0) return;

  renderDomain(activeDomain, activeLessons);

  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  document.querySelectorAll(".lesson").forEach((lesson) => {
    const visible = lesson.dataset.search.includes(query);
    lesson.hidden = !visible;
    if (visible) highlightText(lesson, query);
  });
}

searchInput.addEventListener("input", filterLessons);
printButton.addEventListener("click", () => window.print());
window.addEventListener("hashchange", () => loadDomain(location.hash.slice(1), false));

renderMenu();
loadDomain(location.hash.slice(1) || DOMAINS[0].id, false);
