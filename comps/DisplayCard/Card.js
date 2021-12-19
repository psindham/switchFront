import { Col } from "react-bootstrap";

const DisplayCard = ({image,title,height,width}) => {
    
    return (  
    <Col>
        <img src={image} height={height} width={width}/>
        <h5>{title}</h5>
    </Col> 
        );
}
 
export default DisplayCard;