import moment from "moment";

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

export function getType(key) {
  let tokenString = JSON?.parse(localStorage.getItem(key));

  return tokenString;
}

export function endSession() {
  localStorage.clear();
}

export const CurrencySign = "₦";

export const LOGGER = (
  key,
  value,
  isProd = process.env.NODE_ENV === "production"
) => {
  if (isProd) return;

  // eslint-disable-next-line no-console
  console.log(key, value);
};

export const formatAmount = (num) => {
  if (num) {
    const initial = parseFloat(num).toFixed(2);
    return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const formatDateObjectHandler = (dateObj, format = "YYYY-MM-DD") => {
  if (!dateObj) {
    return undefined;
  }
  if (!moment.isMoment(dateObj)) {
    return moment(dateObj).format(format);
  }
  return dateObj.format(format);
};

export const truncateText = (string = "", length = "20", ending = "...") => {
  if (!(string && length)) {
    return;
  }
  return length > string.length
    ? string
    : string.substring(0, length - ending.length) + ending;
};

export const formatSentence = (string = "") => {
  return string ? string.slice(0, 1).toUpperCase() + string.slice(1) : "";
};

export const GetFromNowDate = (
  dateValue,
  stringFormat,
  fromNow,
  format = "DD-MM-YYYY"
) => {
  if (moment(dateValue, stringFormat).isValid()) {
    if (fromNow) {
      return moment(dateValue).fromNow();
    }
    return moment(dateValue, stringFormat).format(format);
  }
  return "";
};
export const GetMonthFormatDate = (
  dateValue,
  stringFormat,
  format = "MMMM DD, YYYY"
) => {
  if (moment(dateValue, stringFormat).isValid()) {
    return moment(dateValue, stringFormat).format(format);
  }
  return "";
};

export const GetTimeFormatDate = (
  dateValue,
  stringFormat,
  format = "HH:mm:ss"
) => {
  if (moment(dateValue, stringFormat).isValid()) {
    return moment(dateValue, stringFormat).format(format);
  }
  return "";
};

export const getFileExtension = (filename) => {
  return filename?.split(".").splice(-1);
};

export const keyEncoding = "x".repeat(15);

export const clientIsOnline = window.navigator.onLine;

export const riskLevelEvaluation = (value) => {
  let level = "";
  if (value <= 4) {
    level = "Low";
  } else if (value >= 5 && value <= 10) {
    level = "Medium";
  } else if (value >= 12) {
    level = "High";
  }
  return level;
};
export const getOptionLabel = (doc, tag) => {
  const label = `${
    tag === "pcidss"
      ? doc?.ndpr_title ||
        doc?.iso_title ||
        doc?.soc2_title ||
        doc?.criteria_title
      : tag === "ndpr"
      ? doc?.iso_title ||
        doc?.soc2_title ||
        doc?.document_title ||
        doc?.criteria_title
      : tag === "iso27001"
      ? doc?.soc2_title ||
        doc?.document_title ||
        doc?.ndpr_title ||
        doc?.criteria_title
      : tag === "soc2"
      ? doc?.document_title ||
        doc?.ndpr_title ||
        doc?.iso_title ||
        doc?.criteria_title
      : tag === "blockchain"
      ? doc?.ndpr_title ||
        doc?.iso_title ||
        doc?.soc2_title ||
        doc?.document_title
      : null
  } (${doc?.tags})`;
  return label;
};

export const objStandardProperties = (tag, groupIDs, parent_id) => {
  let groupID,
    docTitleLabel,
    docDescriptionLabel,
    groupIdLabel,
    parentIdLabel,
    parentID;

  if (tag === "pcidss") {
    groupID = groupIDs.sub_requirement_no;
    groupIdLabel = "requirement_sub_no";
    parentID = parent_id.parent_requirement;
    parentIdLabel = "requirement_id";
    docTitleLabel = "document_title";
    docDescriptionLabel = "document_description";
  } else if (tag === "ndpr") {
    groupID = groupIDs.category;
    parentID = groupID;
    parentIdLabel = "category";
    docTitleLabel = "ndpr_title";
    docDescriptionLabel = "ndpr_document_description";
  } else if (tag === "iso27001") {
    groupID = groupIDs.annex;
    parentID = groupID;
    parentIdLabel = "annex";
    docTitleLabel = "iso_title";
    docDescriptionLabel = "iso_description";
  } else if (tag === "soc2") {
    groupID = groupIDs.sub_control;
    groupIdLabel = "sub_control";
    parentID = parent_id.common_control;
    parentIdLabel = "common_control";
    docTitleLabel = "soc2_title";
    docDescriptionLabel = "soc2_description";
  }

  // pcidss, ndpr, iso, soc2
  const getOptionLabel = (doc) => {
    const label = `${
      tag === "pcidss"
        ? doc?.ndpr_title || doc?.iso_title || doc?.soc2_title
        : tag === "ndpr"
        ? doc?.iso_title || doc?.soc2_title || doc?.document_title
        : tag === "iso27001"
        ? doc?.soc2_title || doc?.document_title || doc?.ndpr_title
        : tag === "soc2"
        ? doc?.document_title || doc?.ndpr_title || doc?.iso_title
        : null
    } (${doc?.tags})`;
    return label;
  };

  return {
    groupID,
    docTitleLabel,
    docDescriptionLabel,
    groupIdLabel,
    parentIdLabel,
    getOptionLabel,
    parentID,
  };
};

export const numExtraction = (str = "") => {
  const matches = str?.match(/[\d.]+/);

  return matches ? parseFloat(matches[0]) : 0;
};

export const generateSortPoint = (title, tag) => {
  if (tag === "pcidss") {
    return title;
  } else if (tag === "ndpr") {
    return title;
  } else if (tag === "iso27001") {
    const titleArr = title.split(".");
    return numExtraction(titleArr[titleArr.length - 1]);
  }
};

export const releaseDateFormat = (date) => {
  return moment(date).format("MMMM, DD, YYYY");
};
export const vendorResponseRating = (value) => {
  if (value >= 0 && value <= 24) {
    return "FAIL";
  } else if (value >= 25 && value <= 49) {
    return "POOR";
  } else if (value >= 50 && value <= 79) {
    return "GOOD";
  } else if (value >= 80 && value <= 100) {
    return "EXCELLENT";
  } else {
    return null;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const removeNullFields = (obj, extraField) => {
  const filteredObject = {};
  for (let field in obj) {
    if (obj[field] !== null && field !== extraField)
      filteredObject[field] = obj[field];
  }
  return filteredObject;
};
export const removeSpaces = (string) => {
  if (!string) return "";
  return string.replace(/\s+/g, "");
};

export const AVAILABLE_STANDARDS = [
  "PCIDSS",
  "NDPR",
  "ISO27001",
  "SOC2",
  "BLOCKCHAIN",
];

export function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export const isFullFunctionPlan = (plan) => {
  return ["main", "custom"].includes(plan);
};

export const answeredQuestionsPercentage = (
  answeredQuestionsScore,
  totalQuestions
) => {
  let result = Math.floor((answeredQuestionsScore / totalQuestions) * 100);

  return result;
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
