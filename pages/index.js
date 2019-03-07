import React, { PureComponent } from 'react';

import './index.scss';

export default class Home extends PureComponent {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div>
        <p>Welcome to next.js!</p>
        {this.props.userAgent}
      </div>
    );
  }
}
