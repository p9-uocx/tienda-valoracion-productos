// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent } from 'react';
// el componente Link se encarga de manejar los enlaces, como veras sirve para navegar a pa pagina de about
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

// Todos los componentes reutilizables sera importados con @Components y despues dentro de los corchetes seleccionar el o los componentes necesarios
import { Layout } from '@Components';
import { NavMenu } from '@Components';

// importamos el css especifo de cada componente, esta en SASS
import './index.scss';


// aqui tienes que exportar el compoente, puede ser una funcion o una clase
export default class Index extends PureComponent {
	// esto es de next.js, y esta funcion se ejecuta antes de hacer nada. Y vale para traer datos de backEnd por ejejmplo.
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
		return { userAgent };
	}

	// este metodo tiene que estar siempre en React, es el encargado de pintar el html
	render() {
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
						<section id="padding-policy-box">
							<Row >
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-truck"></span>
									</div>

									<div class="service-content">
										<div class="info-title">
											<h5>Free Shipping</h5>
										</div>
										<div class="sub-title">
											<span>On Order Over 99€</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-money"></span>
									</div>

									<div class="service-content">
										<div class="info-title">
											<h5>Guarantee</h5>
										</div>
										<div class="sub-title">
											<span>30 Days Money Back</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-money-1"></span>
									</div>
									<div class="service-content">
										<div class="info-title">
											<h5>Payment On Delivery</h5>
										</div>
										<div class="sub-title">
											<span>Cash On Delivery Option</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-support"></span>
									</div>
									<div class="service-content">
										<div class="info-title">
											<h5>Online Suport</h5>
										</div>
										<div class="sub-title">
											<span>We Have Support 24/7</span>
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
										<h3>Deal of the Week</h3>
									</div>
								</Col>
								<Col id="hr">
									<hr />
								</Col>
							</Row>
						</section>
						{/* Product Section */}
						<section>
							<Row>
								<Col sm={3}>
									<div>
										<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
									</div>
									<div className="price-box">
										<span className="price-label">$189.00</span>
										<span className="old-price-label">$280.00</span>
									</div>

								</Col>
								<Col sm={3}>
									<div>
										<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
									</div>
								</Col>
								<Col sm={3}>
									<div>
										<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
									</div>
								</Col>
								<Col sm={3}>
									<div>
										<Image src="/static/img/products/2_4.jpg" alt="product 1" fluid />
									</div>
								</Col>

							</Row>

						</section>

					</Container>



					<Link href="/about">
						<a>about</a>
					</Link>
				</Layout>
			</div>
		);
	}
}
