import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import CustButton from "../comps/CustButton/CustButton"
const SearchPage = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col><h3><p className="themecolortext">FooBit Search</p></h3></Col>
      </Row>
      <Row>
        <Col xs="5">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search here"
              aria-label="Search here"
              aria-describedby="basic-addon2"
            />
            <Button className="CustButton themecolor" variant="success">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      
      <h1><b className="themecolortext">OR</b></h1>
      <Row>
        <Col xs='5'>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Search By Image</Form.Label>
            <Form.Control type="file"/>
            <br/>
            <CustButton val="Search"/>
          </Form.Group>
        </Col>

        <Col>
            <img src="images/undraw_searching_p5ux.png" />
        </Col>

      </Row>
      
      <Row></Row>
    </Container>
  );
};

export default SearchPage;
