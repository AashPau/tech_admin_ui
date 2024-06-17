import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/customInput/CustomInput";
import useForm from "../../hooks/useForm";

export const Register = () => {
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Sam",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Jones",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0411111111",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "******",
    },
    {
      label: "Confirm Password",
      name: "password",
      type: "confirmPassword",
      required: true,
      placeholder: "******",
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: "450px" }}>
        <Form className="shadow-lg p-3 rounded" onSubmit={handleOnSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid mt-3">
            <Button type="submit">Register New Admin</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
