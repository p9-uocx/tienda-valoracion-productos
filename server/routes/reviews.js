const Router = require('restify-router').Router;
const router = new Router();

const { ReviewModel } = require('../db/review');

router.get('/review', (req, res) => {
  ReviewModel.getAllProducts()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/review/:userId/:productId', (req, res) => {
  ReviewModel.updateProduct(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/review', (req, res) => {
  ReviewModel.createProduct(req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/review/:userId/:productId', (req, res) => {
  ReviewModel.updateProduct(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/review/:userId/:productId', (req, res) => {
  ReviewModel.deleteProduct(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
