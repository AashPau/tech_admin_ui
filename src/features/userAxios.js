import { apiProcessor } from "../services/axiosHelper";
const userEP = import.meta.env.VITE_ROOTSERVER + "/api/v1/admin";

export const postNewUser = (data) => {
  const axiosObj = {
    url: userEP,
    method: "post",
    data,
    //isPrivate:true
  };
  return apiProcessor(axiosObj);
};
