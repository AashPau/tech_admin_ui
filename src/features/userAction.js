import { postNewUser } from "./userAxios";
import { toast } from "react-toastify";

const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.pending(pending, {
    pending: "please wait...",
  });
  const response = await pending;
  toast[response.status](response.message);
  return response;
};
export const createNewAdminAction = async (userData) => {
  return apiProcessWithToast(userData, postNewUser);
};
