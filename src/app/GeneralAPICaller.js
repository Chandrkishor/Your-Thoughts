import axios from "axios";
import { useCallback, useState } from "react";
// import { process } from "process";

const useAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    type: "error",
    alertError: false,
  });

  const API_BASEURL = process?.env?.API_BASEURL;
  const API_BASENAME = process?.env?.API_BASENAME;
  const API_BASEPATH = process?.env?.API_BASEPATH;

  console.log("useAPI ~ API_BASEURL: >>", API_BASEURL, process.env);
  const get = useCallback(async (path, callBackData) => {
    try {
      setLoading(true);
      await axios
        .get(`${API_BASEURL}${API_BASENAME}${API_BASEPATH}${path}`)
        .then(({ data }) => {
          setData(data);
          callBackData(data, true);
        });
    } catch (err) {
      console.log("err", err);
      callBackData(err, false);
      setErrorMessage((pre) => ({
        ...pre,
        message: err.message,
        type: "error",
        alertError: true,
      }));
    } finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback((pUrl, body, callBackFun = () => {}) => {
    setLoading(true);
    axios
      .post(
        `${process.env.API_BASEURL}${API_BASENAME}${API_BASEPATH}${pUrl}`,
        body
      )
      .then(({ data }) => {
        setData(data);
        callBackFun(data, true);
      })
      .catch((err) => {
        setErrorMessage({
          message: err.response.data.message ?? "",
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
      .patch(
        `${process.env.API_BASEURL}${API_BASENAME}${API_BASEPATH}${pUrl}`,
        body
      )
      .then(() => {
        setData(data);
        callBackFun(data, true);
      })
      .catch((err) => {
        callBackFun(err, false);
        setErrorMessage({
          message: err.response.data.message ?? "",
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
