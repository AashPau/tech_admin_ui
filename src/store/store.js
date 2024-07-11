import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

import systemReducer from "./systemSlice";
import catReducer from "../features/categories/catSlice";
import productReducer from "../features/products/productSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    system: systemReducer,
    catInfo: catReducer,
    productInfo: productReducer,
  },
});
