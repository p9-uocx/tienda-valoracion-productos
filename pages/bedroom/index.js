import React, { PureComponent } from 'react';

import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';
import { BedroomFurniture } from '@Components';
import { ProductsB } from '@Components';

export default class BedroomFurniturePage extends PureComponent {

	static async getInitialProps({ req }) {
		const res = await fetch(`${process.env.DB_API_HOST}/category/1`);
		const categoryData = await res.json();

		const apiReqProduct = await fetch(`${process.env.DB_API_HOST}/product`);
		const productData = await apiReqProduct.json();

		const apiReqReview = await fetch(`${process.env.DB_API_HOST}/review`);
		const reviewData = await apiReqReview.json();

		const dataCombined = {
			category: categoryData.data,
			product: productData.data,
			review: reviewData.data
		};

		return { datosServidor: dataCombined }


	}


	render() {

		console.log(this.props.datosServidor)

		return (
			<Layout>
				<Container>
					<NavMenu></NavMenu>
					{/* Deal Section */}
					<section className="deal-title">
						<Row>
							<Col sm="auto">
								<div>
									<h4>Bedroom Furniture</h4>
								</div>
							</Col>
							<Col id="hr">
								<hr />
							</Col>
						</Row>
					</section>
					<BedroomFurniture data={this.props.datosServidor}></BedroomFurniture>

				</Container>
			</Layout>
		);
	}
}