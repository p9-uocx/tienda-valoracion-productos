// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';

import {} from '@Components';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

import './admin.scss';

export default class Admin extends PureComponent {
  render() {
    console.log(this.props.url.query.service);
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

        <AppBar position="fixed">
          <Toolbar className="menu">
            <Grid container container direction="row" justify="space-between">
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="h3">News</Typography>
              <Button color="inherit">Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* <Drawer variant="permanent" open={false}>
          asdasda
        </Drawer> */}

        <main className="admin-main">
          <Container>
            <Link as={`/admin/user`} href={{ pathname: '/admin', query: { service: 'user' } }}>
              aqui
            </Link>
          </Container>
        </main>
      </Fragment>
    );
  }
}
