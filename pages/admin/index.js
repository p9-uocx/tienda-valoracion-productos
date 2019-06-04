// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import { hydrate } from 'react-dom';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';

import { Admin, Resource } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from '@Components';
import simpleRestProvider from './rest';

import './admin.scss';

export default class Index extends PureComponent {
  // static async getInitialProps({ req }) {
  //   const res = await fetch(`${process.env.DB_API_HOST}/category/1`);
  //   const categoryData = await res.json();

  //   const apiReqReview = await fetch(`${process.env.DB_API_HOST}/review`);
  //   const reviewData = await apiReqReview.json();

  //   const categoryDataMap = categoryData.data.products.map(product => {
  //     return reviewData.data.reduce((valorAnterior, review) => {
  //       if (product.id_product === review.product_id) {
  //         return { ...product, reviews: product.reviews ? [...product.reviews, review] : [review] };
  //       } else {
  //         return { ...product, reviews: [] };
  //       }
  //     }, {});
  //   });

  //   return { api: { ...categoryData.data, products: categoryDataMap } };
  // }

  componentDidMount() {
    hydrate(
      <Admin dataProvider={simpleRestProvider(process.env.DB_API_HOST)}>
        <Resource name="user" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      </Admin>,
      document.querySelector('#admin-root'),
    );
  }

  render() {
    console.log(this.props.dataCombined);
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
        <main id="admin-root" />
      </Fragment>
    );
  }
}
