import { readFileSync, writeFileSync } from "node:fs";

const ROOT = new URL("../", import.meta.url);
const PRACTICE = "tests/udemy/isc2-certified-in-cybersecurity-practice-test";
const PREFINAL = "tests/oficial/isc2-cc-pre-final-assessment/1.json";
const OFFICIAL_D4 = "tests/oficial/domain-4/1.json";

const p = (file, question, domain) => [`${PRACTICE}/${file}.json`, question, domain];
const o = (question, domain) => [PREFINAL, question, domain];
const d4 = (question, domain) => [OFFICIAL_D4, question, domain];

// Preguntas seleccionadas manualmente por dificultad, claridad y cobertura.
// El número de pregunta es 1-based para que la procedencia sea fácil de auditar.
const selection = [
  // Dominio 1 — 24 preguntas
  p(3, 13, 1), p(3, 12, 1), p(4, 1, 1), p(3, 41, 1),
  p(4, 2, 1), p(4, 3, 1), o(27, 1), p(1, 22, 1),
  p(3, 4, 1), p(4, 11, 1), p(1, 4, 1), p(4, 19, 1),
  p(1, 14, 1), p(2, 26, 1), p(2, 13, 1), p(3, 14, 1),
  p(1, 21, 1), p(4, 5, 1), p(4, 9, 1), p(2, 16, 1),
  p(2, 12, 1), p(4, 10, 1), p(4, 4, 1), p(4, 6, 1),

  // Dominio 2 — 17 preguntas
  p(3, 32, 2), p(1, 34, 2), p(1, 31, 2), p(2, 34, 2),
  p(4, 33, 2), p(2, 36, 2), p(3, 31, 2), p(3, 36, 2),
  p(3, 33, 2), p(2, 28, 2), p(4, 29, 2), p(2, 30, 2),
  p(1, 30, 2), p(3, 27, 2), p(3, 28, 2), p(3, 29, 2),
  p(1, 99, 2),

  // Dominio 3 — 20 preguntas
  p(3, 55, 3), p(3, 48, 3), p(3, 39, 3), p(2, 53, 3),
  p(2, 37, 3), p(4, 43, 3), p(1, 49, 3), o(45, 3),
  o(46, 3), p(3, 52, 3), p(4, 39, 3), p(2, 47, 3),
  p(1, 57, 3), o(52, 3), p(4, 44, 3), p(2, 56, 3),
  p(2, 42, 3), p(3, 46, 3), p(3, 44, 3), p(3, 47, 3),

  // Dominio 4 — 22 preguntas
  p(3, 78, 4), p(3, 66, 4), p(3, 81, 4), p(2, 81, 4),
  p(2, 75, 4), p(1, 81, 4), p(1, 82, 4), p(2, 77, 4),
  p(3, 70, 4), p(2, 71, 4), p(4, 81, 4), p(4, 69, 4),
  p(3, 71, 4), p(2, 66, 4), p(2, 80, 4), p(2, 82, 4),
  p(2, 67, 4), p(2, 63, 4), p(3, 67, 4), p(3, 80, 4),
  d4(11, 4), d4(16, 4),

  // Dominio 5 — 17 preguntas
  p(3, 97, 5), p(3, 83, 5), p(4, 86, 5), p(2, 87, 5),
  p(2, 86, 5), p(2, 92, 5), p(3, 18, 5), p(2, 96, 5),
  p(2, 94, 5), p(4, 89, 5), p(4, 92, 5), p(1, 97, 5),
  p(1, 93, 5), p(2, 91, 5), p(3, 74, 5), p(3, 68, 5),
  p(1, 95, 5),
];

const cache = new Map();
const questions = selection.map(([path, number, domain]) => {
  if (!cache.has(path)) {
    cache.set(path, JSON.parse(readFileSync(new URL(path, ROOT), "utf8")));
  }

  const source = cache.get(path).preguntas[number - 1];
  if (!source) throw new Error(`No existe ${path}#${number}`);

  return {
    pregunta: source.pregunta,
    opciones: source.opciones,
    respuesta: source.respuesta,
    explicacion: source.explicacion,
    dominio: domain,
    fuente: `${path}#pregunta-${number}`,
  };
});

const output = {
  titulo: "Simulacro integral CC 2026 — Examen 6",
  procedencia: "Selección curada de las baterías oficial y de práctica del proyecto, revisada y reasignada al esquema ISC2 CC vigente desde el 1 de septiembre de 2026",
  descripcion: "100 preguntas difíciles pero justas tomadas de las baterías locales. Cada pregunta conserva su fuente para auditoría; el reparto es 24/17/20/22/17.",
  preguntas: questions,
};

writeFileSync(
  new URL("Resumenes y chuletas/Simulacro oficial CC 2026 - Examen 6.json", ROOT),
  `${JSON.stringify(output, null, 2)}\n`,
);
