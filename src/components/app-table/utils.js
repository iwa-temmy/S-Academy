export const getNoOfPages = (count, noPerPage) => {
    return Math.ceil(count / noPerPage);
};
