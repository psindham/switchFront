import { Button } from 'react-bootstrap';

// import {Link} from 'react-router-dom';
const UDButton = ({text}) => {
        
    return ( 
        <Button className="signupbutton" variant="light" >{text}</Button>
    );
}
 
export default UDButton;