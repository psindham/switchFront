import { FloatingLabel, Form } from "react-bootstrap";

const CustInput = ({label,typeInput,placeholder,onChange,value}) => {
    return ( <>
        <FloatingLabel
          controlId="floatingInput"
          label={label}
          className="bordercolor mt-2"
        >
          <Form.Control className="bordercolor" type={typeInput} placeholder={placeholder} onChange={onChange} value={value}/>
        </FloatingLabel>
      </> );
}
 
export default CustInput;