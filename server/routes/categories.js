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
    .then(category =>
      CatHasProdModel.getCatHasProdByCategoryId(category[0].id_category).then(catHasProd =>
        catHasProd.length
          ? Promise.all(
              catHasProd.map(catHasProdElement =>
                ProductModel.getProductById(catHasProdElement.product_id).then(
                  product => product[0],
                ),
              ),
            ).then(products => ({
              ...category[0],
              products,
            }))
          : { ...category[0], products: [] },
      ),
    )
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/category', (req, res) => {
  CategoryModel.createCategory(req.body)
    .then(category =>
      req.body.product_id
        ? CatHasProdModel.createCatHasProd({
            categoryId: category.insertId,
            productId: req.body.product_id,
          }).then(catHasProd => ({
            ...category,
            product: catHasProd,
          }))
        : { ...category },
    )
    .then(data => {
      res.send(200, { data: data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/category/:id', (req, res) => {
  return (req.body.product_id
    ? CatHasProdModel.createCatHasProd({
        categoryId: req.params.id,
        productId: req.body.product_id,
      }).then(data => CategoryModel.updateCategory(req.params.id, req.body))
    : CategoryModel.updateCategory(req.params.id, req.body)
  )
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/category/:id', (req, res) => {
  CatHasProdModel.getCatHasProdByCategoryId(req.params.id)
    .then(catHasProd =>
      catHasProd.length
        ? CatHasProdModel.deleteCatHasProdByCategoryId(req.params.id).then(() =>
            CategoryModel.deleteCategory(req.params.id),
          )
        : CategoryModel.deleteCategory(req.params.id),
    )
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
