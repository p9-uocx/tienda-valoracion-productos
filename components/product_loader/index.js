import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


import './product_loader.scss';

export class ProductLoader extends PureComponent {
	render() {
		return (
			<section id="product-section">

				<Row>
					{this.props.data.category.products.map((value, index) => {

						//console.log(this.props.data.category.products[index].price)

						return (
							<Col key={index} className="border-right-product" sm={3}>
								<div className="cursor-pointer">
									<Link href={`/product?id_product=${index}`} >
										<Image src={this.props.data.category.products[index].img_url} alt="product 1" fluid />
									</Link>
								</div>
								<div className="price-box">
									<span className="price-label">${this.props.data.category.products[index].price}</span>
									<span className="old-price-label">$280.00</span>
								</div>
								<div className="rating-container">
									<StarRatingComponent
										name="rate1"
										starCount={5}
										value={this.props.data.products[index].reviews.rating}
										emptyStarColor={'#CCCCCC'}
									/>
								</div>
								<Link href="/product"><a>{this.props.data.category.products[index].title}</a></Link>
							</Col>
						)
					})}
				</Row>
			</section>
		);
	}
}