import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Form,FormControl, NavItem} from "react-bootstrap";
import CustButton from "../comps/CustButton/CustButton";
import { Col, Container, Row,Modal,Button } from "react-bootstrap";
import  localstorage  from "local-storage";
import { useState,useEffect } from "react";
import Router from 'next/router'

const selection  = () => {
  var diet;
  var userdata;
  var fats=["paneer","noodles","Burger","pizza","chicken","rice","Egg","almonds","chiaseeds","peanut","peanutbutter","walnut"], 
  protein=["paneer","noodles","Burger","pizza","chicken","rice","Egg","almonds","chiaseeds","peanut","peanutbutter","walnut"],
  carbs=["Burger","pizza","rice","pulses","quinoa","chickpeas","roti","bread","kidneybeans","oats"],
  fruits=["pineapple","apple","water melon","cabbage","Tomato","cucumber","Guava","Papaya","Red Grapes","Green Grapes","Brinjal"];
  const [id,setID]= useState('');
  const [token,setToken]= useState('');
  // const [diet,setUserDietDashboardData]= useState('');
  const [Breakfastfruit,setBreakfastfruit]= useState('');
  const [Breakfastprotein,setBreakfastprotein]= useState('');
  const [Breakfastcarbs,setBreakfastcarbs]= useState('');
  const [Lunchcarbs,setLunchcarbs]= useState('');
  const [Lunchprotein,setLunchprotein]= useState('');
  const [Snackprotein,setSnackprotein]= useState('');
  const [Snackfats,setSnackfats]= useState('');
  const [Dinnerprotein,setDinnerprotein]= useState('');
  const [Dinnercarbs,setDinnercarbs]= useState('');
  const [error, setError] = useState('Invalid Password!');
  const [show, setShow] = useState(false);
  const [Rcalories, setRcalories] = useState('');
  function toggleFalse(){
     setShow(false);
  }
  useEffect(() => {
    userdata = JSON.parse(localstorage.get('userdata'))
    setTimeout(() => {
      // if(userdata==null){
      //   Router.push('/');
      // }else{
        // console.log(userdata);
        setID(userdata['user']['_id']);
        // console.log(userdata.token,userdata['user']['_id']);
        setToken(userdata.token);
      
  
        var myHeaders = new Headers();
        myHeaders.append("Authorization",userdata['token']);
        myHeaders.append("Content-Type", "application/json");
  
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
            const fetchData = async () => {
                try {
                  const response= await fetch("https://switchdiet.herokuapp.com/user/"+userdata['user']['_id']+"/diet", requestOptions);
                  diet = await response.json();
                  console.log(diet);                
            } catch (error) {
                      console.log("error", error);
                    }  
            };
            fetchData();
            setvalues();
          
          
    }, 3000);

}, [])

  function setvalues(){
    setTimeout(function() {
      setBreakfastfruit(diet.Breakfast[0]);
      setBreakfastprotein(diet.Breakfast[1]);
      setBreakfastcarbs(diet.Breakfast[2]);
      setLunchcarbs(diet.Lunch[0]);
      setLunchprotein(diet.Lunch[1]);
      setSnackprotein(diet.Snack[0]);
      setSnackfats(diet.Snack[1]);
      setDinnerprotein(diet.Dinner[0]);
      setDinnercarbs(diet.Dinner[1]);
      setRcalories(diet.Requiredcalories);
    },2000);
  }

// useEffect(() =>{
//   userdata = JSON.parse(localstorage.get('userdata'));
//       var myHeaders = new Headers();
  
//       myHeaders.append("Authorization",userdata.token);
//       myHeaders.append("Content-Type", "application/json");
//       var requestOptions = {
//         method: "GET",
//         headers: myHeaders,
//         redirect: "follow",
//       };
//     const url = "https://switchdiet.herokuapp.com";
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url + `/user/`+userdata['user']['_id']+`/diet`, requestOptions);
//         const json = await response.json();
//         setUserDietDashboardData(json)
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//     console.log(diet);
//     setUserDietDashboardData(JSON.parse(diet));
//       setBreakfastfruit(diet.Breakfast[0]);
//       setBreakfastprotein(diet.Breakfast[1]);
//       setBreakfastcarbs(diet.Breakfast[2]);
//       setLunchcarbs(diet.Lunch[0]);
//       setLunchprotein(diet.Lunch[1]);
//       setSnackprotein(diet.Snack[0]);
//       setSnackfats(diet.Snack[1]);
//       setDinnerprotein(diet.Dinner[0]);
//       setDinnercarbs(diet.Dinner[1]);
//   },[]); 

