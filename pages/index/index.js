// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent } from 'react';
// el componente Link se encarga de manejar los enlaces, como veras sirve para navegar a pa pagina de about
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(farStar, fasStar);

// Todos los componentes reutilizables sera importados con @Components y despues dentro de los corchetes seleccionar el o los componentes necesarios
import { Layout } from '@Components';
import { NavMenu } from '@Components';

// importamos el css especifo de cada componente, esta en SASS
import './index.scss';
import '../../components/layout/layout.scss';
import { Policy } from '../../components/policy_section';


// aqui tienes que exportar el compoente, puede ser una funcion o una clase
export default class Index extends PureComponent {
	// esto es de next.js, y esta funcion se ejecuta antes de hacer nada. Y vale para traer datos de backEnd por ejejmplo.
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		return { userAgent };
	}

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

	// este metodo tiene que estar siempre en React, es el encargado de pintar el html
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
			<div>
				{/* Usaremos este componente para cargar todas las cabeceras footer y cosas comunes del proyecto */}
				{/* Tiene una propiedad importante que es title, la cual controla el nombre de la pagina */}
				<Layout title="Home" {...this.props}>
					{/* <Layout> Todo lo que este aqui dentro estara includo con las cabeceras y footer </Layout> */}
					<Container>
						<NavMenu></NavMenu>
						<Row>
							<Col sm={9}>
								<Carousel>
									<Carousel.Item>
										<img src="/static/img/slider/slider-1-3.jpg" alt="first Slide" />
									</Carousel.Item>
									<Carousel.Item>
										<img src="/static/img/slider/slider-2-3.jpg" alt="first Slide" />
									</Carousel.Item>
									<Carousel.Item>
										<img src="/static/img/slider/slider3-3.jpg" alt="first Slide" />
									</Carousel.Item>
								</Carousel>
							</Col>
							<Col sm={3}>
								<img id="img3a-padding" src="/static/img/slider/img3a.jpg" alt="first Slide" />
								<img src="/static/img/slider/img3b.jpg" alt="first Slide" />
							</Col>
						</Row>
						{/* Policy Section */}
						<Policy></Policy>
						{/* Product Section */}
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
						{/*Seccion Separador*/}
						<section>
							<Row>
								<Col className="no-padding">
									<div id="section-container">
										<div>
											<p>589,551 buyers from more than 150 countries experience secure trading on <Image fluid id="logo" src="/static/img/header/logo2-1.png" /></p>
										</div>
									</div>
								</Col>
							</Row>
						</section>
						{/* Deal Section */}
						<section id="deal-title">
							<Row>
								<Col sm="auto">
									<div>
										<h3>Featured Products</h3>
									</div>
								</Col>
								<Col id="hr">
									<hr />
								</Col>
							</Row>
						</section>
						{/* Product Section */}
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
						{/* IMAGE SECTION */}
						<section className="padding-bottom-img">
							<div>
								<Image fluid src="/static/img/img3c.jpg" alt="product image"></Image>
							</div>
						</section>
					</Container>
				</Layout>
			</div>
		);
	}
}
