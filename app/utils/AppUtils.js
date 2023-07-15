"use client";
// to get the session
export const setItemSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
// to get the session
export const getItemSession = (key) => {
  let value = JSON.parse(sessionStorage.getItem(key));
  return value;
};
export const removeItemSession = (key) => {
  sessionStorage.removeItem(key);
};
//* for user details
export const getUserDetails = () => {
  let user_details = JSON.parse(sessionStorage.getItem("userDetails"));
  if (user_details) {
    return user_details;
  } else {
    return {};
  }
};

//* for saving cookies
export const saveCookies = (variable = "", token = null) => {
  const cookie = `${variable}=${encodeURIComponent(token)}`;
  document.cookie = cookie;
};
export const downloadFile = (url, filename) => {
  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export const regexes = {
  email: /^\S+@\S+\.\S+$/,
  number: /^\d*\.?\d*$/,
  zipcode: /^\d*-?\d*$/,
  fax: /^(\+)?(((((\d+)|(\(\d+\))|(\(\d+\s(\d)\)))(\s|-|\d+))+)|((\d+)|(\(\d+\))$)+)+\d$/,
  // text: /^[a-zA-Z ][a-zA-Z 0-9]*$/, //"hello" "hello123" "Hello World" or hello 4561
  name: /^[\u4e00-\u9fa5a-zA-Z ]+$/u,
  serialNo: /^[A-Za-z0-9-]+$/,
  // address: /^[a-zA-Z0-9!@#$()_+:;<>,.* ]+$/, //not allowed  ///[~%^&/?]/
  password: /^[\s\S]+$/,
  website:
    /^(https?:\/\/)?(www\.)?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.[a-z]{2,63}$/,
  htmlRegex: /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
  decimalNo: /^\d+(\.\d+)?$/,
  decimalPositiveNo: /^[0-9]+(\.[0-9]+)?$/,
  percentage: /^(100(\.0{1,2})?|[0-9]{1,2}(\.\d{1,3})?)%$/, // 0.5% true
};

export const validateByRegex = (type, value) => {
  // Return true if there is no validation for the type
  return regexes[type]?.test(value) ?? true;
};

export const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func?.apply(context, args), delay);
  };
};

export function imageUrlToBase64(imageUrl) {
  try {
    const response = axios.get(imageUrl, { responseType: "arraybuffer" });
    const contentType = response?.headers["content-type"] || "image/jpeg"; // Set default content type
    const blob = new Blob([response?.data], { type: contentType });
    const base64 = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader?.readAsDataURL(blob);
      reader.onload = () => resolve(reader?.result);
      reader.onerror = reject;
    });
    // return base64.split(",")[1];
    return base64;
  } catch (error) {
    console.error(error);
    return "";
  }
}
