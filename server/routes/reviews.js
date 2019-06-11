const Router = require('restify-router').Router;
const router = new Router();

const { ReviewModel } = require('../db/review');

router.get('/review', (req, res) => {
  ReviewModel.getAllReviews()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/review/:userId/:productId', (req, res) => {
  ReviewModel.getReviewsByIds(req.params.userId, req.params.productId)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/review', (req, res) => {
  ReviewModel.createReview(JSON.parse(req.body))
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/review/:userId/:productId', (req, res) => {
  ReviewModel.updateReview(req.params.userId, req.params.productId, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/review/:userId/:productId', (req, res) => {
  ReviewModel.deleteReview(req.params.userId, req.params.productId)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
