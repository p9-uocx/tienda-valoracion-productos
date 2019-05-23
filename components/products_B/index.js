import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


export class ProductsB extends PureComponent {

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

		const { rating5 } = this.state;
		const { rating6 } = this.state;
		const { rating7 } = this.state;
		const { rating8 } = this.state;

		return (
			<section id="product-section">
				<Row>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/3_4.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate5"
								starCount={5}
								value={rating5}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/4_1_1.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate6"
								starCount={5}
								value={rating6}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div>
							<Image src="/static/img/products/7_1_1.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate7"
								starCount={5}
								value={rating7}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href=""><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col sm={3}>
						<div>
							<Image src="/static/img/products/8_1_1.jpg" alt="product 1" fluid />
						</div>
						<div className="price-box">
							<span className="price-label">$189.00</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate8"
								starCount={5}
								value={rating8}
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