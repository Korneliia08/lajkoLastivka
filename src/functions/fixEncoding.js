export function fixEncoding(text) {
  if (!text) return "";

  const replacements = {
    "Ä…": "ą",
    "Ä‡": "ć",
    "Ä™": "ę",
    "Å‚": "ł",
    "Å„": "ń",
    "Ã³": "ó",
    "Å›": "ś",
    "Å¼": "ż",
    Åƒ: "Ń",
    Åº: "ź",
    "Å›": "ś",
    "Å„": "ń",
    "Å›": "ś",
    "Å¼": "ż",
    Åº: "ź",
    "Å„": "ń",
    "Ä„": "Ą",
    "Ä†": "Ć",
    "Ä˜": "Ę",
    "Å": "Ł",
    "Ã“": "Ó",
    Åš: "Ś",
    "Å»": "Ż",
    "Å¹": "Ź",
    "Å»": "Ż",
    Åš: "Ś",
    "Å¼": "ż",
    "Å›": "ś",
    "Å„": "ń",
    "Å‚": "ł",
    "Ä™": "ę",
    "Ä‡": "ć",
    "Ä…": "ą",
    "Ä„": "Ą",
    "Ä†": "Ć",
    "Ä˜": "Ę",
    "Å": "Ł",

    "Å»": "Ż",
    "Ã³": "ó",
    "Ã“": "Ó",
    "Å¹": "Ź",
    Åº: "ź",
    "Å’": "œ",
    "Å½": "Ž",
  };

  for (const [key, value] of Object.entries(replacements)) {
    try {
      text = text.replaceAll(key, value);
    } catch (error) {
      console.log(error);
    }
  }
  if (!text) return "";
  return text;
}