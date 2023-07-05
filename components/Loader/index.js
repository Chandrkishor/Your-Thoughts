"use client";

import { useContext } from "react";
import "./Loader.css";
import { General } from "@/app/store/GeneralContext";

// ** Note- To change the loader styles you can uncomment the the commented styles inside css file
export function Loader() {
  let { isLoading } = useContext(General);
  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : null;
}

export function Loader2() {
  let { isLoading } = useContext(General);
  return isLoading ? (
    <div className="loader-container2">
      <div className="loader2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
}

// export default Loader;
