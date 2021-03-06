import React, { PureComponent } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StarRatingComponent from 'react-star-rating-component';

import { reviewsTotalValue } from '@Helpers';

export class ProductsA extends PureComponent {
  render() {
    const productSlices = this.props.data.products.slice(0, 4);
    
    return (
      <section id="product-section">
        <Row>
          {productSlices.map((product, index) => {
            const reviewsValue = reviewsTotalValue(product.reviews);

            return (
              <Col className="border-right-product" sm={3}>
                <div className="cursor-pointer">
                  <Link href={{ pathname: '/product', query: { product: product.id_product } }}>
                    <Image src={product.img_url} alt="product 1" fluid />
                  </Link>
                </div>
                <div className="price-box">
                  <span className="price-label">${product.price}</span>
                  <span className="old-price-label">$280.00</span>
                </div>
                <div className="rating-container">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={reviewsValue}
                    emptyStarColor={'#CCCCCC'}
                  />
                  <span className="reviews_info">{product.reviews.length} review(s)</span>
                </div>
                <Link href={{ pathname: '/product', query: { product: product.id_product } }}>
                  <a>{product.title}</a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  }
}
