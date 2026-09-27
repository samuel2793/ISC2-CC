import { readFileSync, writeFileSync } from "node:fs";

const ROOT = new URL("../", import.meta.url);
const PRACTICE = "tests/udemy/isc2-certified-in-cybersecurity-practice-test";
const GPT_2026_D2 = "tests/gpt-2026/domain-2.json";
const GPT_2026_D5 = "tests/gpt-2026/domain-5.json";

const p = (file, question, domain) => [`${PRACTICE}/${file}.json`, question, domain];
const g2 = (question) => [GPT_2026_D2, question, 2];
const g5 = (question) => [GPT_2026_D5, question, 5];

// Selección manual 1-based: cada referencia apunta a una pregunta de las baterías locales.
const selection = [
  // Dominio 1 — 24 preguntas
  p(1, 1, 1), p(1, 2, 1), p(1, 5, 1), p(1, 7, 1),
  p(1, 9, 1), p(1, 10, 1), p(1, 12, 1), p(1, 13, 1),
  p(1, 15, 1), p(1, 16, 1), p(1, 19, 1), p(1, 23, 1),
  p(1, 24, 1), p(1, 25, 1), p(1, 26, 1), p(2, 4, 1),
  p(2, 7, 1), p(2, 9, 1), p(2, 11, 1), p(2, 14, 1),
  p(2, 15, 1), p(2, 22, 1), p(2, 24, 1), p(2, 25, 1),

  // Dominio 2 — 17 preguntas, incluidos GRC, cultura y métricas del esquema 2026
  p(1, 27, 2), p(1, 28, 2), p(1, 29, 2), p(1, 32, 2),
  p(1, 33, 2), p(1, 35, 2), p(1, 36, 2), p(2, 29, 2),
  p(2, 31, 2), p(2, 32, 2), p(2, 33, 2), p(2, 35, 2),
  p(1, 18, 2), g2(4), g2(44), g2(60), g2(68),

  // Dominio 3 — 20 preguntas
  p(1, 6, 3), p(1, 17, 3), p(1, 37, 3), p(1, 38, 3),
  p(1, 39, 3), p(1, 40, 3), p(1, 41, 3), p(1, 42, 3),
  p(1, 43, 3), p(1, 44, 3), p(1, 45, 3), p(1, 46, 3),
  p(1, 47, 3), p(1, 48, 3), p(1, 50, 3), p(1, 51, 3),
  p(1, 52, 3), p(1, 54, 3), p(1, 55, 3), p(1, 56, 3),

  // Dominio 4 — 22 preguntas
  p(1, 59, 4), p(1, 60, 4), p(1, 61, 4), p(1, 63, 4),
  p(1, 64, 4), p(1, 65, 4), p(1, 66, 4), p(1, 68, 4),
  p(1, 69, 4), p(1, 70, 4), p(1, 71, 4), p(1, 72, 4),
  p(1, 75, 4), p(1, 76, 4), p(1, 78, 4), p(1, 79, 4),
  p(1, 80, 4), p(2, 61, 4), p(2, 62, 4), p(2, 64, 4),
  p(2, 68, 4), p(2, 69, 4),

  // Dominio 5 — 17 preguntas, incluidos CTI, ATT&CK y pruebas de seguridad 2026
  p(1, 85, 5), p(1, 88, 5), p(1, 92, 5), p(1, 94, 5),
  p(1, 96, 5), p(2, 72, 5), p(2, 73, 5), p(2, 83, 5),
  p(2, 85, 5), p(2, 89, 5), p(2, 95, 5), p(2, 97, 5),
  g5(44), g5(52), g5(92), g5(96), g5(100),
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

const counts = Object.fromEntries([1, 2, 3, 4, 5].map((domain) => [
  domain,
  questions.filter((question) => question.dominio === domain).length,
]));
if (questions.length !== 100 || JSON.stringify(counts) !== JSON.stringify({ 1: 24, 2: 17, 3: 20, 4: 22, 5: 17 })) {
  throw new Error(`Distribución incorrecta: ${questions.length} preguntas, ${JSON.stringify(counts)}`);
}

const previousFiles = [
  "Resumenes y chuletas/Simulacro oficial CC 2026.json",
  ...[2, 3, 4, 5, 6].map((number) => `Resumenes y chuletas/Simulacro oficial CC 2026 - Examen ${number}.json`),
];
const normalize = (text) => text.trim().toLocaleLowerCase("es");
const previousQuestions = new Set(previousFiles.flatMap((path) =>
  JSON.parse(readFileSync(new URL(path, ROOT), "utf8")).preguntas.map((question) => normalize(question.pregunta))
));
const duplicate = questions.find((question) => previousQuestions.has(normalize(question.pregunta)));
if (duplicate) throw new Error(`Pregunta ya usada: ${duplicate.pregunta}`);

const output = {
  titulo: "Simulacro integral CC 2026 — Examen 7",
  procedencia: "Selección curada de las baterías del proyecto, con casos situacionales y objetivos nuevos del esquema ISC2 CC 2026",
  descripcion: "100 preguntas nuevas tomadas de las baterías locales, sin repetir los seis exámenes anteriores y con fuente auditable. Reparto: 24/17/20/22/17.",
  preguntas: questions,
};

writeFileSync(
  new URL("Resumenes y chuletas/Simulacro oficial CC 2026 - Examen 7.json", ROOT),
  `${JSON.stringify(output, null, 2)}\n`,
);
