import DateObject from "react-date-object";

export default function df(date, format) {
  try {
    if (!date || date === "null") return "---";
    let data;
    if (typeof date === "string" && date.includes("Z")) {
      // Jeśli data zawiera "Z", traktujemy ją jako UTC i konwertujemy do czasu kijowskiego
      data = new DateObject({ date, timezone: "Europe/Kiev" });
    } else {
      data = new DateObject({ date });
    }
    return data.format(format);
  } catch (err) {
    return "---";
  }
}
