import React, { PureComponent } from 'react';
import Head from 'next/head';
import { string } from 'prop-types';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

import './layout.scss';

export class Layout extends PureComponent {
  static propTypes = {
    title: string,
  };

  static defaultProps = {
    title: 'Tienda Online',
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/fontawesome/css/all.css" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/static/img/favicon.png" sizes="64x64" />
          <link rel="stylesheet" type="text/css" href="/static/flaticon-font/flaticon.css" />
          <script defer src="/static/fontawesome/js/all.js" />
        </Head>
        <style jsx global>{`
          *:focus {
            outline: 0 !important;
          }
        `}</style>
        <header>
          <div className="header_container container">
            <div>
              <img id="logo" src="/static/img/header/logo2.png" />
              <div className="account_container">
                <Link href="/login">
                  <div className="account_icon">
                    <div className="account_icon">
                      <span className="fas fa-user icons" />
                    </div>
                    <div className="account_icon">
                      <div className="text-account text-bold">Account</div>
                      <div className="text-account">Hello! Sign in</div>
                    </div>
                  </div>
                </Link>
                <div className="account_icon">
                  <div className="account_icon">
                    <span className="fas fa-shopping-basket icons" />
                  </div>
                  <div className="account_icon">
                    <div className="text-account text-bold">Cart</div>
                    <div className="text-account">0.00 €</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{this.props.children}</main>

        <section className="footer-container">
          <Container>
            <Row>
              <Col sm={4}>
                <h4 className="h4-padding-bottom">Contact Details</h4>
                <ul className="contact-details no-padding">
                  <li>
                    <i className="fa fa-map-marker contact-icon" />
                    <span className="contact-content">
                      45 Grand Central Terminal NewYork
                      <br />
                      NY 017 United States USA
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-phone contact-icon" />
                    <span className="contact-content">+(123) 456 789 - (+204) 666 888</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope contact-icon" />
                    <span className="contact-content">contact@expert.com</span>
                  </li>
                  <li>
                    <i className="fa fa-clock contact-icon" />
                    <span className="contact-content">Mon-Sat 9:00am - 5:00pm Sun:Closed</span>
                  </li>
                </ul>
              </Col>
              <Col className="about-padding-left" sm={4}>
                <h4 className="h4-padding-bottom">About Us</h4>
                <ul className="about-details no-padding">
                  <li>Our Blog</li>
                  <li>About our Shop</li>
                  <li>Secure Shopping</li>
                  <li>Delivery Information</li>
                  <li>Store Locations</li>
                </ul>
              </Col>
              <Col sm={4}>
                <h4 className="h4-padding-bottom">SUBSCRIBE OUR NEWSLETTER</h4>
                <div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      id="newsletter"
                      className="input-text"
                      placeholder="Enter your email"
                      data-validate="{required:true, 'validate-email':true}"
                    />
                  </div>
                  <div>
                    <button className="subscribe-button" title="Subscribe" type="submit">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <footer>
          <Container>
            <span>
              Copyright © 2019 Expert Inc. Developed with <span className="red">&#10084;</span> by
              JASE Team.
            </span>
            <Image fluid id="logo-footer" src="/static/img/header/logo2-1.png" />
          </Container>
        </footer>
      </div>
    );
  }
}
