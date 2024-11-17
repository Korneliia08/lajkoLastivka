export default function limitHTMLContent(
  htmlContent,
  limit,
  options = { removeImages: false, removeTables: false },
) {
  const div = document.createElement("div");
  div.innerHTML = htmlContent;

  const { removeImages, removeTables } = options;

  // Usuwanie zdjęć
  if (removeImages) {
    const images = div.getElementsByTagName("img");
    while (images.length > 0) {
      images[0].remove();
    }
  }

  // Usuwanie tabel
  if (removeTables) {
    const tables = div.getElementsByTagName("table");
    while (tables.length > 0) {
      tables[0].remove();
    }
  }

  let charCount = 0;
  let truncated = false;

  const truncateNode = (node) => {
    if (charCount >= limit) {
      node.remove();
      truncated = true;
      return;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      const remaining = limit - charCount;
      if (node.textContent.length > remaining) {
        node.textContent = node.textContent.slice(0, remaining) + "...";
        charCount = limit;
        truncated = true;
      } else {
        charCount += node.textContent.length;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        truncateNode(node.childNodes[i]);
      }
    }
  };

  truncateNode(div);

  return div.innerHTML;
}
