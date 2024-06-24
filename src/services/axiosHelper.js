import axios from "axios";
import { toast } from "react-toastify";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshHwt,
  showToast,
}) => {
  try {
    const headers = isPrivate
      ? {
          Authorization: getAccessJWT(),
        }
      : null;
    const pending = axios({
      method,
      url,
      data,
      headers,
    });
    let response = {};
    if (showToast) {
      toast.promise(pending, {
        pending: "please wait...",
      });
      response = await pending;
      toast[response.data.status](response.data.message);
    } else {
      response = await pending;
    }
    return response.data;
  } catch (error) {
    showToast && toast.error(error.message);
    return {
      status: "error",
      message: error.messsage,
    };
  }
};
