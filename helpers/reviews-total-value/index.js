export const reviewsTotalValue = reviews =>
  reviews.reduce((value, review) => value + review.rating, 0) / reviews.length;
