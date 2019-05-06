import React, { PureComponent } from 'react';
import Nav from 'react-bootstrap/Nav';
import './navmenu.scss';


export class NavMenu extends PureComponent {

    render () {
        return (
            <Nav className="nav-text">
                <Nav.Item className="home">
                    <Nav.Link href="/">Home</Nav.Link>                    
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Bedroom Furniture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Coffe Tables</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Sofas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }

}

