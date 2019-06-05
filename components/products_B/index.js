import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


export class ProductsB extends PureComponent {
	render() {
		return (
			<section id="product-section">
				<Row>
					{/* Producto 0 */}
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src={this.props.data.product[6].img_url} alt="product 1" fluid />
							</Link>
						</div>
						<div className="price-box">
							<span className="price-label">${this.props.data.product[6].price}</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate1"
								starCount={5}
								value={this.props.data.review[6].rating}
								emptyStarColor={'#CCCCCC'}
							/>
						</div>
						<Link href="/product"><a>{this.props.data.product[8].title}</a></Link>
					</Col>
					{/* Producto 1 */}
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src={this.props.data.product[8].img_url} alt="product 2" fluid />
							</Link>
						</div>
						<div className="price-box">
							<span className="price-label">${this.props.data.product[8].price}</span>
							<span className="old-price-label">$480.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate2"
								starCount={5}
								value={this.props.data.review[1].rating}
								emptyStarColor={'#CCCCCC'}
							/>
						</div>
						<Link href="/product"><a>{this.props.data.product[8].title}</a></Link>
					</Col>
					{/* Producto 2 */}
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src={this.props.data.product[10].img_url} alt="product 3" fluid />
							</Link>
						</div>
						<div className="price-box">
							<span className="price-label">${this.props.data.product[10].price}</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate3"
								starCount={5}
								value={this.props.data.review[10].rating}
								emptyStarColor={'#CCCCCC'}
							/>
						</div>
						<Link href="/product"><a>{this.props.data.product[10].title}</a></Link>
					</Col>
					{/* Producto 3 */}
					<Col sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src={this.props.data.product[12].img_url} alt="product 4" fluid />
							</Link>
						</div>
						<div className="price-box">
							<span className="price-label">${this.props.data.product[12].price}</span>
							<span className="old-price-label">$280.00</span>
						</div>
						<div className="rating-container">
							<StarRatingComponent
								name="rate4"
								starCount={5}
								value={this.props.data.review[12].rating}
								emptyStarColor={'#CCCCCC'}
							/>
						</div>
						<Link href="/product"><a>{this.props.data.product[12].title}</a></Link>
					</Col>
				</Row>
			</section>
		);
	}

}