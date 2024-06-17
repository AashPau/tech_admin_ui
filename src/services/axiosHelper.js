import axios from "axios";

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshHwt,
}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      isPrivate,
      isRefreshHwt,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      messsafe: error.messsage,
    };
  }
};
