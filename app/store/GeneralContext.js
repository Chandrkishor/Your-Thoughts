"use client";

import { createContext, useEffect, useState } from "react";

export const General = createContext();

function GeneralContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: undefined,
    severity: "success",
    vertical: "top",
    horizontal: "right",
  });
  let userDetails = sessionStorage.getItem("userDetails");
  userDetails = JSON.parse(userDetails);
  // let userDetails = {};

  useEffect(() => {
    // The user is logged in.
    if (userDetails?.name || userDetails?.email) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      // The user is not logged in.
    }
  }, [userDetails]);

  return (
    <General.Provider
      value={{
        isLoading,
        setIsLoading,
        alert,
        setAlert,
        isLogin,
        setIsLogin,
      }}>
      {children}
    </General.Provider>
  );
}
export default GeneralContext;
