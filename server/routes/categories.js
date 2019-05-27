const Router = require('restify-router').Router;
const router = new Router();

const { CategoryModel } = require('../db/category');
const { ProductModel } = require('../db/product');
const { CatHasProdModel } = require('../db/category-product');

router.get('/category', (req, res) => {
  CategoryModel.getAllCategories()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/category/:id', (req, res) => {
  CategoryModel.getCategoryById(req.params.id)
    .then(category => {
      CatHasProdModel.getCatHasProdByCategoryId(category[0].id_category).then(catHasProd => {
        ProductModel.getProductById(catHasProd[0].product_id).then(products => {
          res.send(200, { data: { ...category[0], products } });
        });
      });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/category', (req, res) => {
  CategoryModel.createCategory(req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/category/:id', (req, res) => {
  CategoryModel.updateCategory(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/category/:id', (req, res) => {
  CategoryModel.deleteCategory(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
