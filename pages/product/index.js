import React, { PureComponent } from 'react';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';
import StarRatingComponent from 'react-star-rating-component';

import './product.scss';

export default class Product extends PureComponent {

	constructor() {
		super();

		this.state = {
			imgUrl: '/static/img/products/2_4.jpg',
			title: 'Wonderful Furniture Rustic Amp',
			rating: 3,
			numReviews: 3
		};
	}

	render() {

		const { rating } = this.state;

		return (
			<div>
				<Layout title="Login" {...this.props}>
					<Container>
						<NavMenu></NavMenu>
						<Row className="row-padding-top">
							{/* Image Column*/}
							<Col>
								<Image fluid src={this.state.imgUrl}></Image>
							</Col>
							{/* Product Details Column*/}
							<Col className="col-padding">
								<p>{this.state.title}</p>
								<div className="reviews-info">
									<StarRatingComponent
										name="rate1"
										starCount={5}
										value={rating}
										emptyStarColor={'#CCCCCC'} />
									<span>{this.state.numReviews} reviews</span>
									<span>|</span>
									<span>Add your review</span>
								</div>
								<div className="price-box product-price-box">
									<span className="old-price-label old-product-price">$280.00</span>
									<span className="price-label product-price-label">$189.00</span>
								</div>
							</Col>
						</Row>
					</Container>
				</Layout>
			</div>
		);
	}
}