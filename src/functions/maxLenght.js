export function maxLenght(content, maxSize) {
  const dots = "....";
  if (!content) {
    return "";
  }

  if (content.length > maxSize) {
    return content.substring(0, maxSize) + dots;
  }
  return content;
}
