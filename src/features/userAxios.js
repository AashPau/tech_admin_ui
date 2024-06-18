import { apiProcessor } from "../services/axiosHelper";
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
