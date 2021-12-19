import Button from "../comps/Button/Button";
import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Form,FormControl, NavItem} from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const selection  = () => {
  return (
    <div>
        <h3 className="themecolortext al-center mt-2">Dashboard</h3>
      <Row>
          <Col xs={2}></Col>
        <Col xs={4}>
          <Form className="mb-2"  style={{ paddingLeft: 10, paddingRight: 0 }}>
          <h3 className="themecolortext mt-2">Breakfast</h3>
          < Form.Select className="bordercolor" aria-label="Default select example">
              <option>Select Fooditems</option>
              <option value="Apple - 4">One</option>
              <option value="Banana - 2">Two</option>
              <option value="Milk   - 3">Three</option>
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <h3 className="themecolortext mt-2">Lunch</h3>
          < Form.Select className="bordercolor" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <h3 className="themecolortext mt-2">Dinner</h3>
          < Form.Select className="bordercolor" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            
            < Form.Select className="bordercolor mt-1" aria-label="Default select example">
              <option>Select FoodTimes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <div className="al-center mt-2">
            <Button text={"Try New"} />
            </div>
          </Form>
        </Col>
        <Col xs={5} className="al-center">
        <DisplayCard image={"images/undraw_Personal_goals_re_iow7.png"}/>
        </Col>
      </Row>
  </div>
  );
}
export default selection;