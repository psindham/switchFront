import { Button } from 'react-bootstrap';

// import {Link} from 'react-router-dom';
const UDButton = ({text,onclick,type}) => {
        
    return ( 
        <Button className="signupbutton" type={type} onClick={onclick} variant="light" >{text}</Button>
    );
}
 
export default UDButton;