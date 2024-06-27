import {
  fetchUserProfile,
  postNewUser,
  userLogin,
  verifyUserLink,
} from "./userAxios";
import { toast } from "react-toastify";
import { setUser } from "./userSlice";

const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "please wait...",
  });
  const response = await pending;
  toast[response.status](response.message);
  return response;
};
export const createNewAdminAction = async (userData) => {
  apiProcessWithToast(userData, postNewUser);
};

export const verifyUserLinkAction = async (data) => {
  apiProcessWithToast(data, verifyUserLink);
};

export const loginAdminAction = (data) => async (dispatch) => {
  const { jwts } = await userLogin(data);

  if (jwts?.acessJWT && jwts?.refreshJWT) {
    sessionStorage.setItem(jwts.accessJWT),
      localStorage.setItem(jwts.refreshJWT);

    dispatch(fetchUserProfileAction());
  }
  //if login success
};

export const fetchUserProfileAction = () => async (dispatch) => {
  const { status, userInfo } = await fetchUserProfile();
  if (status === "success") {
    //mopunt user in the redux-store
    dispatch(setUser(userInfo));
  }
};

export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (accessJWT) {
    return dispatch(fetchUserProfileAction());
  }

  if (refreshJWT) {
    const response = await getNew;
  }
};