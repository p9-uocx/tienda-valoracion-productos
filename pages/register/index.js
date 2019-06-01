import React, { PureComponent } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';


import './register.scss'

export default class Register extends PureComponent {


  constructor(props) {
    super(props);
    this.state = { password: '', confirm_password: '' };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })

    const answer = document.querySelector("[name=confirm_password]");
    answer.addEventListener("input", (event) => {
      if (answer.validity.patternMismatch) {
        answer.setCustomValidity("Passwords must match! Try again");
      } else {
        answer.setCustomValidity("");
      }
    });

  }

  render() {


    console.log("password:" + this.state.password)
    console.log("Confirm password:" + this.state.confirm_password)

    return (
      <div>
        <Layout title="Register" {...this.props}>
          <Container>
            <NavMenu></NavMenu>
            <Row>
              <Col>
                <div className="register-user-container">
                  <div className="register-user-title">
                    <h5>CREATE NEW CUSTOMER ACCOUNT</h5>
                  </div>
                  <div className="register-user-content">
                    <form className="login-form" action="" method="post">
                      <Row>
                        <Col>
                          <h6>PERSONAL INFORMATION</h6>
                          <div className="input-padding">
                            <label htmlFor="first-name">First Name<span className="red"> *</span></label><br />
                            <input id="first-name" required type="text" /><br />
                          </div>
                          <div>
                            <label htmlFor="last-name">Last Name<span className="red"> *</span></label><br />
                            <input id="last-name" required type="text" />
                          </div>
                        </Col>
                        <Col>
                          <h6>SIGN-IN INFORMATION</h6>
                          <div className="input-padding">
                            <label htmlFor="mail">Email Address<span className="red"> *</span></label><br />
                            <input id="mail" required type="text" /><br />
                          </div>
                          <div className="input-padding">
                            <label htmlFor="password">Password<span className="red"> *</span></label><br />
                            <input
                              value={this.state.password}
                              name="password"
                              type="password"
                              id="password"
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="confirm_password">Confirm Password<span className="red"> *</span></label><br />
                            <input
                              value={this.state.confirm_password}
                              name="confirm_password"
                              type="password"
                              id="confirm_password"
                              onChange={this.handleChange}
                              pattern={this.state.password}
                              required
                            />
                          </div>

                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <button className="create-button" title="login" type="submit">
                            <span>Create Account</span>
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Layout>
      </div>


    );
  }
}