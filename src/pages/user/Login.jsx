import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { createNewAdminAction } from "../../features/userAction";
import { toast } from "react-toastify";
import { forwardRef, useEffect, useRef } from "react";
import { apiProcessor } from "../../services/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);

  const redirectTo = "admin/dashboard";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return toast.error("both input field must be filled");
    }
    //call server to process the authentication
    // const response = await apiProcessor
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
