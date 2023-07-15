"use client";

export const screens = {
  small: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};
export const API_BASEURL = process.env.NEXT_PUBLIC_API_BASEURL;
export const API_BASENAME = process.env.NEXT_PUBLIC_API_BASENAME;
export const API_BASEPATH = process.env.NEXT_PUBLIC_API_BASEPATH;
export const UI_BASEURL = process.env.NEXT_PUBLIC_UI_BASEURL;
// export const API_ENABLED =
//   !process.env.REACT_APP_API_ENABLED ||
//   process.env.REACT_APP_API_ENABLED === "false"
//     ? false
//     : true;

// export async function getServerSideProps() {
//   console.log("process.env: >>", process.env);
// }
export const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5mb
export const MAX_FILE_SIZE_IN_MB = 5;
