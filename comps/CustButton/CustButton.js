import { Button } from 'react-bootstrap';

const CustButton = ({type,val, onclick}) => {
    return ( 
        <Button className="CustButton themecolor" type={type} variant="success" onClick={onclick}>{val}</Button>
    );
}
 
export default CustButton;