// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import { ListProduct, ListCategory, ListReview, FetchAdmin, AdminWelcome, Auth } from '@Components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Category from '@material-ui/icons/Category';
import Dashboard from '@material-ui/icons/Dashboard';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import './admin.scss';

const listServiceSelector = {
  product: ListProduct,
  category: ListCategory,
  user: ListCategory,
  review: ListCategory,
};

const modalServiceSelector = {
  product: ListProduct,
  category: ListCategory,
  user: ListCategory,
  review: ListCategory,
};

class Admin extends PureComponent {
  state = {
    menu: true,
  };

  handleLogout = () => {
    window.localStorage.removeItem('user');
    Router.push('/login');
  };

  openMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    const {
      url: { query },
    } = this.props;
    const { modal } = this.state;
    const ListService = listServiceSelector[query.service];
    const ModalService = modalServiceSelector[modal];

    function Welcome() {
      if (typeof query.service === 'undefined') {
        return <AdminWelcome />;
      } else {
        return <FetchAdmin query={query} />;
      }
    }

    return (
      <Fragment>
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

        <section className="admin-container">
          <nav className={classNames('nav-contanier', { open: this.state.menu })}>
            <Grid container direction="column" justify="flex-start" alignItems="stretch">
              <Link href={{ pathname: '/admin', query: { service: 'user' } }}>
                <Button color="primary" className="link-menu" onClick={this.openMenu}>
                  <AccountCircle className="padding-right-icon" />
                  Usuarios
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'product' } }}>
                <Button color="primary" className="link-menu" onClick={this.openMenu}>
                  <Dashboard className="padding-right-icon" />
                  Productos
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'category' } }}>
                <Button color="primary" className="link-menu" onClick={this.openMenu}>
                  <Category className="padding-right-icon" />
                  Categorias
                </Button>
              </Link>              
            </Grid>
          </nav>

          <header className="header-contanier">
            <Toolbar>
              <Grid container container direction="row" justify="space-between">
                <IconButton onClick={this.openMenu}>
                  <MenuIcon className="fill-white" />
                </IconButton>
                <Typography className="color-white" variant="h4">
                  Admin Page
                </Typography>
                <IconButton>
                  <PowerSettingsNew className="fill-white" />
                  <span className="color-white logout" onClick={this.handleLogout}>
                    LOGOUT
                  </span>
                </IconButton>
              </Grid>
            </Toolbar>
          </header>

          <main className="main-container">
            <Welcome />
          </main>
        </section>

        <div className="footer-div">
          <Container>
            <span>
              Copyright © 2019 Expert Inc. Developed with <span className="red">&#10084;</span> by
              JASE Team.
            </span>
            <Image fluid id="logo-footer" src="/static/img/header/logo2-1.png" />
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Auth('admin')(Admin);
