import { format } from "fecha";

export const currencySymbol = "₦";
export const formatAmount = (num) => {
  if (num) {
    const initial = parseFloat(num).toFixed(2);
    return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const formatDateObjectHandler = (dateObj, dateFormat = "YYYY-MM-DD") => {
  if (!dateObj) {
    return undefined;
  }
  // format(new Date(parse(dateObj)), dateFormat);
  const formattedDate = format(new Date(dateObj), dateFormat);
  return formattedDate;
};
