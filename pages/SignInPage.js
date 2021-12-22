import { Col, Container, Form, Row,Modal,Button } from "react-bootstrap";
import CustButton from "../comps/CustButton/CustButton";
import Router from 'next/router';
import { useState } from 'react';
import  localstorage  from "local-storage";


const SignInPage = () => {
  const url = "https://switchdiet.herokuapp.com";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('Invalid Password!');
  const [show, setShow] = useState(false);
  function toggleFalse(){
     setShow(false);
  }
  function login(){
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    console.log(email, password);
    var raw = JSON.stringify(
      {
        "Email":email,
        "Password":password
      }
    );
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(url+"/user/login/", requestOptions)
    .then(response => response.text())
    .then(result => {
        if(result===undefined)
        {
          alert("invalid Password or Username!");
        }else{
          console.log(result);
          // result = JSON.stringify(result);
          setTimeout(() => {
            localstorage.set('userdata',result);  
          }, 1000);
          Router.push('/dashboard');
        }
      })
      .catch(error => console.log('error', error));
}

  return (
    <Container>
      <Modal show={show}>
        <Modal.Header>
          Oops
        </Modal.Header>
        <Modal.Body>
          {error}
        </Modal.Body>
        <Modal.Footer>
          <Button className="themecolor" onClick={toggleFalse}>Okay!</Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <h4 className="themecolortext">Sign-In</h4>
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} id="email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} id="password"/>
            </Form.Group>
           <CustButton type="button" onclick={login} val={"Sign In"}/>
          </Form>
        </Col>
        <Col md='6'>
          <img src='/svg/register.svg' />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
