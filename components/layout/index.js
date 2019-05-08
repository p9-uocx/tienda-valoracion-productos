import React, { PureComponent } from 'react';
import Head from 'next/head';
import { string } from 'prop-types';

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
            crossorigin="anonymous"
          />
          <link rel="stylesheet" type="text/css" href="/static/flaticon-font/flaticon.css" />
          <script defer src="/static/fontawesome/js/all.js"></script>
        </Head>
        <header>
          <div className="header_container container">
            <div>
              <img id="logo" src="/static/img/header/logo2.png" />
              <div className="account_container">
                <div className="account_icon">
                  <div className="account_icon">
                    <span className="fas fa-user icons"></span>
                  </div>
                  <div className="account_icon">
                    <div className="text-account text-bold">Account</div>
                    <div className="text-account">Hello! Sign in</div>
                  </div>
                </div>
                <div className="account_icon">
                  <div className="account_icon">
                    <span className="fas fa-shopping-basket icons"></span>
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
        
        <footer>
          <span>Aqui el footer</span>
        </footer>
      </div>
    );
  }
}
