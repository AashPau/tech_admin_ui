import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/customInput/CustomInput";
import { loginAdminAction } from "../../features/user/userAction";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef("");
  const passRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);

  const redirectTo = location?.state?.from?.pathname || "/admin/dashboard";

  useEffect(() => {
    user?._id && navigate(redirectTo);
  }, [user?._id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("both input field must be filled");
    }
    //call server to process the authentication
    // const response = await apiProcessor
    dispatch(loginAdminAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
      forwardRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "******",
      forwardRef: passRef,
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div style={{ width: "450px" }}>
        <Form
          className="shadow-lg p-3 rounded bg-light"
          onSubmit={handleOnSubmit}
        >
          <h3 className="text-center">Admin Login</h3>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid mt-3">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
