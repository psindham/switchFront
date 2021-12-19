import Button from "../comps/Button/Button";
import DisplayCard from "../comps/DisplayCard/Card"
import UDinput from "../comps/input";
import {Form,FormControl, NavItem} from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const selection  = () => {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <Form className="mb-2 mt-5 "  style={{ paddingLeft: 10, paddingRight: 0 }}>
          <h3 className="themecolortext al-center">Want to follow standard Diet?</h3>
          < Form.Select className="bordercolor" aria-label="Default select example">
              <option>Select Diet</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <br/>
            <br/>
            <Form.Group  controlId="selected">
              <br/>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  <Form.Control className="bordercolor" type="text" placeholder="Selected Diet" />
                </Col>
                <Col xs={2}>
                <Button text={"View"} />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
        <Col>
        <DisplayCard image={"images/undraw_selection_re_ycpo.png"}/>
        </Col>
      </Row>
      <div className="al-center themecolortext"><h1>OR</h1></div>
      <Row>
        <Col>
          <Row>
            <Col>
              <DisplayCard image={"images/undraw_Create_re_57a3.png"}/>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col xs={7}>
              <Form className="mb-2">
              <h3 className="themecolortext al-center">Want to Create your diet?</h3>
                <Form.Group className="mt-4" controlId="selected">
                      <Form.Control className="bordercolor" type="text" placeholder="Enter Calories" />
                </Form.Group>
                <Form.Group  className="mt-2" controlId="selected">
                      <Form.Control className="bordercolor" type="text" placeholder="Enter Protein" />
                </Form.Group>
                <Form.Group className="mt-2"  controlId="selected">
                      <Form.Control className="bordercolor" type="text" placeholder="Enter Carbs" />
                </Form.Group>
                <br/>
                <Form.Group  controlId="form">
                  <Row>
                <Col></Col>
                    <Col xs={7}>
                    <Button text={"View"} />
                    </Col>
                    </Row>
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>

  </div>
  );
}
export default selection;