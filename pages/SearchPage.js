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
import FormData from 'form-data';
const url = "https://switchfood.herokuapp.com";
var subFile;
 
function uploadFile(){
  console.log("Hello");
  if(subFile === undefined) {return}
  const fd = new FormData();
  fd.append('image', subFile);
  fetch(url+"/food/image/", {
      method: 'POST',
      origin: '*',
      mode:'cors',
      header :{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"form-data",
        "Accept": "application/json"
      },
      body: fd
  })
  .then(res => {console.log(res)})
  .then(json => console.log(json))
  .catch(err => console.error(err));
} ;
function onFileChange(fileChangeEvent) {
   fileChangeEvent.preventDefault();
   subFile = fileChangeEvent.target.files[0];
   console.log("Hello");
};

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
          <Form onSubmit={uploadFile}> 
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Search By Image</Form.Label>
            <Form.Control type="file" onChange={(ev) => onFileChange(ev) }/>
            <br/>
            <CustButton  type="button" onclick={uploadFile} val="Search"/>
          </Form.Group>
          </Form>
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
