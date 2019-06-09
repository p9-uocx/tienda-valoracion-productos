export const reviewsTotalValue = reviews => {
  const reviewsMapped = reviews.map(review => {
    switch (review.user && review.user.rol) {
      case 2:
        return { ...review, userValue: 1 };
      case 3:
        return { ...review, userValue: 2 };
      case 4:
        return { ...review, userValue: 3 };
      default:
        return { ...review, userValue: 1 };
    }
  });

  const numberTodivide = reviewsMapped.reduce((value, review) => value + review.userValue, 0);
  const totalValue = reviewsMapped.reduce(
    (value, review) => value + review.rating * review.userValue,
    0,
  );

  return totalValue / numberTodivide;
};
