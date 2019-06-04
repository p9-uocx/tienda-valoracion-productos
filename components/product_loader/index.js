import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


import './product_loader.scss';

class Product extends PureComponent {
	render() {

		console.log (this.props.data)

		const { reviews, price, img_url, title } = this.props.data;

		const reviewsTotalValue = reviews.reduce((value, review) => {
			return value + review.rating;
		}, 0)
		const reviewsValue = reviewsTotalValue / reviews.length

		return (
			<Col className="border-right-product" sm={3}>
				<div className="cursor-pointer">
					<Link href={`/product?id_product=${2}`}>
						<Image src={img_url} alt="product 1" fluid />
					</Link>
				</div>
				<div className="price-box">
					<span className="price-label">${price}</span>
					<span className="old-price-label">$280.00</span>
				</div>
				<div className="rating-container">
					<StarRatingComponent
						name="rate1"
						starCount={5}
						value={reviewsValue}
						emptyStarColor={'#CCCCCC'}
					/>
				</div>
				<Link href="/product">
					<a>{title}</a>
				</Link>
			</Col>
		)
	}
}


export class ProductLoader extends PureComponent {
	render() {

			//console.log(this.props.data);

		return (
			<section id="product-section">
				<Row>
					{this.props.data.products.map(product => {
						return  <Product key ={product.id_product} data={product} />
					})}
				</Row>
			</section>
		);
	}
}