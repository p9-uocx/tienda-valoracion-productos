import React, { PureComponent } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '@Components';
import { NavMenu } from '@Components';

import './login.scss';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  fetchUsers = () => fetch(`${process.env.DB_API_HOST}/user`).then(results => results.json());

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.fetchUsers().then(usersData => {
      usersData.data.map(user => {
        if (email === user.email && password === user.password) {
          const { id_user, first_name, last_name, gender, rol } = user;

          window.localStorage.user = JSON.stringify({
            id_user,
            first_name,
            last_name,
            gender,
            rol,
          });
          if (user.rol === 1) {
            Router.push('/admin');
          } else {
            Router.push('/');
          }
        }
      });
    });
  };

  render() {
    return (
      <div>
        <Layout title="Login" {...this.props}>
          <Container>
            <NavMenu />
            <Row>
              <Col sm={6}>
                <div className="register-user-container">
                  <div className="register-user-title">
                    <h5>Login or Create an Account</h5>
                  </div>
                  <div className="register-user-content">
                    <h6>New Customers</h6>
                    <p>
                      By creating an account with our store, you will be able to move through the
                      checkout process faster, store multiple shipping addresses, view and track
                      your orders in your account and more.
                    </p>
                    <div>
                      <button className="register-button" title="register" type="submit">
                        <span className="no-link">
                          <Link href="/register">Create an Account</Link>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="login-user-container">
                  <div className="login-user-content">
                    <h6>Registered Customers</h6>
                    <p>If you have an account with us, please log in</p>
                    <form id="login-form" className="login-form" onSubmit={this.handleSubmit}>
                      <div className="input-padding">
                        <label htmlFor="mail">
                          Email Address<span className="red"> *</span>
                        </label>
                        <br />
                        <input
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="login-input"
                          id="email"
                          required
                          type="text"
                        />
                        <br />
                      </div>
                      <div>
                        <label htmlFor="password">
                          Password<span className="red"> *</span>
                        </label>
                        <br />
                        <input
                          value={this.state.password}
                          onChange={this.handleChange}
                          className="login-input"
                          id="password"
                          required
                          type="password"
                        />
                      </div>
                    </form>
                      <div className="login-button-container">
                        <button form="login-form" className="login-button" title="login" type="submit">
                          <span>Login</span>
                        </button>
                      </div>
                    <span className="red">* Required Fields</span>
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
