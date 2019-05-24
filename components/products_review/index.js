import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatingComponent from 'react-star-rating-component';

import './products_review.scss'

export class ProductsReview extends PureComponent {

	constructor() {
		super();

		this.state = {
			imgUrl: '/static/img/products/2_4.jpg',
			title: 'Wonderful Furniture Rustic Amp',
			rating: 3,
			numReviews: 3,
			contentReview: 'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.',
			user: 'Tuyen Le',
			fechaReview: '12/4/19'
		};
	}

	render() {
		return (
			<div className="reviews-container">
				<Row>
					<div className="block-title">
						<strong>Customer Reviews</strong>
					</div>
				</Row>
				<Row className="review-content">
					<Col sm={4}>
						{this.state.title}
						<div className="rating-container">
							<StarRatingComponent
								name="rate1"
								starCount={5}
								value={this.state.rating}
								emptyStarColor={'#CCCCCC'}
							/>
						</div>
					</Col>
					<Col sm={8}>
						{this.state.contentReview}
						<div className="review-details">
							<span>Review by <strong>{this.state.user}</strong></span>
							<p>Posted on {this.state.fechaReview}</p>
						</div>
					</Col>
				</Row>

				{/* CONDITIONAL REVIEW - Solo debe verse si el usuario está logeado */}

				<Row>
					<div className="user-review-intro">
						<span>You're Reviewing:</span>
						<p><strong>{this.state.title}</strong></p>
					</div>
				</Row>
				<Row>
					<div className="user-review-rating">
						<span>Your Rating <span>*</span></span>
					</div>
				</Row>
				<Row>
					<div className="rating-container">
						<StarRatingComponent
							name="rate1"
							starCount={5}
							value={0}
							emptyStarColor={'#CCCCCC'}
						/>
					</div>

				</Row>

			</div>

		);
	}
}