import React, { PureComponent } from 'react';

import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';
import { NavMenu } from '../../components/nav';
import { BedroomFurniture } from '@Components';
import { ProductsB } from '@Components';

export default class BedroomFurniturePage extends PureComponent {

	render() {
		return (
			<Layout>
				<Container>
					{/* Deal Section */}
					<section className="deal-title">
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
					<BedroomFurniture></BedroomFurniture>

				</Container>
			</Layout>
		);
	}
}