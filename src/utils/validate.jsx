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

export const pattern = {
  ip_address: /^$|^[0-9.:/,-]+$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i,
  phone: /^$|^[0-9+]+$/,
  number: /^$|^[0-9]+$/,
  work_email:
    /^[a-zA-Z0-9._%+-]+@(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/i,
  password: {
    uppercase: /[A-Z]/,
    number: /[0-9]/,
    characters: /[!@#$%^&*_()-+=[\]{}|\\:;'",./?><]/,
    lowercase: /[a-z]/,
  },
  url: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g,
};
// (?!gmail.com)
const passwordFieldNames = ["new_password", "confirm_password"];

export const validation = (value = "", name, required) => {
  let isValid = true,
    errorMessage = "";
  if (name?.toLowerCase() === "email") {
    console.log({ check: !pattern.email.test(value) });
    // validation for emails
    if (!pattern.email.test(value)) {
      isValid = false;
      errorMessage = "This email is not a valid email";
    }
  } else if (name?.toLowerCase() === "work_email") {
    if (!pattern.work_email.test(value)) {
      isValid = false;
      errorMessage = "This email is not a business email";
    }
  } else if (name?.includes("name")) {
    // validation for names
  } else if (passwordFieldNames?.includes(name)) {
    console.log({ value });
    // minlength, alphabet,
    if (value.length < 12) {
      isValid = false;
      errorMessage = "Password cannot be less than 12 characters";
    } else if (!value.match(pattern.password.uppercase)) {
      isValid = false;
      errorMessage = "Password must contain at least one uppercase alphabet";
    } else if (!value.match(pattern.password.lowercase)) {
      isValid = false;
      errorMessage = "Password must contain at least one lowercase alphabet";
    } else if (!value.match(pattern.password.number)) {
      isValid = false;
      errorMessage = "Password must contain at least one numeric character";
    } else if (!value.match(pattern.password.characters)) {
      isValid = false;
      errorMessage = "Password must contain at least one special character";
    }
  } else if (
    name.toLowerCase()?.includes("ip_") ||
    name.toLowerCase()?.includes("_ip") ||
    name.toLowerCase()?.includes("ipaddress")
  ) {
    if (!pattern.ip_address.test(value)) {
      isValid = false;
      errorMessage = "This IP address is not valid";
    }
  } else if (name.toLowerCase()?.includes("phone")) {
    if (value?.length > 15 || value?.length < 7) {
      isValid = false;
      errorMessage = "Phone number should be between 7 and 15";
    }
  } else if (name.toLowerCase() === "code") {
    if (value.length !== 6) {
      isValid = false;
      errorMessage = "Code must be 6 digits";
    }
  }
  // } else if (name.toLowerCase()?.includes('url')) {
  //     if (!pattern.url.test(value)) {
  //         isValid = false;
  //         errorMessage = 'This URL is not valid';
  //     }
  // }

  // if (name.toLowerCase().includes('url')) {
  //     if (!pattern.url.test(value)) {
  //         isValid = false;
  //         errorMessage = 'This URL is not valid';
  //     }
  // }

  if (
    (value === "" && required) ||
    (Array.isArray(value) && required && value?.length === 0)
  ) {
    isValid = false;
    errorMessage =
      name === "select"
        ? "Select atleast one option"
        : name === "agreementCheck"
        ? "You need to check this box"
        : `${name === "work_email" ? "email" : name} cannot be empty`;
  }

  return { isValid, errorMessage };
};
