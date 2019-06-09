import React, { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';
import { ProductLoader } from '@Components';

import './sofas.scss'

export default class SofasPage extends PureComponent {

	static async getInitialProps({ req }) {
    const res = await fetch(`${process.env.DB_API_HOST}/category/5`);
    const categoryData = await res.json();

    const apiReqReview = await fetch(`${process.env.DB_API_HOST}/review`);
    const reviewData = await apiReqReview.json();

    const categoryDataMap = categoryData.data.products.map(product => {
      return {
        ...product,
        reviews: reviewData.data.reduce(
          (array, review) => (product.id_product == review.product_id ? [...array, review] : array),
          [],
        ),
      };
    });

    return { api: { ...categoryData.data, products: categoryDataMap } };
  }

	render() {

		console.log(this.props.api)		

		return (
			<Layout title="Sofas" {...this.props}>
				<Container>
					<NavMenu></NavMenu>
					{/* Deal Section */}
					<section className="deal-title">
						<Row>
							<Col sm="auto">
								<div>
									<h4>Sofas</h4>
								</div>
							</Col>
							<Col id="hr">
								<hr />
							</Col>
						</Row>
					</section>
					<ProductLoader data={this.props.api}></ProductLoader>

				</Container>
			</Layout>
		);
	}
}