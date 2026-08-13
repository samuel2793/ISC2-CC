const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "www");

const includes = [
  "index.html",
  "app.js",
  "portada.jpg",
  "tests",
  "Dominio 1: Principios de Seguridad",
  "Dominio 2: Respuesta a Incidentes, Continuidad del Negocio y Recuperacion ante Desastres",
  "Dominio 3: Conceptos de Control de Acceso",
  "Dominio 4: Seguridad de Redes",
  "Dominio 5: Operaciones de Seguridad"
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const entry of includes) {
  const source = path.join(root, entry);
  const target = path.join(outDir, entry);

  if (!fs.existsSync(source)) {
    continue;
  }

  fs.cpSync(source, target, {
    recursive: true,
    force: true,
    errorOnExist: false
  });
}

console.log(`Prepared Capacitor web assets in ${path.relative(root, outDir)}`);
