const Router = require('restify-router').Router;
const router = new Router();

const { ReviewModel } = require('../db/review');
const { ProductModel } = require('../db/product');
const { CategoryModel } = require('../db/category');
const { CatHasProdModel } = require('../db/category-product');

router.get('/product', (req, res) => {
  ProductModel.getAllProducts()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/product/:id', (req, res) => {
  ProductModel.getProductById(req.params.id)
    .then(product =>
      CatHasProdModel.getCatHasProdByProductId(product[0].id_product).then(catHasProd =>
        catHasProd.length
          ? CategoryModel.getCategoryById(catHasProd[0].category_id).then(categories => ({
              ...product[0],
              categories,
            }))
          : { ...product[0], categories: [] },
      ),
    )
    .then(data =>
      ReviewModel.getReviewsByProductId(data.id_product).then(reviews => {
        res.send(200, { data: { ...data, reviews } });
      }),
    )
    .catch(error => {
      res.send(500, { error: error.message });
    });
});

router.post('/product', (req, res) => {
  ProductModel.createProduct(req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/product/:id', (req, res) => {
  ProductModel.updateProduct(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/product/:id', (req, res) => {
  ProductModel.deleteProduct(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
