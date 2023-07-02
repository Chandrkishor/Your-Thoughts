"use client";
import axios from "axios";
import { useCallback, useState } from "react";
// import { process } from "process";

const useAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    type: "error",
    alertError: false,
  });

  const get = useCallback((path, callBackData) => {
    axios
      // .get(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${path}`)
      .get(`http://localhost:5000/api/v1/${path}`)
      .then(({ data }) => {
        setData(data);
        callBackData(data, true);
      })
      .catch((err) => {
        console.log("err", err);
        callBackData(err, false);
        setErrorMessage((pre) => ({
          ...pre,
          message: err.message,
          type: "error",
          alertError: true,
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const post = useCallback((pUrl, body, callBackFun = () => {}) => {
    setLoading(true);
    axios
      // .post(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${pUrl}`, body)
      .post(`http://localhost:5000/api/v1/${pUrl}`, body)
      .then(({ data }) => {
        setData(data);
        callBackFun(data, true);
      })
      .catch((err) => {
        setErrorMessage({
          message: err.response?.data?.message ?? "Something went wrong",
          type: "error",
          alertError: true,
        });
        callBackFun(err, false);
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const put = useCallback((pUrl, body) => {
    setLoading(true);
    axios
      // .patch(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${pUrl}`, body)
      .patch(`http://localhost:5000/api/v1/${pUrl}`, body)
      .then(() => {
        setData(data);
        callBackFun(data, true);
      })
      .catch((err) => {
        callBackFun(err, false);
        setErrorMessage({
          message: err.response?.data?.message ?? "",
          type: "error",
          alertError: true,
        });
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAlertClose = () => {
    setErrorMessage((pre) => ({
      ...pre,
      message: "",
      type: "error",
      alertError: false,
    }));
  };

  return {
    data,
    // alertError,
    errorMessage,
    setErrorMessage,
    handleAlertClose,
    loading,
    get,
    put,
    post,
  };
};

export default useAPI;
