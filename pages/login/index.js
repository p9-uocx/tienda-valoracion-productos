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
										<div className="primary">
											<button className="register-button" title="register" type="submit">
												<span>Create an Account</span>
											</button>
										</div>
									</div>
								</div>
							</Col>
							<Col sm={6}>

							</Col>
						</Row>
					</Container>
				</Layout>
			</div>
		);
	}
}