export const formatAmount = (num) => {
  if (num) {
    const initial = parseFloat(num).toFixed(2);
    return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
