import React, { PureComponent } from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faAngleDown);



import './navmenu.scss';


export class NavMenu extends PureComponent {

    render () {
        return (
            <Nav className="nav-text">
                <Nav.Item className="home">
                <Nav.Link href="/"><FontAwesomeIcon id="icon-home" icon='bars'/>Home</Nav.Link>                    
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Bedroom Furniture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Coffe Tables<FontAwesomeIcon id="icon-angle-down" icon='angle-down'/></Nav.Link>
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

