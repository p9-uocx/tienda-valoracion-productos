import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


export class ProductsA extends PureComponent {

	constructor() {
		super();

		this.state = {
			rating: 0
		};
	}

	onStarClick(nextValue, prevValue, name) {
		console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
		this.setState({ rating: nextValue });
	}

	render() {

		const { rating1 } = this.state;
		const { rating2 } = this.state;
		const { rating3 } = this.state;
		const { rating4 } = this.state;
		const { rating5 } = this.state;
		const { rating6 } = this.state;
		const { rating7 } = this.state;
		const { rating8 } = this.state;

		return (
			<section id="product-section">
				<Row>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate1"
								starCount={5}
								value={rating1}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/5_5.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate2"
								starCount={5}
								value={rating2}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/6_2.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate3"
								starCount={5}
								value={rating3}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col sm={3}>
						<div>
							<Image src="/static/img/products/9_4.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate4"
								starCount={5}
								value={rating4}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
				</Row>
			</section>
		);
	}

}