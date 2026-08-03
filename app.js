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
const epubButton = document.querySelector("#epubButton");
const printButton = document.querySelector("#printButton");
const testMenuButton = document.querySelector("#testMenuButton");

let activeDomain = null;
let activeLessons = [];
let testBatteries = [];
let currentTestRun = null;
let testPopoverOutsideHandler = null;
const textEncoder = new TextEncoder();
const baseUrl = new URL(".", document.baseURI);
const OFFICIAL_PASSING_SCORE = 700;
const OFFICIAL_SCORE_MAX = 1000;

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function siteUrl(path) {
  return new URL(encodePath(path), baseUrl).href;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseInline(value, basePath, options = {}) {
  let html = escapeHtml(value);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const url = href.startsWith("http") || href.startsWith("#") ? href : siteUrl(`${basePath}/${href}`);
    const attributes = options.xhtml ? "" : ' target="_blank" rel="noopener noreferrer"';
    return `<a href="${url}"${attributes}>${label}</a>`;
  });

  return html;
}

function renderMarkdown(markdown, basePath, options = {}) {
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
      const src = options.resolveMediaSrc
        ? options.resolveMediaSrc(image[2])
        : siteUrl(`${basePath}/${image[2]}`);
      const lazy = options.xhtml ? "" : ' loading="lazy"';
      const close = options.xhtml ? " />" : ">";
      blocks.push(`<img src="${src}" alt="${alt}"${lazy}${close}`);
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 5);
      blocks.push(`<h${level}>${parseInline(heading[2], basePath, options)}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(`<li>${parseInline(lines[index].trim().slice(2), basePath, options)}</li>`);
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
    blocks.push(`<p>${parseInline(paragraph.join(" "), basePath, options)}</p>`);
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
  testMenuButton.classList.remove("active");
}

async function fetchLesson(domain, file) {
  const url = siteUrl(`${domain.path}/${file}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`No se pudo cargar ${file} (${response.status})`);
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
  searchInput.disabled = false;
  searchInput.placeholder = "Buscar en el dominio actual";

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

function resolveTestPath(file) {
  return file.includes("/") ? file : `tests/${file}`;
}

function slugify(value, fallback = "grupo") {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || fallback;
}

function answerIndex(question) {
  const answer = question.respuesta ?? question.correcta;
  if (Number.isInteger(answer)) return answer;
  if (typeof answer === "string") return question.opciones.indexOf(answer);
  return -1;
}

