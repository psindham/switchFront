import { Col, Form, Row } from "react-bootstrap";
import CustButton from "../comps/CustButton/CustButton";
import undrawReg from "../comps/svg/register.svg";
import CustInput from "../comps/CustInput/CustInput";
//import DatePicker from "react-date-picker";
import Datetime from "react-datetime";
import { useState } from "react";

const EditProfile = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="u-clearfix u-section-1" id="sec-4b2d">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-text u-text-1">Edit Profile</h2>
        <Row className="text-center ">
          <Col md="6">
            <Form>
              <CustInput 
                label={"Email Address"}
                placeholder={"Enter Your Email Address"}
                typeInput={"email"}
              />
              <CustInput
                label={"Name"}
                placeholder={"Enter Your Email Address"}
                typeInput={"email"}
              />
              <Datetime className="bordercolor mt-2" timeFormat={false}/>
              <Form.Select className="bordercolor mt-2" aria-label="Gender">
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Select>
              <Form.Select className="bordercolor mt-2" aria-label="Gender">
                <option>Country</option>
                <option value="Male">India</option>
                <option value="Female">Canda</option>
                <option value="Others">China</option>
              </Form.Select>
              <CustInput
                label={"Food Preference"}
                placeholder={"Enter Your Food Preference"}
                typeInput={"email"}
              />
              
              <CustInput xs={1} label={"Height"} typeInput={"number"} />
              <CustInput md={2} label={"Weight"} typeInput={"number"} />

              <CustInput label={"Password"} typeInput={"password"} />
              <Row className="mt-2">
                <Col>
                  <CustButton val="Edit" />
                </Col>
                <Col>
              <CustButton val="Update" />
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

export default EditProfile;
