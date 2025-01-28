export function maxLenght(content, maxSize, symbols = "....") {
  const dots = symbols;
  if (!content) {
    return "";
  }

  if (content.length > maxSize) {
    return content.substring(0, maxSize) + dots;
  }
  return content;
}
