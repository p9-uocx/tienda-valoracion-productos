const { Mysql } = require('./config');

exports.ReviewModel = new (class ReviewModel extends Mysql {
  getAllReviews() {
    return this.query('SELECT * FROM reviews');
  }

  getReviewsByIds(userId, productId) {
    if (!productId || !userId || isNaN(productId) || isNaN(userId))
      return Promise.reject('User ID and Product ID is not defined or is incorrect');
    return this.query(`SELECT * FROM reviews WHERE product_id=${productId} AND user_id=${userId}`);
  }

  getReviewsByProductId(productId) {
    if (!productId || isNaN(productId))
      return Promise.reject('ProductId is not defined or is incorrect');
    return this.query(`SELECT * FROM reviews WHERE product_id=${productId}`);
  }

  getReviewsByUserId(userId) {
    if (!userId || isNaN(userId)) return Promise.reject('UserId is not defined or is incorrect');
    return this.query(`SELECT * FROM reviews WHERE user_id=${userId}`);
  }

  createReview({ title, descripction, images_url, rating, user_id, product_id }) {
    if (!title || !descripction || !images_url || !rating || !user_id || !product_id)
      return Promise.reject('Review data is incomplete');
    const date = new Date().toISOString();

    return this.query(
      `INSERT INTO reviews 
      (title, descripction, images_url, rating, user_id, product_id, date_add) 
      VALUES ('${title}','${descripction}','${images_url}',${rating},${user_id},${product_id},'${date}')`,
    );
  }

  deleteReview(userId, productId) {
    if (!productId || !userId || isNaN(productId) || isNaN(userId))
      return Promise.reject('User ID and Product ID is not defined or is incorrect');

    return this.query(`DELETE FROM reviews WHERE product_id=${productId} AND user_id=${userId}`);
  }

  updateReview(userId, productId, { title, descripction, images_url, rating }) {
    if (!title || !descripction || !images_url || !rating)
      return Promise.reject('Review data is incomplete');
    if (!productId || !userId || isNaN(productId) || isNaN(userId))
      return Promise.reject('User ID and Product ID is not defined or is incorrect');

    return this.query(
      `UPDATE reviews
      SET title='${title}',descripction='${descripction}',images_url='${images_url}',rating=${rating}
      WHERE product_id=${productId} AND user_id=${userId}`,
    );
  }
})();
