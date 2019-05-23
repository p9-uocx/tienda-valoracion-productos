import React, { PureComponent } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class CustomCarousel extends PureComponent {

	render() {
		return (
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
		);
	}

}
