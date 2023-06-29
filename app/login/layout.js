import React from "react";
import style from "../sign_up/signStyle.module.css";

export const metadata = {
  title: "login",
  description: "User login up",
};

const layout = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};

export default layout;
