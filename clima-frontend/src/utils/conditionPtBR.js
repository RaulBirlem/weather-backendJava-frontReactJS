// src/utils/conditionPtBR.js

// Mapa mínimo (você pode ir ampliando conforme precisar)
const CONDITION_PTBR_BY_CODE = {
  1000: "Céu limpo",              // Clear / Sunny (varia dia/noite, ver nota abaixo)
  1003: "Parcialmente nublado",
  1006: "Nublado",
  1009: "Encoberto",
  1030: "Névoa",

  1063: "Possibilidade de chuva",
  1066: "Possibilidade de neve",
  1069: "Possibilidade de granizo",
  1072: "Possibilidade de garoa congelante",
  1087: "Possibilidade de trovoadas",

  1114: "Nevasca",
  1117: "Tempestade de neve",

  1135: "Nevoeiro",
  1147: "Nevoeiro congelante",

  1150: "Garoa fraca",
  1153: "Garoa",
  1168: "Garoa congelante",
  1171: "Garoa congelante forte",

  1180: "Chuva fraca",
  1183: "Chuva",
  1186: "Chuva moderada ocasional",
  1189: "Chuva moderada",
  1192: "Chuva forte ocasional",
  1195: "Chuva forte",

  1204: "Chuva e neve",
  1207: "Chuva e neve fortes",

  1210: "Neve fraca",
  1213: "Neve",
  1216: "Neve moderada",
  1219: "Neve moderada",
  1222: "Neve forte",
  1225: "Neve forte",

  1240: "Pancadas de chuva fracas",
  1243: "Pancadas de chuva moderadas/fortes",
  1246: "Pancadas de chuva torrenciais",

  1273: "Chuva fraca com trovoadas",
  1276: "Chuva forte com trovoadas",
};

export function translateCondition(code, fallbackText, isDay) {
   if (!code) return fallbackText ?? "—";
  // Observação: o code 1000 pode ser “Ensolarado” (dia) ou “Céu limpo” (noite).
  if (code === 1000) {
    if (isDay === 1) return "Ensolarado";
    if (isDay === 0) return "Céu limpo";
  }

  return CONDITION_PTBR_BY_CODE[code] ?? fallbackText ?? "—";
}
