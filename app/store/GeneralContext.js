"use client";

import { createContext, useEffect, useState } from "react";
import { getUserDetails } from "../utils/AppUtils";

export const General = createContext();

function GeneralContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: undefined,
    severity: "success",
    vertical: "top",
    horizontal: "right",
  });
  let userDetails = getUserDetails();

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
        isAddOpen,
        isLogin,
        alert,
        setAlert,
        setIsLogin,
        setIsLoading,
        setIsAddOpen,
      }}>
      {children}
    </General.Provider>
  );
}
export default GeneralContext;
