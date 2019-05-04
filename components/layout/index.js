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

  static defailt;

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="static/normalize.css" />
        </Head>
        <header>
          <div className="logo container">
            <img src="/static/img/logo.jpg" />
          </div>
        </header>
        <main>{this.props.children}</main>
        <footer className="container">
          <span>Aqui el footer</span>
        </footer>
      </div>
    );
  }
}