function normalizeBattery(raw, sourceName, group = null) {
  if (!raw || typeof raw !== "object") {
    throw new Error(`${sourceName}: la bateria no es un objeto JSON valido`);
  }

  if (!raw.procedencia || typeof raw.procedencia !== "string") {
    throw new Error(`${sourceName}: falta el atributo obligatorio "procedencia"`);
  }

  if (!Array.isArray(raw.preguntas) || raw.preguntas.length === 0) {
    throw new Error(`${sourceName}: falta un array "preguntas" con al menos una pregunta`);
  }

  const preguntas = raw.preguntas.map((question, index) => {
    if (!question || typeof question !== "object") {
      throw new Error(`${sourceName}: la pregunta ${index + 1} no es valida`);
    }

    const texto = question.pregunta || question.enunciado;
    const opciones = question.opciones || question.respuestas;

    if (!texto || typeof texto !== "string") {
      throw new Error(`${sourceName}: la pregunta ${index + 1} no tiene "pregunta"`);
    }

    if (!Array.isArray(opciones) || opciones.length < 2) {
      throw new Error(`${sourceName}: la pregunta ${index + 1} necesita al menos dos opciones`);
    }

    const normalized = {
      pregunta: texto,
      opciones: opciones.map(String),
      respuesta: question.respuesta ?? question.correcta,
      explicacion: question.explicacion ? String(question.explicacion) : ""
    };

    const correct = answerIndex(normalized);
    if (correct < 0 || correct >= normalized.opciones.length) {
      throw new Error(`${sourceName}: la respuesta de la pregunta ${index + 1} no coincide con ninguna opcion`);
    }

    return normalized;
  });

  return {
    id: `${sourceName}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    titulo: raw.titulo || sourceName.replace(/\.json$/i, ""),
    descripcion: raw.descripcion || "",
    procedencia: raw.procedencia,
    grupo: group,
    preguntas
  };
}

async function fetchJson(path) {
  const response = await fetch(siteUrl(path));
  if (!response.ok) throw new Error(`No se pudo cargar ${path} (${response.status})`);
  return response.json();
}

async function loadTestBatteries() {
  const manifest = await fetchJson("tests/manifest.json");
  const entries = [];

  function pushEntry(file, group = null) {
    if (typeof file !== "string" || !file.trim()) {
      throw new Error('tests/manifest.json contiene una bateria sin ruta valida');
    }
    entries.push({ file, group });
  }

  if (Array.isArray(manifest)) {
    manifest.forEach((file) => pushEntry(file, null));
  } else if (manifest && typeof manifest === "object") {
    if (Array.isArray(manifest.baterias)) {
      manifest.baterias.forEach((item) => {
        if (typeof item === "string") {
          pushEntry(item, null);
          return;
        }
        if (item && typeof item === "object" && typeof item.archivo === "string") {
          pushEntry(item.archivo, item.grupo || null);
          return;
        }
        throw new Error('tests/manifest.json contiene una entrada de bateria no valida');
      });
    }

    if (Array.isArray(manifest.grupos)) {
      manifest.grupos.forEach((group, groupIndex) => {
        if (!group || typeof group !== "object") {
          throw new Error(`tests/manifest.json: el grupo ${groupIndex + 1} no es valido`);
        }

        const groupName = group.titulo || group.nombre || group.id || `Grupo ${groupIndex + 1}`;
        if (!Array.isArray(group.baterias)) {
          throw new Error(`tests/manifest.json: el grupo "${groupName}" necesita un array "baterias"`);
        }

        group.baterias.forEach((item) => {
          if (typeof item === "string") {
            pushEntry(item, {
              id: group.id || slugify(groupName, `grupo-${groupIndex + 1}`),
              titulo: groupName
            });
            return;
          }
          if (item && typeof item === "object" && typeof item.archivo === "string") {
            pushEntry(item.archivo, {
              id: group.id || slugify(groupName, `grupo-${groupIndex + 1}`),
              titulo: item.grupo || groupName
            });
            return;
          }
          throw new Error(`tests/manifest.json: el grupo "${groupName}" contiene una bateria no valida`);
        });
      });
    }
  }

  if (!entries.length) {
    throw new Error('tests/manifest.json debe contener "baterias" o "grupos" con al menos una bateria');
  }

  const batteries = await Promise.all(entries.map(async ({ file, group }) => {
    const path = resolveTestPath(file);
    const raw = await fetchJson(path);
    return normalizeBattery(raw, path, group);
  }));

  return batteries;
}

function setTestViewActive(updateHash = true) {
  activeDomain = null;
  activeLessons = [];
  document.querySelectorAll(".domain-button").forEach((button) => {
    button.classList.remove("active");
  });
  testMenuButton.classList.add("active");
  tocList.innerHTML = "";
  searchInput.value = "";
  searchInput.disabled = true;
  searchInput.placeholder = "Busca dentro de un dominio";

  if (updateHash) {
    history.replaceState(null, "", "#tests");
  }
}

async function loadTestsView(updateHash = true) {
  setTestViewActive(updateHash);
  content.innerHTML = '<div class="loading-state">Cargando baterias de test...</div>';

  try {
    testBatteries = await loadTestBatteries();
    renderTestHome();
  } catch (error) {
    testBatteries = [];
    renderTestHome(error.message);
  }
}

function renderTestHome(errorMessage = "") {
  const totalQuestions = testBatteries.reduce((sum, battery) => sum + battery.preguntas.length, 0);
  const groupedBatteries = testBatteries.reduce((groups, battery, index) => {
    const key = battery.grupo?.id || "__sin_grupo__";
    const title = battery.grupo?.titulo || "Sin grupo";
    if (!groups.has(key)) groups.set(key, { title, items: [] });
    groups.get(key).items.push({ battery, index });
    return groups;
  }, new Map());
  const options = [...groupedBatteries.entries()].map(([groupId, group]) => `
    <section class="battery-group" data-group="${escapeHtml(groupId)}">
      <div class="battery-group-header">
        <div>
          <p class="battery-group-title">${escapeHtml(group.title)}</p>
          <p class="battery-group-meta">${group.items.length} baterias</p>
        </div>
        <div class="battery-group-actions">
          <button class="battery-group-toggle" type="button" data-group-action="select" data-group-id="${escapeHtml(groupId)}">Marcar grupo</button>
          <button class="battery-group-toggle" type="button" data-group-action="clear" data-group-id="${escapeHtml(groupId)}">Desmarcar grupo</button>
        </div>
      </div>
      <div class="battery-group-list">
        ${group.items.map(({ battery, index }) => `
          <label class="battery-option">
            <input type="checkbox" name="testBatteryOption" value="${index}" checked data-group-id="${escapeHtml(groupId)}">
            <span>
              <span class="battery-option-title">${escapeHtml(battery.titulo)}</span>
              <span class="battery-option-meta">${battery.preguntas.length} preguntas</span>
            </span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");

  content.innerHTML = `
    <div class="test-panel">
      <div class="test-shell">
        <section class="test-topbar">
          <div class="test-heading">
            <span class="test-kicker">Simulador CC</span>
            <h1>Tests</h1>
            <p>Sesion continua, correccion inmediata y combinacion libre de baterias en una interfaz pensada para practicar sin ruido.</p>
          </div>

          <div class="test-selector">
            <label class="field-label">
              Baterias activas
              <div class="battery-picker-wrap">
                <button id="testBatteryTrigger" class="battery-picker-trigger" type="button" aria-haspopup="dialog" aria-expanded="false">
                  <span class="battery-picker-summary">
                    <span class="battery-picker-caption">Seleccion actual</span>
                    <span id="testBatteryTriggerValue" class="battery-picker-value">Todas las baterias</span>
                  </span>
                  <span class="battery-picker-chevron">▾</span>
                </button>

                <div id="testBatteryPopover" class="battery-picker-popover" role="dialog" aria-label="Seleccion de baterias">
                  <div class="battery-picker-head">
                    <span class="battery-picker-headline">Selecciona las baterias a combinar</span>
                    <p class="test-meta">Puedes mezclar varias fuentes en una sola sesion. Las preguntas se barajan al iniciar.</p>
                    <div class="battery-actions">
                      <button id="selectAllBatteriesButton" class="battery-toggle" type="button">Marcar todas</button>
                      <button id="clearAllBatteriesButton" class="battery-toggle" type="button">Desmarcar todas</button>
                    </div>
                  </div>
                  <div id="testBatteryPicker" class="battery-picker">
                    ${options || '<p class="test-meta">No hay baterias cargadas.</p>'}
                  </div>
                </div>
              </div>
            </label>
          </div>
        </section>

        ${errorMessage ? `<div class="error-state">${escapeHtml(errorMessage)}</div>` : ""}

        <section class="test-dashboard">
          <div class="test-stat test-stat-emphasis">
            <span class="test-stat-value">${groupedBatteries.size}</span>
            <span class="test-stat-label">Conjuntos cargados</span>
          </div>
          <div class="test-stat">
            <span class="test-stat-value">${testBatteries.length}</span>
            <span class="test-stat-label">Baterias disponibles</span>
          </div>
          <div class="test-stat">
            <span class="test-stat-value">${totalQuestions}</span>
            <span class="test-stat-label">Preguntas disponibles</span>
          </div>
          <div class="test-stat">
            <span class="test-stat-value">${OFFICIAL_PASSING_SCORE}/${OFFICIAL_SCORE_MAX}</span>
            <span class="test-stat-label">Escala oficial publicada</span>
          </div>
        </section>

        <p class="test-official-note">ISC2 publica para Certified in Cybersecurity un umbral de aprobado de ${OFFICIAL_PASSING_SCORE} sobre ${OFFICIAL_SCORE_MAX}. La puntuacion mostrada aqui es solo una equivalencia orientativa del simulador.</p>

        <div id="testMount"></div>
      </div>
    </div>
  `;

  const picker = document.querySelector("#testBatteryPicker");
  const trigger = document.querySelector("#testBatteryTrigger");
  const triggerValue = document.querySelector("#testBatteryTriggerValue");
  const popover = document.querySelector("#testBatteryPopover");
  const selectAllButton = document.querySelector("#selectAllBatteriesButton");
  const clearAllButton = document.querySelector("#clearAllBatteriesButton");

  if (testPopoverOutsideHandler) {
    document.removeEventListener("click", testPopoverOutsideHandler);
    testPopoverOutsideHandler = null;
  }

  function updateTriggerLabel() {
    const selected = selectedBatteries();
    if (!triggerValue) return;
    if (!selected.length) {
      triggerValue.textContent = "Ninguna bateria";
      return;
    }
    if (selected.length === testBatteries.length) {
      triggerValue.textContent = `Todas las baterias (${selected.length})`;
      return;
    }
    if (selected.length === 1) {
      triggerValue.textContent = selected[0].titulo;
      return;
    }
    triggerValue.textContent = `${selected.length} baterias seleccionadas`;
  }

  function closePopover() {
    popover?.classList.remove("open");
    trigger?.setAttribute("aria-expanded", "false");
  }

  function togglePopover() {
    if (!popover || !trigger) return;
    const opening = !popover.classList.contains("open");
    popover.classList.toggle("open", opening);
    trigger.setAttribute("aria-expanded", opening ? "true" : "false");
  }

  picker?.addEventListener("change", () => {
    updateTriggerLabel();
    startSelectedBatteries();
  });
  trigger?.addEventListener("click", togglePopover);
  trigger?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePopover();
  });
  selectAllButton?.addEventListener("click", () => {
    setAllBatterySelections(true);
    updateTriggerLabel();
  });
  clearAllButton?.addEventListener("click", () => {
    setAllBatterySelections(false);
    updateTriggerLabel();
  });
  popover?.querySelectorAll("[data-group-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.getAttribute("data-group-id");
      const checked = button.getAttribute("data-group-action") === "select";
      popover.querySelectorAll(`input[name="testBatteryOption"][data-group-id="${groupId}"]`).forEach((input) => {
        input.checked = checked;
      });
      updateTriggerLabel();
      startSelectedBatteries();
    });
  });
  testPopoverOutsideHandler = (event) => {
    if (!popover || !trigger) return;
    if (!popover.classList.contains("open")) return;
    if (popover.contains(event.target) || trigger.contains(event.target)) return;
    closePopover();
  };
  document.addEventListener("click", testPopoverOutsideHandler);

  if (testBatteries.length) {
    updateTriggerLabel();
    startSelectedBatteries();
  }
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function startBattery(battery) {
  currentTestRun = {
    battery,
    order: shuffle(battery.preguntas.map((_, index) => index)),
    position: 0,
    correct: 0,
    answers: [],
    currentAnswer: null
  };

  renderCurrentQuestion();
}

function selectedBatteries() {
  const checked = [...document.querySelectorAll('input[name="testBatteryOption"]:checked')];
  return checked.map((input) => testBatteries[Number(input.value)]).filter(Boolean);
}

function combineBatteries(batteries) {
  return {
    id: batteries.map((battery) => battery.id).join("+"),
    titulo: batteries.length === 1 ? batteries[0].titulo : `Bateria combinada (${batteries.length})`,
    descripcion: batteries.length === 1
      ? batteries[0].descripcion
      : "Union de varias baterias seleccionadas.",
    procedencia: batteries.map((battery) => battery.procedencia).join(" | "),
    preguntas: batteries.flatMap((battery) => battery.preguntas)
  };
}

function startSelectedBatteries() {
  const batteries = selectedBatteries();
  if (!batteries.length) {
    const mount = document.querySelector("#testMount");
    if (mount) {
      mount.innerHTML = '<div class="empty-state">Selecciona al menos una bateria para empezar el test.</div>';
    }
    currentTestRun = null;
    return;
  }

  startBattery(combineBatteries(batteries));
}

function setAllBatterySelections(checked) {
  document.querySelectorAll('input[name="testBatteryOption"]').forEach((input) => {
    input.checked = checked;
  });
  startSelectedBatteries();
}

function currentQuestion() {
  if (!currentTestRun) return null;
  const questionIndex = currentTestRun.order[currentTestRun.position];
  return currentTestRun.battery.preguntas[questionIndex];
}

function scoreSnapshot(run) {
  const answered = run.answers.length;
  const incorrect = answered - run.correct;
  const percent = answered ? Math.round((run.correct / answered) * 100) : 0;
  const estimatedScaled = Math.round((percent / 100) * OFFICIAL_SCORE_MAX);
  const remaining = run.order.length - answered;

  return {
    answered,
    incorrect,
    percent,
    estimatedScaled,
    remaining,
    passStatus: estimatedScaled >= OFFICIAL_PASSING_SCORE
  };
}

function renderCurrentQuestion() {
  const mount = document.querySelector("#testMount");
  if (!mount || !currentTestRun) return;

  const { battery, position, order, correct, currentAnswer } = currentTestRun;
  const question = currentQuestion();
  const correctIndex = answerIndex(question);
  const answered = currentAnswer !== null;
  const isCorrect = answered && currentAnswer === correctIndex;
  const progressPercent = Math.round(((position + (answered ? 1 : 0)) / order.length) * 100);
  const score = scoreSnapshot(currentTestRun);
  const batteryLabel = battery.procedencia || battery.titulo;

  const options = question.opciones.map((option, optionIndex) => {
    let optionClass = "";
    if (answered && optionIndex === correctIndex) optionClass = " correct";
    if (answered && optionIndex === currentAnswer && optionIndex !== correctIndex) optionClass = " incorrect";
    const optionLetter = String.fromCharCode(65 + optionIndex);

    return `
      <label class="option-item${optionClass}">
        <input type="radio" name="currentQuestion" value="${optionIndex}" ${currentAnswer === optionIndex ? "checked" : ""} ${answered ? "disabled" : ""}>
        <span class="option-index">${optionLetter}</span>
        <span class="option-copy">${escapeHtml(option)}</span>
      </label>
    `;
  }).join("");

  const feedback = answered ? `
    <p class="question-feedback">
      <strong>${isCorrect ? "Correcto." : "Incorrecto."}</strong>
      La respuesta correcta es <strong>${escapeHtml(question.opciones[correctIndex])}</strong>.
      ${question.explicacion ? `<br>${escapeHtml(question.explicacion)}` : ""}
    </p>
  ` : "";

  mount.innerHTML = `
    <section class="test-stage">
      <div class="test-statusbar">
        <span class="test-badge">Pregunta ${position + 1}/${order.length}</span>
        ${answered ? `<span class="test-badge ${isCorrect ? "success" : "error"}">${isCorrect ? "Correcta" : "Incorrecta"}</span>` : `<span class="test-badge">Pendiente</span>`}
      </div>

      <div class="test-progress">
        <span>Progreso</span>
        <div class="test-progress-meter" aria-hidden="true">
          <div class="test-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <span>${progressPercent}%</span>
      </div>

      <div class="test-main">
        <article class="question-card${answered ? (isCorrect ? " correct" : " incorrect") : ""}">
          <div class="question-eyebrow">
            <span class="question-chip">Sesion activa</span>
            ${battery.descripcion ? `<span class="question-chip muted">${escapeHtml(battery.descripcion)}</span>` : ""}
          </div>
          <p class="question-title">${escapeHtml(question.pregunta)}</p>
          <div class="option-list">${options}</div>
          ${feedback}
          <div class="test-actions">
            <button id="restartTestButton" class="action-button" type="button">Reiniciar</button>
            ${answered ? `<button id="nextQuestionButton" class="action-button" type="button">${position + 1 === order.length ? "Ver resultado" : "Siguiente"}</button>` : ""}
          </div>
        </article>

        <aside class="test-score-panel">
          <p class="test-score-panel-title">Marcador actual</p>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${score.answered ? correct : 0}</span>
            <span class="test-stat-label">Correctas</span>
          </div>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${score.incorrect}</span>
            <span class="test-stat-label">Falladas</span>
          </div>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${score.percent}%</span>
            <span class="test-stat-label">Porcentaje de acierto</span>
          </div>
          <div class="test-stat test-stat-inline test-stat-highlight">
            <span class="test-stat-value">${score.estimatedScaled}/${OFFICIAL_SCORE_MAX}</span>
            <span class="test-stat-label">Equivalencia orientativa</span>
          </div>
          <p class="test-score-panel-copy">Aprobado oficial publicado: ${OFFICIAL_PASSING_SCORE}/${OFFICIAL_SCORE_MAX}. Esta conversion es aproximada y solo sirve como referencia durante el simulador.</p>
        </aside>
      </div>
    </section>
  `;

  mount.querySelectorAll('input[name="currentQuestion"]').forEach((input) => {
    input.addEventListener("change", () => answerCurrentQuestion(Number(input.value)));
  });
  mount.querySelector("#nextQuestionButton")?.addEventListener("click", nextQuestion);
  mount.querySelector("#restartTestButton")?.addEventListener("click", () => startBattery(battery));
}

function answerCurrentQuestion(optionIndex) {
  if (!currentTestRun || currentTestRun.currentAnswer !== null) return;

  const question = currentQuestion();
  const isCorrect = optionIndex === answerIndex(question);
  currentTestRun.currentAnswer = optionIndex;
  currentTestRun.answers.push({
    questionIndex: currentTestRun.order[currentTestRun.position],
    selected: optionIndex,
    correct: isCorrect
  });

  if (isCorrect) currentTestRun.correct += 1;
  renderCurrentQuestion();
}

function nextQuestion() {
  if (!currentTestRun) return;

  if (currentTestRun.position + 1 >= currentTestRun.order.length) {
    renderTestResult();
    return;
  }

  currentTestRun.position += 1;
  currentTestRun.currentAnswer = null;
  renderCurrentQuestion();
}

function renderTestResult() {
  const mount = document.querySelector("#testMount");
  if (!mount || !currentTestRun) return;

  const { battery, correct, order } = currentTestRun;
  const score = scoreSnapshot(currentTestRun);

  mount.innerHTML = `
    <section class="test-stage">
      <div class="test-statusbar">
        <span class="test-badge">Sesion completada</span>
        <span class="test-badge ${score.passStatus ? "success" : "error"}">${score.passStatus ? "Apto" : "No apto"}</span>
      </div>
      <div class="test-main">
        <section class="question-card question-card-result">
          <div class="question-eyebrow">
            <span class="question-chip">Resultado final</span>
            <span class="question-chip muted">${escapeHtml(battery.procedencia || battery.titulo)}</span>
          </div>
          <p class="question-title">${escapeHtml(battery.titulo)}</p>
          <p class="score-box">Resultado final: ${correct} / ${order.length} - ${score.percent}% - estimacion ${score.estimatedScaled}/${OFFICIAL_SCORE_MAX}</p>
          <div class="test-actions">
            <button id="restartTestButton" class="action-button" type="button">Repetir aleatorio</button>
          </div>
        </section>
        <aside class="test-score-panel">
          <p class="test-score-panel-title">Resumen</p>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${correct}</span>
            <span class="test-stat-label">Correctas</span>
          </div>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${score.incorrect}</span>
            <span class="test-stat-label">Falladas</span>
          </div>
          <div class="test-stat test-stat-inline">
            <span class="test-stat-value">${score.percent}%</span>
            <span class="test-stat-label">Porcentaje</span>
          </div>
          <div class="test-stat test-stat-inline test-stat-highlight">
            <span class="test-stat-value">${score.estimatedScaled}/${OFFICIAL_SCORE_MAX}</span>
            <span class="test-stat-label">Equivalencia orientativa</span>
          </div>
          <p class="test-score-panel-copy">Aprobado oficial publicado por ISC2 para CC: ${OFFICIAL_PASSING_SCORE}/${OFFICIAL_SCORE_MAX}. El examen real no te devuelve una puntuacion numerica exacta.</p>
        </aside>
      </div>
    </section>
  `;

  mount.querySelector("#restartTestButton")?.addEventListener("click", () => startBattery(battery));
}

function bytes(value) {
  return typeof value === "string" ? textEncoder.encode(value) : value;
}

function concatBytes(chunks) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const output = new Uint8Array(total);
  let offset = 0;

  chunks.forEach((chunk) => {
    output.set(chunk, offset);
    offset += chunk.length;
  });

  return output;
}

function makeCrcTable() {
  const table = new Uint32Array(256);

  for (let i = 0; i < 256; i += 1) {
    let value = i;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    table[i] = value >>> 0;
  }

  return table;
}

const crcTable = makeCrcTable();

function crc32(data) {
  let crc = 0xffffffff;

  for (let i = 0; i < data.length; i += 1) {
    crc = crcTable[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, date: dosDate };
}

function createZip(entries) {
  const chunks = [];
  const centralDirectory = [];
  const timestamp = dosDateTime();
  let offset = 0;

  entries.forEach((entry) => {
    const name = bytes(entry.name);
    const data = bytes(entry.data);
    const checksum = crc32(data);

    const localHeader = new Uint8Array(30 + name.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, timestamp.time, true);
    localView.setUint16(12, timestamp.date, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, name.length, true);
    localView.setUint16(28, 0, true);
    localHeader.set(name, 30);

    const centralHeader = new Uint8Array(46 + name.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, timestamp.time, true);
    centralView.setUint16(14, timestamp.date, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, name.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, 0, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(name, 46);

    chunks.push(localHeader, data);
    centralDirectory.push(centralHeader);
    offset += localHeader.length + data.length;
  });

  const centralOffset = offset;
  const centralSize = centralDirectory.reduce((sum, chunk) => sum + chunk.length, 0);
  const endRecord = new Uint8Array(22);
  const endView = new DataView(endRecord.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, centralOffset, true);
  endView.setUint16(20, 0, true);

  return concatBytes([...chunks, ...centralDirectory, endRecord]);
}

function mediaTypeFor(path) {
  const extension = path.split(".").pop().toLowerCase();
  const types = {
    css: "text/css",
    gif: "image/gif",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    webp: "image/webp",
    xhtml: "application/xhtml+xml"
  };

  return types[extension] || "application/octet-stream";
}

function extractImageRefs(markdown) {
  const refs = new Set();
  const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
  let match = regex.exec(markdown);

  while (match) {
    if (!match[1].startsWith("http")) refs.add(match[1]);
    match = regex.exec(markdown);
  }

  return [...refs];
}

async function fetchBinary(path) {
  const response = await fetch(siteUrl(path));
  if (!response.ok) throw new Error(`No se pudo cargar ${path} (${response.status})`);
  return new Uint8Array(await response.arrayBuffer());
}

function epubDocument(title, body) {
  return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="es" xml:lang="es">
  <head>
    <title>${escapeHtml(title)}</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
${body}
  </body>
</html>`;
}

function chapterName(index) {
  return `chapter-${String(index + 1).padStart(2, "0")}.xhtml`;
}

function buildNav(chapters) {
  const items = chapters.map((chapter) => {
    const lessons = chapter.lessons.map((lesson) => (
      `<li><a href="${chapter.href}#${lesson.id}">${escapeHtml(titleFromFile(lesson.file))}</a></li>`
    )).join("");

    return `<li><a href="${chapter.href}">${escapeHtml(chapter.title)}</a><ol>${lessons}</ol></li>`;
  }).join("");

  return epubDocument("Indice", `
    <nav epub:type="toc" id="toc">
      <h1>Indice</h1>
      <ol>
        <li><a href="cover.xhtml">Portada</a></li>
        ${items}
      </ol>
    </nav>`);
}

function buildNcx(chapters) {
  let order = 1;
  const navPoints = chapters.map((chapter) => {
    const chapterOrder = order;
    order += 1;
    const lessons = chapter.lessons.map((lesson) => {
      const playOrder = order;
      order += 1;
      return `
    <navPoint id="${lesson.id}" playOrder="${playOrder}">
      <navLabel><text>${escapeHtml(titleFromFile(lesson.file))}</text></navLabel>
      <content src="${chapter.href}#${lesson.id}" />
    </navPoint>`;
    }).join("");

    return `
  <navPoint id="${chapter.id}" playOrder="${chapterOrder}">
    <navLabel><text>${escapeHtml(chapter.title)}</text></navLabel>
    <content src="${chapter.href}" />${lessons}
  </navPoint>`;
  }).join("");

  return `<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:uuid:isc2-cc-es" />
    <meta name="dtb:depth" content="2" />
    <meta name="dtb:totalPageCount" content="0" />
    <meta name="dtb:maxPageNumber" content="0" />
  </head>
  <docTitle><text>ISC2 CC - Contenido completo</text></docTitle>
  <navMap>${navPoints}
  </navMap>
</ncx>`;
}

function buildOpf(chapters, imageItems) {
  const modified = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  const chapterItems = chapters.map((chapter) => (
    `<item id="${chapter.id}" href="${chapter.href}" media-type="application/xhtml+xml" />`
  )).join("\n    ");
  const manifestImages = imageItems.map((image) => (
    `<item id="${image.id}" href="${image.href}" media-type="${image.mediaType}" />`
  )).join("\n    ");
  const spineItems = chapters.map((chapter) => `<itemref idref="${chapter.id}" />`).join("\n    ");

  return `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="book-id">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="book-id">urn:uuid:isc2-cc-es</dc:identifier>
    <dc:title>ISC2 CC - Contenido completo</dc:title>
    <dc:language>es</dc:language>
    <meta property="dcterms:modified">${modified}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav" />
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />
    <item id="style" href="styles.css" media-type="text/css" />
    <item id="cover-image" href="cover.jpg" media-type="image/jpeg" properties="cover-image" />
    <item id="cover-page" href="cover.xhtml" media-type="application/xhtml+xml" />
    ${chapterItems}
    ${manifestImages}
  </manifest>
  <spine toc="ncx">
    <itemref idref="cover-page" />
    ${spineItems}
  </spine>
</package>`;
}

async function buildEpub() {
  const entries = [
    { name: "mimetype", data: "application/epub+zip" },
    {
      name: "META-INF/container.xml",
      data: `<?xml version="1.0" encoding="utf-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml" />
  </rootfiles>
</container>`
    }
  ];

  const cover = await fetchBinary("portada.jpg");
  entries.push({ name: "OEBPS/cover.jpg", data: cover });

  const imageItems = [];
  const imageData = new Map();
  const chapters = [];

  for (let domainIndex = 0; domainIndex < DOMAINS.length; domainIndex += 1) {
    const domain = DOMAINS[domainIndex];
    const lessons = await Promise.all(domain.files.map((file) => fetchLesson(domain, file)));
    const imageMap = new Map();

    for (const lesson of lessons) {
      for (const ref of extractImageRefs(lesson.markdown)) {
        const source = `${domain.path}/${ref}`;
        if (!imageMap.has(ref)) {
          const imageId = `img-${domain.id}-${imageMap.size + 1}`;
          const href = `images/${imageId}.${ref.split(".").pop().toLowerCase()}`;
          imageMap.set(ref, href);
          if (!imageData.has(source)) {
            imageData.set(source, { id: imageId, href, source });
          }
        }
      }
    }

    const body = `
    <section>
      <h1>${escapeHtml(domain.number)}: ${escapeHtml(domain.title)}</h1>
      ${lessons.map((lesson) => `
      <section id="${lessonId(domain.id, lesson.file)}">
        ${renderMarkdown(lesson.markdown, domain.path, {
          xhtml: true,
          resolveMediaSrc(ref) {
            return imageMap.get(ref) || ref;
          }
        })}
      </section>`).join("\n")}
    </section>`;

    const href = chapterName(domainIndex);
    entries.push({
      name: `OEBPS/${href}`,
      data: epubDocument(`${domain.number}: ${domain.title}`, body)
    });

    chapters.push({
      id: `chapter-${domainIndex + 1}`,
      href,
      title: `${domain.number}: ${domain.title}`,
      lessons: lessons.map((lesson) => ({
        id: lessonId(domain.id, lesson.file),
        file: lesson.file
      }))
    });
  }

  for (const image of imageData.values()) {
    const data = await fetchBinary(image.source);
    imageItems.push({
      id: image.id,
      href: image.href,
      mediaType: mediaTypeFor(image.href)
    });
    entries.push({ name: `OEBPS/${image.href}`, data });
  }

  entries.push({
    name: "OEBPS/cover.xhtml",
    data: epubDocument("Portada", `
    <section class="cover">
      <img src="cover.jpg" alt="Portada" />
    </section>`)
  });
  entries.push({
    name: "OEBPS/nav.xhtml",
    data: buildNav(chapters)
  });
  entries.push({
    name: "OEBPS/toc.ncx",
    data: buildNcx(chapters)
  });
  entries.push({
    name: "OEBPS/styles.css",
    data: `body {
  color: #1c2430;
  font-family: serif;
  line-height: 1.55;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.25;
}

h1 {
  color: #0d5268;
}

img {
  display: block;
  height: auto;
  margin: 1em auto;
  max-width: 100%;
}

.cover {
  text-align: center;
}

.cover img {
  max-height: 95vh;
}`
  });
  entries.push({
    name: "OEBPS/content.opf",
    data: buildOpf(chapters, imageItems)
  });

  return new Blob([createZip(entries)], { type: "application/epub+zip" });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function downloadEpub() {
  epubButton.disabled = true;
  epubButton.textContent = "Generando...";

  try {
    const epub = await buildEpub();
    downloadBlob(epub, "isc2-cc-completo.epub");
  } catch (error) {
    content.innerHTML = `<div class="error-state">${escapeHtml(error.message)}</div>`;
  } finally {
    epubButton.disabled = false;
    epubButton.textContent = "EPUB completo";
  }
}

searchInput.addEventListener("input", filterLessons);
epubButton.addEventListener("click", downloadEpub);
printButton.addEventListener("click", () => window.print());
testMenuButton.addEventListener("click", () => loadTestsView());
window.addEventListener("hashchange", () => {
  if (location.hash.slice(1) === "tests") {
    loadTestsView(false);
  } else {
    loadDomain(location.hash.slice(1), false);
  }
});

renderMenu();
if (location.hash.slice(1) === "tests") {
  loadTestsView(false);
} else {
  loadDomain(location.hash.slice(1) || DOMAINS[0].id, false);
}
