// export default function formatDate(date) {
//   if (!date) return "----";
//   const parsedDate = new Date(date);
//   const day = parsedDate.getDate();
//   const monthNames = [
//     "Sty",
//     "Lut",
//     "Mar",
//     "Kwi",
//     "Maj",
//     "Czew",
//     "Lip",
//     "Sie",
//     "Wrz",
//     "Paź",
//     "Lis",
//     "Gru",
//   ];
//   const month = monthNames[parsedDate.getMonth()];
//   const year = parsedDate.getFullYear();
//
//   return `${day} ${month}, ${year}`;
// }
import DateObject from "react-date-object";

export default function df(date, format) {
    try {
        if (!date || date == 'null') return '---'
        const data = new DateObject({
            date: date,
        });
        return data.format(format)
    } catch (err) {
        return '---'
    }
}
