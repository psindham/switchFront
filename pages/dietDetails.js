import Button from "../comps/Button/Button";
import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Table} from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const foodinfo  = () => {
  return (
    <div> 
      <Row style={{paddingLeft:10}}>
      <h3 className="themecolortext al-center mb-3 mt-3">Diet : Standard 12</h3>
         <Col>
          <Row>
            <Col>
              <DisplayCard image={"images/fullmeal.jpg"} width={50} height={300}/>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
        <Table striped  hover>
            <thead className="signupbutton">
                <tr>
                <th>Serving Size 1 Pack</th>
                <th>300 Grams</th>
                <th>Percent Daily Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Calories</td>
                <td>264</td>
                <td></td>
                </tr>
                <tr>
                <td>Calories From Fat</td>
                <td>108</td>
                <td></td>
                </tr>
                <tr>
                <td>Total Fat</td>
                <td>108</td>
                <td> 18 Percent</td>
                </tr>
                <tr>
                <td>Carbohydrates</td>
                <td>134</td>
                <td>22 Percent</td>
                </tr>
                <tr>
                <td>Dietry Fiber</td>
                <td>8</td>
                <td></td>
                </tr>
                <tr>
                <td>Protein</td>
                <td>61</td>
                <td></td>
                </tr>
            </tbody>
            </Table>
        </Col>
      </Row>
      <Row style={{paddingLeft:10}}>
          <Col></Col>
      <Col xs={7}>
      <Table striped  hover>
            <thead className="signupbutton">
                <tr>
                <th colSpan={5}>Veg Items</th>
                <th>Calories</th>
               
                </tr>
            </thead>
            <tbody>
                <tr>
                <td colSpan={5}>Rice</td>
                <td>264</td>
                
                </tr>
                <tr>
                <td colSpan={5}>Tamoto</td>
                <td>108</td>
                
                </tr>
                <tr>
                <td colSpan={5}>Kale</td>
                <td>123</td>
                
                </tr>
                <tr>
                <td colSpan={5}>cabbage</td>
                <td>12</td>
                
                </tr>
                <tr>
                <td colSpan={5}>Chillie</td>
                <td>8</td>
               
                </tr>
                <tr>
                <td colSpan={5}>Potato</td>
                <td>400</td>
                
                </tr>
            </tbody>
            </Table>
            </Col>
            <Col xs={4}className="al-center">
                <Button text={"Select"}/>
            </Col>
      </Row>
  </div>
  );
}
export default foodinfo;