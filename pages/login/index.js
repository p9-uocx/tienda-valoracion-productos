import React, { PureComponent } from 'react';
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
			email: "",
			password: "",
			usersData: {}
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	componentDidMount() {
		fetch(`${process.env.DB_API_HOST}/user`)
			.then(results => {
				return results.json()
			})
			.then(data => {
				this.setState({ usersData: data.data })
				console.log(this.state.usersData)
			});
	}


	handleSubmit = event => {
		event.preventDefault();		
		this.state.usersData.map(user => {
			if (this.state.email === user.email && this.state.password === user.password) {
				
				//Tendras que meter algo más que un alert aqui.. xDD. 
				
				alert ("OK");
			}
		})

	}

	render() {
		console.log("email" + this.state.email);
		console.log("pass" + this.state.password);

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
												<span className="no-link"><Link href="/register">Create an Account</Link></span>
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
										<form className="login-form" onSubmit={this.handleSubmit}>
											<div className="input-padding">
												<label htmlFor="mail">Email Address<span className="red"> *</span></label><br />
												<input
													value={this.state.email}
													onChange={this.handleChange}
													className="login-input"
													id="email"
													required
													type="text" /><br />
											</div>
											<div>
												<label htmlFor="password">Password<span className="red"> *</span></label><br />
												<input
													value={this.state.password}
													onChange={this.handleChange}
													className="login-input"
													id="password"
													required
													type="password" />
											</div>
											<div className="login-button-container">
												<button className="login-button" title="login" type="submit">
													<span>Login</span>
												</button>
											</div>
										</form>
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