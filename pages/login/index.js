import React, { PureComponent } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';

import './login.scss';

export default class Login extends PureComponent {

	render() {
		return (
			<div>
				<Layout title="Login" {...this.props}>
					<Container>
						<NavMenu></NavMenu>
						<Row>
							<Col sm={6}>
								<div className="register-user-container">
									<div className="register-user-title">
										<h5>Login or Create an Account</h5>
									</div>
									<div className="register-user-content">
										<h6>New Customers</h6>
										<p>By creating an account with our store, you will be able to move through the checkout
											process faster, store multiple shipping addresses, view and track your orders in your account
											and more.
										</p>
										<div>
											<button className="register-button" title="register" type="submit">
												<span>Create an Account</span>
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
										<form className="login-form" action="" method="post">
											<div className="input-padding">
												<label htmlFor="mail">Email Address<span className="red"> *</span></label><br />
												<input id="mail" required type="text" /><br />
											</div>
											<div>
												<label htmlFor="password">Password<span className="red"> *</span></label><br />
												<input id="password" required type="password" />
											</div>
										</form>
										<div className="login-button-container">
											<button className="login-button" title="login" type="submit">
												<span>Login</span>
											</button>
											<a className="forgot-pass">Forgot your password?</a>
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