import React, { PureComponent } from 'react';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import StarRatingComponent from 'react-star-rating-component';
import { Layout } from '../../components/layout';
import { Policy } from '../../components';
import { NavMenu } from '../../components/nav';
import { ProductsReview } from '../../components/products_review';

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
				<Layout title="Product Page" {...this.props}>
					<Container>
						<NavMenu></NavMenu>
						<Row className="row-padding-top">
							{/* Image Column*/}
							<Col>
								<Image fluid src={this.state.imgUrl}></Image>
							</Col>
							{/* Product Details Column*/}
							<Col className="col-padding">
								<p id="product-title">{this.state.title}</p>
								<div className="reviews-info">
									<StarRatingComponent
										name="rate1"
										starCount={5}
										value={rating}
										emptyStarColor={'#CCCCCC'} />
									<span>{this.state.numReviews} review(s)</span>
									<span>|</span>
									<span>Add your review</span>
								</div>
								<div className="price-box product-price-box">
									<span className="price-label product-price-label">$189.00</span>
									<span className="old-price-label old-product-price">$280.00</span>
								</div>
								<div id="stock">
									<div className="stock available" title="Availability">
										<i className="fa fa-check" aria-hidden="true"></i>
										<span className="">In stock</span>
									</div>
									<div className="product attribute sku">
										<span><strong>SKU: </strong>furniture05</span>
									</div>
								</div>
								<div>
									<hr id="hr-product" />
								</div>
								<div className="description-text">
									<p>Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui,
										 at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens
										 interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum.
										 Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis,
										 labores officiis torquatos cum ei.
									 </p>
								</div>
								<div>
									<button className="cart-button" title="cart" type="submit">
										<span>Add to cart</span>
									</button>
								</div>
							</Col>
						</Row>
						{/* Policy Section */}
						<Row>
							<Col id="padding-bottom">
								<Policy></Policy>
							</Col>
						</Row>
						{/* Tabs Section */}
						<Tab.Container defaultActiveKey="first">
							<Row className="padding-top">
								<Col sm={3}>
									<Nav variant="pills" className="flex-column">
										<Nav.Item>
											<Nav.Link eventKey="first">Product Details</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second">Reviews ({this.state.numReviews})</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col sm={9}>
									<Tab.Content>
										<Tab.Pane eventKey="first">
											<p className="description-text">Lorem ipsum dolor sit amet, an munere tibique consequat mel,
												congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in
												eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum.
												Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis,
												labores officiis torquatos cum ei.<br></br><br></br>
												Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos.
												In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum cotidieque.
												Est cu nibh clita. Sed an nominavi maiestatis, et duo corrumpit constituto, duo id rebum lucilius.
												Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit,
												modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et.
												Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at,
												vel eu sumo tritani. Cum ex minim legere.<br></br><br></br>
												Eos cu utroque inermis invenire, eu pri alterum antiopam. Nisl erroribus definitiones nec an, ne mutat scripserit est.
												Eros veri ad pri. An soleat maluisset per. Has eu idque similique, et blandit scriptorem necessitatibus mea.
												Vis quaeque ocurreret ea.
											</p>
										</Tab.Pane>
										<Tab.Pane eventKey="second">
											<ProductsReview></ProductsReview>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</Container>
				</Layout>
			</div>
		);
	}
}