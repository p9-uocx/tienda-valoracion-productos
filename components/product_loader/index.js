import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';

import './product_loader.scss';

class Product extends PureComponent {
	render() {

		const { reviews, price, img_url, title, id_product } = this.props.data;

		const reviewsTotalValue = reviews.reduce((value, review) => {
			return value + review.rating;
		}, 0)
		const reviewsValue = reviewsTotalValue / reviews.length

		return (
			<Col className="border-right-product" sm={3}>
				<div className="cursor-pointer">
					<Link as={`/product`} href={{ pathname: '/product', query: { product: id_product } }}>
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
					<span className="reviews_info">{reviews.length} review(s)</span>
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

		let id_category = { id_category: this.props.data.id_category }

		return (

			<section id="product-section">
				<Row>
					{this.props.data.products.map(product => {
						return <Product key={product.id_product} data={product} {...id_category} />
					})}
				</Row>
			</section>
		);
	}
}