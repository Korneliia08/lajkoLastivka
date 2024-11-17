export default function formatDate(date) {
  if (!date) return "----";
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const monthNames = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Czew",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];
  const month = monthNames[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${day} ${month}, ${year}`;
}
