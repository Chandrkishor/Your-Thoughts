"use client";
import { General } from "@/app/store/GeneralContext";
import { API_BASENAME, API_BASEPATH, API_BASEURL } from "@/app/utils/Constant";
import axios from "axios";
import { useCallback, useContext, useState } from "react";

const useAPI = () => {
  const [data, setData] = useState(null);
  let { setIsLoading, setAlert } = useContext(General);

  //* GET API
  const get = useCallback((path, callBackData) => {
    setIsLoading(true);
    axios
      .get(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${path}`, {
        withCredentials: true, // Include cookies in the request
      })
      .then((response) => {
        setData(response?.data ?? {});
        callBackData(response, true);
      })
      .catch((err) => {
        console.log("err", err);
        callBackData(err, false);
        setAlert({
          message: err.message,
          type: "error",
          open: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  //* POST API
  const post = useCallback((pUrl, body, callBackFun = () => {}) => {
    setIsLoading(true);
    axios
      .post(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${pUrl}`, body, {
        withCredentials: true, // Include cookies in the request
      })
      .then((response) => {
        setData(response.data);
        callBackFun(response, true);
      })
      .catch((response) => {
        setAlert({
          message: response?.data?.message ?? "Something went wrong",
          type: "error",
          open: true,
        });
        callBackFun(err, false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  //* PUT API
  const put = useCallback((pUrl, body) => {
    setIsLoading(true);
    axios
      .patch(`http://localhost:5000/api/v1/${pUrl}`, body, {
        withCredentials: true, // Include cookies in the request
      })
      .then(() => {
        setData(data);
        callBackFun(data, true);
      })
      .catch(({ response }) => {
        callBackFun(response, false);
        setAlert({
          message: response?.data?.message ?? "",
          type: "error",
          open: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    data,
    get,
    put,
    post,
  };
};

export default useAPI;
