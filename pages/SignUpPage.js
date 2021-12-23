import { Col, Form, Row ,Modal,Button} from "react-bootstrap";
import CustButton from "../comps/CustButton/CustButton";
import CustInput from "../comps/CustInput/CustInput";
import { useState } from "react";
import Router from 'next/router';


const SignUpPage = () => {
  const url = "https://switchdiet.herokuapp.com";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [foodpreference, setFoodpreferences] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
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
        if(result===undefined || result==null)
        {
          setError("invalid Password or Username!");
          setShow(true);
        }else{
          console.log(result.statusCode);
          Router.push('/dashboard');
        }
      })
      .catch(error => console.log('error', error));
}

  function signup(){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      console.log(email,name,gender,country,foodpreference,height,weight,password,date);
      var raw = JSON.stringify({
        "Email":email,
        "Firstname":name,
        "Gender":gender,
        "Country":country,
        "FoodPreference":foodpreference,
        "Height":height,
        "Weight":weight,
        "Password":password,
        "DOB":date
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(url+"/user/", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          if(result===undefined)
          {
            alert("Invalid Data");
          }else{
            login();
          }
        })
        .catch(error => {console.log('error', error);alert("Invalid Data");});
  }

  return (
    <section className="u-clearfix u-section-1" id="sec-4b2d">
      <div className="u-clearfix u-sheet u-sheet-1">
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
        <h2 className="u-text u-text-1 themecolortext">Create Account</h2>
        <Row className="text-center ">
          <Col md="6">
            <Form onSubmit={signup}>
              <CustInput 
                label={"Email Address"}
                placeholder={"Enter Your Email Address"}
                typeInput={"email"}
                id='email'
                onChange={e => setEmail(e.target.value)}
              />
              <CustInput
                label={"Name"}
                placeholder={"Enter Your Email Address"}
                typeInput={"text"}
                id='name'
                onChange={e => setName(e.target.value)}
              />
              <CustInput
                label={"DOB"}
                placeholder={"Enter Your DOB"}
                typeInput={"date"}
                id='dob'
                onChange={e => {setDate(e.target.value);}}
              />
              <Form.Select className="bordercolor mt-2" aria-label="Gender" id="gender" onChange={e => setGender(e.target.value)}>
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
              <Form.Select className="bordercolor mt-2" aria-label="Country" id="country" onChange={e => setCountry(e.target.value)}>
                <option>Country</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
              </Form.Select>
              <CustInput
                label={"Food Preference"}
                placeholder={"Enter Your Food Preference"}
                typeInput={"email"}
                id="foodpreference"
                onChange={e => setFoodpreferences(e.target.value)}
              />
              
              <CustInput xs={1} label={"Height"} typeInput={"number"} id="height" onChange={e => setHeight(e.target.value)}/>
              <CustInput md={2} label={"Weight"} typeInput={"number"} id="weight" onChange={e => setWeight(e.target.value)}/>

              <CustInput label={"Password"} typeInput={"password"} id="password" onChange={e => setPassword(e.target.value)}/>
              <Row className="mt-2">
                <Col>
              <CustButton type="button" val="Signup" onclick={signup}/>
              </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                Already have an account ? &nbsp;
                <a href="/SignInPage">Sign in</a>
              </Col>
              </Row>
            </Form>
          </Col>
          <Col md="6">
            <img src="images/undraw_profile_details_f8b7.png" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SignUpPage;
