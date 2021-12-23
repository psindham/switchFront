import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,Modal
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; 
import CustButton from "../comps/CustButton/CustButton"
import FormData from 'form-data';
import Router from 'next/router';
import { useEffect,useState } from "react";
import  localstorage  from "local-storage";





const SearchPage = () => {
  const url = "https://switchfood.herokuapp.com";
  var subFile;
  const [searchitem,setSearchitem] = new useState('');
  const [error, setError] = useState('Invalid Password!');
  const [show, setShow] = useState(false);
  function toggleFalse(){
     setShow(false);
  }
  
  function onFileChange(fileChangeEvent) {
     fileChangeEvent.preventDefault();
     subFile = fileChangeEvent.target.files[0];
  };
  
  function uploadFile(){
      var formdata = new FormData();
      formdata.append("image",subFile);
  
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch("https://switchfood.herokuapp.com/food/Image", requestOptions)
      .then(response => response.text())
      .then(result => { 
        console.log(result);
        if(result!=undefined){
          result = JSON.stringify(result);
            setTimeout(() => {
              localstorage.set('fooditem',result);
              Router.push('/foodinfo');
          }, 200);
        }else{
          setError("Couldn't Find");
          setShow(true);
        }
        })
      .catch(error => console.log('error', error)); 
  }
  
  function manualsearch(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDAzMjczMjAsImRhdGEiOnsiX2lkIjoiNjFjMjJjODM4YTRmODRhMTczYmJiNmU4IiwiRW1haWwiOiJob3NoaWgxMTVAZ21haWwuY29tIiwiRE9CIjoiMTk5OS0wMy0yNVQwMDowMDowMC4wMDBaIiwiRmlyc3RuYW1lIjoiSGltYW5oc3UiLCJHZW5kZXIiOiJNYWxlIiwiQ291bnRyeSI6IkluZGlhIiwiRm9vZFByZWZlcmVuY2UiOiJWZWciLCJIZWlnaHQiOjE2NSwiV2VpZ2h0Ijo5NCwiUGFzc3dvcmQiOiIxMjQ1NiIsIl9fdiI6MH0sImlhdCI6MTY0MDE1NDUyMH0.emGR9Onf9OlqhkjAaUYMA5wVj_RjFMhJMJR2L_KncbU");
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch("https://switchfood.herokuapp.com/food/"+searchitem, requestOptions)
    .then(response => response.text())
    .then(result => { 
      console.log(result);
      if(result!=""){
        result = JSON.stringify(result);
          setTimeout(() => {
            localstorage.set('fooditem',result);
            Router.push('/foodinfo');
        }, 200);
      }else{
        setError("Couldn't Find");
          setShow(true);
      }
      })
    .catch(error => console.log('error', error)); 
  }
  
  return (
    <Container>
       <Modal show={show}>
        <Modal.Header className="themecolor">
          Notification
        </Modal.Header>
        <Modal.Body>
          {error}
        </Modal.Body>
        <Modal.Footer>
          <Button className="themecolor" onClick={toggleFalse}>Okay!</Button>
        </Modal.Footer>
      </Modal>
      <Row className="align-items-center">
        <Col><h3><p className="themecolortext">FooBit Search</p></h3></Col>
      </Row>
      <Row>
        <Col xs="5">
        <Form onSubmit={manualsearch}> 
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search here"
              aria-label="Search here"
              aria-describedby="basic-addon2"
              onChange={e => setSearchitem(e.target.value)}
            />
            <Button className="CustButton themecolor" type="button" onClick={manualsearch} variant="success">
              <FaSearch />
            </Button>
          </InputGroup>
          </Form>
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