function updatediet(){
  
          var myHeaders = new Headers();
          myHeaders.append("Authorization",token);
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "_id":id,
            "Breakfast":[Breakfastfruit,Breakfastprotein,Breakfastcarbs],
            "Lunch":[Lunchcarbs,Lunchprotein],
            "Dinner":[Dinnerprotein,Dinnercarbs],
            "Snack":[Snackprotein,Snackfats],
            "Requiredcalories":2612.75});
            
          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          const fetchData = async () => {
            try {
              const response= await fetch("https://switchdiet.herokuapp.com/user/diet", requestOptions)
              diet = await response.json();
              console.log(diet);
              if(diet!=undefined) {
                  setShow(true);
                  setError("Updated Successfully");
              }               
        } catch (error) {
                  console.log("error", error);
                }  
        };
        fetchData();
        setvalues();
      //   fetch("https://switchdiet.herokuapp.com/user/diet", requestOptions)
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
}


  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          Notification...
        </Modal.Header>
        <Modal.Body>
          {error}
        </Modal.Body>
        <Modal.Footer>
          <Button className="themecolor" onClick={toggleFalse}>Okay!</Button>
        </Modal.Footer>
      </Modal>
        <h3 className="themecolortext al-center mt-2">Dashboard</h3>
      <Row>
          <Col xs={2}></Col>
        <Col xs={4}>
          <Form className="mb-2"  style={{ paddingLeft: 10, paddingRight: 0 }} onSubmit={updatediet}>
          <h3 className="themecolortext mt-2">Breakfast</h3>
          < Form.Select className="bordercolor" aria-label="Default select example" onChange={e => setBreakfastfruit(e.target.value)} value={Breakfastfruit}>
          {fruits.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example" onChange={e => setBreakfastprotein(e.target.value)} value={Breakfastprotein}>
              {protein.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example" onChange={e => setBreakfastcarbs(e.target.value)} value={Breakfastcarbs}>
            {carbs.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            <h3 className="themecolortext mt-2">Lunch</h3>
          < Form.Select className="bordercolor" aria-label="Default select example" onChange={e => setLunchcarbs(e.target.value)} value={Lunchcarbs}>
          {carbs.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example" onChange={e => setLunchprotein(e.target.value)} value={Lunchprotein}>
            {protein.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            <h3 className="themecolortext mt-2">Snacks</h3>
          < Form.Select className="bordercolor" aria-label="Default select example" onChange={e => setSnackprotein(e.target.value)} value={Snackprotein}> 
              {protein.map(x=>
                    <option value={x}>{x}</option>
              )}
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example" onChange={e => setSnackfats(e.target.value)} value={Snackfats}>
            {fats.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            <h3 className="themecolortext mt-2">Dinner</h3>
          < Form.Select className="bordercolor" aria-label="Default select example" onChange={e => setDinnerprotein(e.target.value)} value={Dinnerprotein}>
                {protein.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example"  onChange={e => setDinnercarbs(e.target.value)} value={Dinnercarbs}>
            {carbs.map(x=>
                <option value={x}>{x}</option>
              )}
            </Form.Select>
            
            <div className="al-center mt-2">
            <CustButton type="button" val="update" onclick={updatediet}/>
            </div>
          </Form>
        </Col>
        <Col xs={5} >
          <Row>
            <Col xs={12} className="al-center">
            <h4 className="themecolortext al-center mt-2">Required calories per :  <span className="text-danger">&nbsp;{Rcalories}</span></h4>
            </Col>
            </Row>
          <br/>
          <Row> <Col xs={12}><DisplayCard image={"images/undraw_Personal_goals_re_iow7.png"}/></Col></Row>
        </Col>
      </Row>
  </div>
  );
}
export default selection;