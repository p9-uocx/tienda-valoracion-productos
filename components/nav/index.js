import React, { PureComponent } from 'react';
import Nav from 'react-bootstrap/Nav';

import './navmenu.scss';


export class NavMenu extends PureComponent {

	render() {
		return (
			<Nav className="nav-text">
				<Nav.Item className="home">
					<Nav.Link href="/"><i className="fa fa-bars" id="icon-home" aria-hidden="true"></i>Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/bedroom">Bedroom Furniture</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/coffe_tables">Coffe Tables</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/sofas">Sofas</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/">Contact</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}

}

