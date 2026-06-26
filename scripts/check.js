const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const required = [
  "Healen",
  "Fase 3",
  "$25.000.000 COP",
  "$17.300.000 COP",
  "$2.800.000 COP",
  "$1.400.000 COP",
  "$14.500.000 COP",
  "$8.650.000 COP",
  "$7.250.000 COP",
  "$3.625.000 COP",
  "50%",
  "25%",
  "antes de entregar",
  "al finalizar",
  "otro 50% de la Fase 1",
  "strike-price",
  "Sin mensualidad de gestión Solvers",
  "$0 COP",
  "tarjeta débito o crédito",
  "$250.000",
  "$300.000",
  "$500.000",
  "consumos técnicos",
  "Eva Healen",
  "portal de pacientes",
  "Cotizaciones por audio médico",
  "Automatización 360",
  "Cartera",
  "Tratamientos",
  "Marketing",
  "Estadísticas",
  "Telegram",
  "Ventas desde el primer hola",
  "pauta",
  "automatización",
  "Aprobar Fase 3"
];

const missing = required.filter((item) => !html.includes(item));

if (missing.length) {
  console.error(`Missing required proposal terms: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Phase 3 proposal check passed.");
