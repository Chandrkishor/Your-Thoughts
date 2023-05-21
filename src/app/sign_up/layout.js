import React from "react";
import style from "./signStyle.module.css";

export const metadata = {
  title: "Sign Up page",
  description: "User signed up",
};

const layout = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};

export default layout;
