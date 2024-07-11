import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { UserVerification } from "./pages/user/UserVerification";
import { AdminLayout } from "./components/layout/AdminLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Auth } from "./components/auth/Auth";
import Categories from "./pages/category/Categories";
import Products from "./pages/product/Products";
import User from "./pages/user/User";
import Orders from "./pages/order/Orders";
import Reviews from "./pages/review/Reviews";
import Admin from "./pages/user/Admin";
import Profile from "./pages/user/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLoginAction } from "./features/user/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLoginAction());
  }, []);
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<UserVerification />} />
        {/* <Route path="/forget-password" element={<ForgetPassword />} /> */}

        {/* private routes  */}

        <Route
          path="/"
          element={
            <Auth>
              <AdminLayout />
            </Auth>
          }
        >
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/categories" element={<Categories />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<User />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="admin/reviews" element={<Reviews />} />

          <Route path="admin/admins" element={<Admin />} />
          <Route path="admin/new" element={<Register />} />

          <Route path="admin/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
