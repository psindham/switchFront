import Button from "../comps/Button/Button";
import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Table} from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import  localstorage  from "local-storage";
import { useState,useEffect } from "react";

const foodinfo  = () => {
const [name, setName] = useState('');
const [Calcium, setCalcium] = useState('');
const [Calories, setCalories] = useState('');
const [TotalCarbohydrates, setTotalCarbohydrates] = useState('');
const [DietaryFiber, setDietaryFiber] = useState('');
const [Sugars, setSugars] = useState('');
const [Cholesterol, setCholesterol] = useState('');
const [Iron, setIron] = useState('');
const [Potassium, setPotassium] = useState('');
const [Protein, setProtein] = useState('');
const [Sodium, setSodium] = useState('');
const [VitaminA, setVitaminA] = useState('');
const [VitaminC, setVitaminC] = useState('');
const [TotalFat, setTotalFat] = useState('');
const [SaturatedFat, setSaturatedFat] = useState('');
const [TransFat, setTransFat] = useState('');
const [PolyunsaturatedFat, setPolyunsaturatedFat] = useState('');
const [MonounsaturatedFat, setMonounsaturatedFat] = useState('');
const [image,setImage] =useState('');

useEffect(() => {
  var fooditem;
    fooditem = JSON.parse(JSON.parse(localstorage.get('fooditem')));
    console.log(fooditem);
     setName(fooditem._id);
     setCalcium(fooditem.Calcium);
     setCalories(fooditem.Calories);
     setTotalCarbohydrates(fooditem.Carbohydrates.TotalCarbohydrates);
      setSugars(fooditem.Carbohydrates.Sugars);
      setDietaryFiber(fooditem.Carbohydrates.DietaryFiber);
     setCholesterol(fooditem.Cholesterol);
     setIron(fooditem.Iron);
     setPotassium(fooditem.Potassium);
     setProtein(fooditem.Protein);
     setSodium(fooditem.Sodium);
     setVitaminA(fooditem.VitaminA);
     setVitaminC(fooditem.VitaminC);
     setTotalFat(fooditem.fat.TotalFat);
     setSaturatedFat(fooditem.fat.SaturatedFat);
     setTransFat(fooditem.fat.TransFat);
     setMonounsaturatedFat(fooditem.fat.MonounsaturatedFat);
     setPolyunsaturatedFat(fooditem.fat.PolyunsaturatedFat);

}, []);



  return (
    <div> 
      <Row style={{paddingLeft:10}}>
      <h3 className="themecolortext al-center">Food Info : {name}</h3>
        <Col xs={6}>
        <Table striped  hover>
            <thead className="signupbutton">
                <tr>
                <th>Nutrients</th>
                <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Calories</td>
                <td>{Calories}</td>
                </tr>
                <tr>
                <td>Calcium</td>
                <td>{Calcium}</td>
                </tr>
                <tr>
                <td>Protein</td>
                <td>{Protein}</td>
                </tr>
                <tr>
                <td>Cholesterol</td>
                <td>{Cholesterol}</td>
                </tr>
                <tr>
                <td>Iron</td>
                <td>{Iron}</td>
                </tr>
                <tr>
                <td>Potassium</td>
                <td>{Potassium}</td>
                </tr>
                <tr>
                <td>Sodium</td>
                <td>{Sodium}</td>
                </tr>
                <tr>
                <td>VitaminA</td>
                <td>{VitaminA}</td>
                </tr>
                <tr>
                <td>VitaminC</td>
                <td>{VitaminC}</td>
                </tr>
                <tr colSpan={2} className="al-center themecolortext">Carbohydrates</tr>
                <tr>
                <td>TotalCarbohydrates</td>
                <td>{TotalCarbohydrates}</td>
                </tr>
                <tr>
                <td>Sugars</td>
                <td>{Sugars}</td>
                </tr>
                <tr>
                <td>Dietry Fiber</td>
                <td>{DietaryFiber}</td>
                </tr>
                <tr>
                <td colSpan={2} className="al-center themecolortext">FATS</td>
                </tr>
                <tr>
                <td>TotalFat</td>
                <td>{TotalFat}</td>
                </tr>
                <tr>
                <td>SaturatedFat</td>
                <td>{SaturatedFat}</td>
                </tr>
                <tr>
                <td>TransFat</td>
                <td>{TransFat}</td>
                </tr>
                <tr>
                <td>MonounsaturatedFat</td>
                <td>{MonounsaturatedFat}</td>
                </tr>
                <tr>
                <td>PolyunsaturatedFat</td>
                <td>{PolyunsaturatedFat}</td>
                </tr>
            </tbody>
            </Table>
        </Col>
        <Col>
          <Row>
              <Col></Col>
            <Col xs={7}>
              <DisplayCard image={'https://switchfood.herokuapp.com/images/'+name+'.jpg'} width={50} height={300} position='fixed'/>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
  </div>
  );
}
export default foodinfo;