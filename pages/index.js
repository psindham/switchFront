import SignUpButton from "../comps/SignUpButton/SignUpButton";
import CustButton from "../comps/CustButton/CustButton";
import { Col, Container, Row } from "react-bootstrap";
import DisplayCard from "../comps/DisplayCard/Card";
import { useState,useEffect } from 'react';
import localstorage from 'local-storage';

const HomePage = () => {

  const [loggedin,setLoggedin]= useState(false);
  useEffect(() => {
    var userdata;
    userdata = JSON.parse(localstorage.get('userdata'));
      if(userdata==null){
        setLoggedin(false);
      }else{
        setLoggedin(true);
      }
  }, []);

  let displayCards = [
    <DisplayCard image={`/images/undraw_Artificial_intelligence_re_enpp.png`} title={`Food Image recognizer`} />,
    <DisplayCard image={`/images/undraw_breakfast_psiw.png`} title={`Diet Generator`} />,
    <DisplayCard image={`/images/undraw_visual_data_re_mxxo.png`} title={`Food Analyzer`} />
  ];
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={4}>
          <p className="home-text">
            Switch helps you to transform your unhealthy lifestyle into a
            Healthy Lifestyle.
          </p>
         {!loggedin?(<a class="nav-link active" aria-current="page" href="/SignUpPage"><SignUpButton /></a>)
         :(<a class="nav-link active" aria-current="page" href="/dashboard"><CustButton val="Goto Dashboard"/></a>)} 
        </Col>
        <Col className="containterOfImage">
          <img src='/images/undraw_mint_tea_7su01.png' alt="" />
        </Col>
      </Row>
      <Row className="text-center">
        <Col><h4>Why is it so great?</h4></Col></Row>
      <Row><em>
        The purpose of this project is to maintain the healthy lifestyle of the
        people. The main purpose is to create a healthy diet chart using the
        information entered by the user. Users can also get detailed information
        about the particular dish by uploading its image or searching by its
        name. Moreover, Users are also feasible to make some changes in diet
        charts according to their needs.</em>
      </Row>
      <Row className="text-center">{displayCards}</Row>
    </Container>
  );
};

export default HomePage;
