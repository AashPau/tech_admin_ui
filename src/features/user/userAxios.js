import { apiProcessor } from "../../services/axiosHelper";
const userEP = import.meta.env.VITE_ROOTSERVER + "/api/v1/user";

export const postNewUser = (data) => {
  const axiosObj = {
    url: userEP,
    method: "post",
    data,
    //isPrivate:true
  };
  return apiProcessor(axiosObj);
};
export const verifyUserLink = (data) => {
  const axiosObj = {
    url: userEP + "/user-verification",
    method: "post",
    data,
  };
  return apiProcessor(axiosObj);
};

export const userLogin = (data) => {
  const axiosObj = {
    url: userEP + "/login",
    method: "post",
    data,
    showToast: true,
  };
  return apiProcessor(axiosObj);
};
export const fetchUserProfile = () => {
  const axiosObj = {
    url: userEP,
    method: "get",
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};

export const getNewAccessJWT = () => {
  const obj = {
    url: userEP + "/new-accessjwt",
    method: "get",
    isPrivate: true,
    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};

export const logoutUser = () => {
  const obj = {
    url: userEP + "/logout",
    method: "delete",
    isPrivate: true,
    showToast: true,
  };
  return apiProcessor(obj);
};

export const requestOTP = (data) => {
  const obj = {
    url: userEP + "/otp",
    method: "post",
    showToast: true,
    data,
  };
  return apiProcessor(obj);
};
export const resetPassword = (data) => {
  const obj = {
    url: userEP + "/password/reset",
    method: "patch",
    showToast: true,
    data,
  };
  return apiProcessor(obj);
};
