// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';

import { ListProduct, ListCategory, ListReview, FetchAdmin } from '@Components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

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

export default class Admin extends PureComponent {
  state = {
    menu: true,
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
                <Button color="primary" className="link-menu">
                  Usuarios
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'product' } }}>
                <Button color="primary" className="link-menu">
                  Productos
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'category' } }}>
                <Button color="primary" className="link-menu">
                  Categorias
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'category' } }}>
                <Button color="primary" className="link-menu">
                  Roles
                </Button>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'category' } }}>
                <Button color="primary" className="link-menu">
                  Reviews
                </Button>
              </Link>
            </Grid>
          </nav>

          <header className="header-contanier">
            <Toolbar>
              <Grid container container direction="row" justify="space-between">
                <IconButton color="inherit" onClick={this.openMenu}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h3">News</Typography>

                <IconButton color="inherit">
                  <PowerSettingsNew />
                </IconButton>
              </Grid>
            </Toolbar>
          </header>

          <main className="main-container">
            <FetchAdmin query={query} />
          </main>

          <footer className="footer-container">asd</footer>
        </section>
      </Fragment>
    );
  }
}
