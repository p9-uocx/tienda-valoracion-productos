// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';

import { ListProduct, ListCategory, ListReview, ListUser } from '@Components';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
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
    modal: '',
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

        <AppBar position="fixed" className="app-admin-bar">
          <Toolbar className="menu">
            <Grid container container direction="row" justify="space-between">
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="h4">Admin Page</Typography>
              <div>
                <IconButton edge="end" color="inherit">
                  <PowerSettingsNew />
                  <Button color="inherit">Logout</Button>
                </IconButton>
              </div>
            </Grid>

          </Toolbar>
        </AppBar>

        {/* <Drawer variant="permanent" open={false}>
          asdasda
        </Drawer> */}

        <main className="admin-main">
          <Container>
            <div>
              <Link href={{ pathname: '/admin', query: { service: 'user', action: 'list' } }}>
                <a>Usuarios</a>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'product', action: 'list' } }}>
                <a>Productos</a>
              </Link>
              <Link href={{ pathname: '/admin', query: { service: 'category', action: 'list' } }}>
                <a>Categorias</a>
              </Link>
            </div>
            <div>
              <ListUser></ListUser>
            </div>
          </Container>
        </main>
        <Modal open={false}>
          <ListReview />
        </Modal>
      </Fragment>
    );
  }
}
