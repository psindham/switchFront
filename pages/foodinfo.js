import Button from "../comps/Button/Button";
import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Table} from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const foodinfo  = () => {
  return (
    <div> 
      <Row style={{paddingLeft:10}}>
      <h3 className="themecolortext al-center">Food Info : APPLE</h3>
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
        <Col>
          <Row>
              <Col></Col>
            <Col xs={7}>
              <DisplayCard image={"images/apple1.jpg"} width={50} height={300}/>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
  </div>
  );
}
export default foodinfo;