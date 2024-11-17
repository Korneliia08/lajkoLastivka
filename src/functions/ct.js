/*
 * Funkcja przygotowywuje treść do umieszczenia w adresie url
 * */
export default function ct(name) {
  if (typeof name !== "string") {
    return "";
  }

  return (
    name
      .normalize("NFD") // Normalizuje znaki Unicode, aby móc usunąć diakrytyki
      //  .replace(/[\u0300-\u036f]/g, "") // Usuwa diakrytyki
      // .replace(/[^a-zA-Z0-9 ]/g, "") // Usuwa wszystko co nie jest literą, cyfrą lub spacją
      .replaceAll(".", "")
      .replaceAll("/", "")
      .replaceAll(",", "")
      .replaceAll("\\", "")
      .replaceAll("'", "")
      .replaceAll('"', "")
      .trim() // Usuwa białe znaki z początku i końca
      .replace(/\s+/g, "_") // Zamienia spacje na znak podkreślenia
      .toLowerCase()
  ); // Zamienia wszystko na małe litery
}
