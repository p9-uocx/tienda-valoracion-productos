import React, { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';


export class BedroomFurniture extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			rating: 0,
			categorias: null
		};
	}

	componentDidMount() {
		fetch(`${process.env.DB_API_HOST}/category`)
			.then((response) => response.json())
			.then(categorias => this.setState({categorias}))
			.catch(error => {
				console.log("Fetching Error...")
			})
			
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

		return (
			<section id="product-section">
				<Row>
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
							</Link>
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
								emptyStarColor={'#CCCCCC'}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href="/product"><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src="/static/img/products/5_5.jpg" alt="product 2" fluid />
							</Link>
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
								emptyStarColor={'#CCCCCC'}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href="/product"><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col className="border-right-product" sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src="/static/img/products/6_2.jpg" alt="product 3" fluid />
							</Link>
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
								emptyStarColor={'#CCCCCC'}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href="/product"><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
					<Col sm={3}>
						<div className="cursor-pointer">
							<Link href="/product">
								<Image src="/static/img/products/9_4.jpg" alt="product 4" fluid />
							</Link>
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
								emptyStarColor={'#CCCCCC'}
								onStarClick={this.onStarClick.bind(this)}
							/>
						</div>
						<Link href="/product"><a>Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp</a></Link>
					</Col>
				</Row>
			</section>
		);
	}

}