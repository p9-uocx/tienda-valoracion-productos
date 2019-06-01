import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


import './bedroom_furniture.scss';

export class BedroomFurniture extends PureComponent {


	render() {

		//console.log(this.props.data)

		return (
			

			<section id="product-section">

				{/*{this.props.data.category.map(function (elemento) {
					return elemento.name;
				})}*/}


				<Row>

					{this.props.data.product.map((value, index) => {

						return (
							<Col key={index} className="border-right-product" sm={3}>
								<div className="cursor-pointer">
									<Link href="/product">
										<Image src={this.props.data.product[index].img_url} alt="product 1" fluid />
									</Link>
								</div>
								<div className="price-box">
									<span className="price-label">${this.props.data.product[index].price}</span>
									<span className="old-price-label">$280.00</span>
								</div>
								<div className="rating-container">
									<StarRatingComponent
										name="rate1"
										starCount={5}
										value={this.props.data.review[index].rating}
										emptyStarColor={'#CCCCCC'}
									/>
								</div>
								<Link href="/product"><a>{this.props.data.product[index].title}</a></Link>
							</Col>
						)
					})}
				</Row>
			</section>

		);
	}

}