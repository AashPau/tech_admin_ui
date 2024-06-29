import {
  fetchUserProfile,
  getNewAccessJWT,
  logoutUser,
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
  return apiProcessWithToast(data, verifyUserLink);
};

export const loginAdminAction = (data) => async (dispatch) => {
  const { jwts } = await userLogin(data);

  if (jwts?.acessJWT && jwts?.refreshJWT) {
    sessionStorage.setItem("accessJWT", jwts.accessJWT);
    localStorage.setItem("refreshJWT", jwts.refreshJWT);

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
    // get a new access jwt then call get user method
    const response = await getNewAccessJWT();

    if (response?.accessJWT) {
      sessionStorage.setItem("accessJWT", response.accessJWT);
      dispatch(fetchUserProfileAction());
    }
  }
};

export const logoutUserAction = () => (dispatch) => {
  //call api with authorization for backend logout
  logoutUser();
  //frontend logout
  dispatch(setUser({}));
  localStorage.removeItem("refresHJWT");
  sessionStorage.removeItem("accessJWT");
};
