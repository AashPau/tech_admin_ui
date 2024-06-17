import { Form } from "react-bootstrap";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mt-4">
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};
