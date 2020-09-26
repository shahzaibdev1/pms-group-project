import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { TextFieldGroup } from "../common/TextFieldGroup";

class Register extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card
            className="col-xs-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2"
            bg="dark"
            style={{ borderRadius: "30px" }}
          >
            <div className="my-4"></div>
            <Form>
              <Row>
                <Col lg>
                  <TextFieldGroup
                    labelStyle={{
                      top: "-10px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="firstname"
                    placeholder="First Name"
                    icon="fa-user-circle"
                    labelText="First Name"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    labelStyle={{
                      top: "52px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="surname"
                    placeholder="Surname"
                    icon="fa-user-circle"
                    labelText="Surname"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    labelStyle={{
                      top: "114px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="email"
                    placeholder="Email"
                    icon="fa-at"
                    labelText="Email"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    labelStyle={{
                      top: "176px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="password"
                    placeholder="Password"
                    icon="fa-lock"
                    labelText="Password"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    labelStyle={{
                      top: "238px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="password"
                    placeholder="Confirm Password"
                    icon="fa-lock"
                    labelText="Confirm"
                    className="mb-4"
                  />
                </Col>

                <Col>
                  <TextFieldGroup
                    labelStyle={{
                      top: "-10px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="username"
                    placeholder="Username"
                    icon="fa-user-circle"
                    labelText="Username"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    inputStyle={{ borderRadius: "10px" }}
                    name="birthday"
                    placeholder="birthday"
                    icon="fa-calendar-alt"
                    labelText="Calendar"
                    className="mb-4"
                  />

                  <fieldset>
                    <Form.Group as={Row}>
                      <Col sm={10} className="text-light">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="formHorizontalRadios"
                        />

                        <Form.Check
                          type="radio"
                          label="Female"
                          name="formHorizontalRadios"
                        />

                        <Form.Check
                          type="radio"
                          label="Other"
                          name="formHorizontalRadios"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
              <div className="my-3">
                <Button
                  type="submit"
                  className="bg-gold text-light border-0 rounded-pill col-sm-4 offset-sm-4"
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;
