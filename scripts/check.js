const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const required = [
  "Healen",
  "Fase 3",
  "$15.300.000 COP",
  "$2.800.000 COP",
  "$2.500.000 COP",
  "$10.000.000 COP",
  "$3.900.000 COP",
  "$5.000.000 COP",
  "50%",
  "25%",
  "entrega de avance",
  "a punto de finalizar",
  "una vez finalizada",
  "Agente SolversAI",
  "Telegram",
  "Estrategias de venta",
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
