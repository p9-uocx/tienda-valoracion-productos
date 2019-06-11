import React, { PureComponent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatingComponent from 'react-star-rating-component';

import './products_review.scss';

export class ProductsReview extends PureComponent {
  static async getInitialProps({ req }) {
    const apiReqProduct = await fetch(`${process.env.DB_API_HOST}/user/`);
    const productData = await apiReqProduct.json();

    return { api: { productData: productData.data } };
  }

  state = {
    reviewContent: '',
    imgUrl: '/static/img/products/2_4.jpg',
    title: this.props.data.title,
    rating: 3,
    numReviews: 3,
    contentReview:
      'Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.',
    user: '',
    fechaReview: '12/4/19',
    userRating: 0,
    reviewEnable: false,
    reviews: this.props.data.reviews,
    updateComponent: false,
  };

  componentDidMount() {
    const storage = window.localStorage.user;
    if (storage) {
      const userSession = JSON.parse(storage);
      this.setState({
        reviewEnable: true,
        userSession,
      });
    }
  }

  onStarClick(nextValue, prevValue, name) {
    // console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ userRating: nextValue });
  }

  onChangeReviewContent = event => {
    this.setState({ reviewContent: event.currentTarget.value });
  };

  addNewReview = () => {
    const postData = {
      title: 'none',
      descripction: this.state.reviewContent,
      images_url: 'none',
      rating: this.state.userRating,
      user_id: this.state.userSession.id_user,
      product_id: this.props.data.id_product,
    };

    fetch(`${process.env.DB_API_HOST}/review`, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify(postData),
      mode: 'cors',
      cache: 'default',
    })
      .then(res => res.json())
      .then(res => {
        debugger;
        if (res.data) {
          fetch(`${process.env.DB_API_HOST}/product/${this.props.data.id_product}`)
            .then(res => res.json())
            .then(res => {
              debugger;
              this.setState({ reviews: res.data.reviews });
            });
        }
      });
  };

  render() {
    return (
      <div className="reviews-container">
        <Row>
          <div className="block-title">
            <strong>Customer Reviews</strong>
          </div>
        </Row>

        {this.state.reviews.map(review => {
          return (
            <div>
              <Row className="review-content">
                <Col sm={4}>
                  <p className="product-title">{this.state.title}</p>
                  <div className="rating-container">
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={review.rating}
                      emptyStarColor={'#CCCCCC'}
                    />
                  </div>
                </Col>
                <Col sm={8}>
                  {review.descripction}
                  <div className="review-details">
                    <span>
                      Review by{' '}
                      <strong>
                        {review.user.first_name} {review.user.last_name}
                      </strong>
                    </span>
                    <p>Posted on {review.date_add}</p>
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}

        {this.state.reviewEnable && (
          <section>
            <Row>
              <div className="user-review-intro">
                <span>You're Reviewing:</span>
                <p className="product-title">{this.state.title}</p>
              </div>
            </Row>
            <Row>
              <div className="user-review-rating">
                <span>
                  Your Rating <span>*</span>
                </span>
              </div>
            </Row>
            <Row>
              <div className="rating-container">
                <StarRatingComponent
                  name="userRating"
                  starCount={5}
                  value={this.state.userRating}
                  emptyStarColor={'#CCCCCC'}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </div>
            </Row>
            <Row>
              <div className="user-review-content">
                <label>
                  Review <span>*</span>
                </label>
                <textarea
                  name=""
                  id="review-content"
                  cols="103"
                  rows="3"
                  value={this.state.reviewContent}
                  onChange={this.onChangeReviewContent}
                />
              </div>
              <div className="review-button-container">
                <button
                  className="review-button"
                  title="Submit Review"
                  type="submit"
                  onClick={this.addNewReview}>
                  <span>Submit Review</span>
                </button>
              </div>
            </Row>
          </section>
        )}
      </div>
    );
  }
}
