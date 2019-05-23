import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './policy.scss';

export class Policy extends PureComponent { 

    render () {
        return (
            <section id="padding-policy-box">
							<Row >
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-truck"></span>
									</div>

									<div className="service-content">
										<div className="info-title">
											<h5>Free Shipping</h5>
										</div>
										<div className="sub-title">
											<span>On Order Over 99€</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-money"></span>
									</div>

									<div className="service-content">
										<div className="info-title">
											<h5>Guarantee</h5>
										</div>
										<div className="sub-title">
											<span>30 Days Money Back</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-money-1"></span>
									</div>
									<div className="service-content">
										<div className="info-title">
											<h5>Payment On Delivery</h5>
										</div>
										<div className="sub-title">
											<span>Cash On Delivery Option</span>
										</div>
									</div>
								</Col>
								<Col className="policy-box">
									<div className="icon-service">
										<span className="flaticon-support"></span>
									</div>
									<div className="service-content">
										<div className="info-title">
											<h5>Online Suport</h5>
										</div>
										<div className="sub-title">
											<span>We Have Support 24/7</span>
										</div>
									</div>
								</Col>
							</Row>
						</section>
        );
    }

}