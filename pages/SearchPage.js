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
import Router from 'next/router';
import { useEffect,useState } from "react";
import  localstorage  from "local-storage";


const url = "https://switchfood.herokuapp.com";
var subFile;


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
        result = JSON.stringify(result);
          setTimeout(() => {
            localstorage.set('fooditem',result);
            Router.push('/foodinfo');
        }, 200);
      })
    .catch(error => console.log('error', error)); 
}





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
