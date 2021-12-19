import { FloatingLabel, Form } from "react-bootstrap";

const CustInput = ({label,typeInput,placeholder}) => {
    return ( <>
        <FloatingLabel
          controlId="floatingInput"
          label={label}
          className="bordercolor mt-2"
        >
          <Form.Control className="bordercolor" type={typeInput} placeholder={placeholder} />
        </FloatingLabel>
      </> );
}
 
export default CustInput;