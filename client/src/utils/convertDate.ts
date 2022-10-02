import moment from "moment";
// It's a function to convert date from postgres to understandle date format
function convertDate(date: Date) {
  return moment(date).format("L");
}
export default convertDate;
