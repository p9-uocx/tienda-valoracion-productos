// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, useEffect } from 'react';
import Router from 'next/router';

const permision = {
  admin: 1,
};

export const Auth = roleType => WrappedComponent => {
  return class Auth extends PureComponent {
    static displayName = `Auth${WrappedComponent.name}`;

    componentDidMount() {
      const userSession = window.localStorage.user;
      if (userSession) {
        const parseUser = JSON.parse(userSession);
        if (parseUser.rol !== permision[roleType]) {
          Router.push('/login');
        }
      } else {
        Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
