import { format } from "fecha";

export const keyEncoding = "x".repeat(15);
export const currencySymbol = "₦";
export const accept = {
  pdf: "application/pdf, .pdf",
  docx: "application/msword, .doc, .docx",
  excel: "application/vnd.ms-excel, .xls, .xlsx",
  csv: ".csv",
  ppt: "application/vnd.ms-powerpoint, .ppt, .pptx",
  txt: "text/plain",
  images: "image/*",
  video: "video/mp4,video/x-m4v,video/*",
  audio: "audio/*",
};
export function setToken(userToken) {
  localStorage.setItem("token", userToken);
}

export function setType(key, userRole) {
  localStorage.setItem(key, JSON.stringify(userRole));
}

export function getUserToken() {
  let tokenString = localStorage.getItem("token");

  return tokenString;
}

export const LOGGER = (
  key,
  value,
  isProd = process.env.NODE_ENV === "production"
) => {
  if (isProd) return;

  // eslint-disable-next-line no-console
  console.log(key, value);
};

export function getType(key) {
  let tokenString = JSON?.parse(localStorage.getItem(key));

  return tokenString;
}

export function endSession() {
  localStorage.clear();
}
export const formatAmount = (num) => {
  if (num) {
    const initial = parseFloat(num).toFixed(2);
    return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};
export const formatDateObjectHandler = (dateObj, dateFormat = "YYYY-MM-DD") => {
  if (!dateObj) {
    return undefined;
  }
  // format(new Date(parse(dateObj)), dateFormat);
  const formattedDate = format(new Date(dateObj), dateFormat);
  return formattedDate;
};

export const dataURLtoFile = (dataUrl, filename) => {
  const arr = dataUrl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]);
  let n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};
export const parseQuery = (queryString) => {
  const query = new URLSearchParams(queryString).entries();
  const queryObj = {};
  for (const [key, value] of query) {
    queryObj[key] = value;
  }
  return queryObj;
};
export const objToFormData = (obj, allowNull) => {
  const formdata = new FormData();
  for (let key in obj) {
    if (obj[key] || allowNull) {
      formdata.append(key, obj[key]);
    }
  }
  return formdata;
};
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
export const requestsHasError = (responses) => {
  return responses?.some((response) => !response.success);
};
