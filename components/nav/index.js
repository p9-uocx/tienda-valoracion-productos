import React, { PureComponent } from 'react';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

import './navmenu.scss';

export class NavMenu extends PureComponent {
  render() {
    return (
      <Nav className="nav-text">
        <Nav.Item className="home">
          <Link href="/">
            <Nav.Link href="/">
              <i className="fa fa-bars" id="icon-home" aria-hidden="true" />
              Home
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/bedroom">
            <Nav.Link href="/bedroom">Bedroom Furniture</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/coffe_tables">
            <Nav.Link href="/coffe_tables">Coffe Tables</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/sofas">
            <Nav.Link href="/sofas">Sofas</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}
