import { Button } from 'react-bootstrap';

const CustButton = ({val}) => {
    return ( 
        <Button className="CustButton themecolor" variant="success">{val}</Button>
    );
}
 
export default CustButton;