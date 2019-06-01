import React, { PureComponent } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';
import { Form, InputGroup } from "react-html5-form";

import './register.scss'

export default class Register extends PureComponent {


  constructor(props) {
    super(props);
    this.state = { password: '', confirm_password: '' };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })

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
                    <Row>
                      <Col>
                        <h6>PERSONAL INFORMATION</h6>
                        <form className="login-form" action="" method="post">
                          <div className="input-padding">
                            <label htmlFor="first-name">First Name<span className="red"> *</span></label><br />
                            <input id="first-name" required type="text" /><br />
                          </div>
                          <div>
                            <label htmlFor="last-name">Last Name<span className="red"> *</span></label><br />
                            <input id="last-name" required type="text" />
                          </div>
                        </form>
                      </Col>

                      <Col>
                        <h6>SIGN-IN INFORMATION</h6>
                        <form className="login-form" action="" method="post">
                          <div className="input-padding">
                            <label htmlFor="mail">Email Address<span className="red"> *</span></label><br />
                            <input id="mail" required type="text" /><br />
                          </div>

                          <div>
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

                          <button className="login-button" title="login" type="submit">
                            <span>Login</span>
                          </button>
                        </form>

                      </Col>
                    </Row>
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