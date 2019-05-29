const { Mysql } = require('./config');

exports.CatHasProdModel = new (class CatHasProdModel extends Mysql {
  getCatHasProdByCategoryId(CategoryId) {
    if (!CategoryId || isNaN(CategoryId))
      return Promise.reject('CategoryId id is not defined or is incorrect');
    return this.query(`SELECT * FROM Categories_has_Products WHERE category_id=${CategoryId}`);
  }

  getCatHasProdByProductId(ProductId) {
    if (!ProductId || isNaN(ProductId))
      return Promise.reject('ProductId id is not defined or is incorrect');
    return this.query(`SELECT * FROM Categories_has_Products WHERE product_id=${ProductId}`);
  }

  getAllCatHasProd() {
    return this.query('SELECT * FROM Categories_has_Products');
  }

  // getCategoriesByRol(rolId) {
  //   return this.query(`SELECT * FROM Categories WHERE rol=${rolId}`);
  // }

  createCatHasProd({ category_id, product_id }) {
    if (!category_id || !product_id) return Promise.reject('CategoryHasProduct data is incomplete');

    return this.query(
      `INSERT INTO Categories_has_Products 
      (category_id, product_id) 
      VALUES (${category_id}, ${product_id})`,
    );
  }

  deleteCatHasProd(categoryId, productId) {
    if (!categoryId || isNaN(categoryId) || !productId || isNaN(productId))
      return Promise.reject('Category ID and Product ID is not defined or is incorrect');

    return this.query(
      `DELETE FROM Categories_has_Products WHERE product_id=${productId} AND category_id=${categoryId}`,
    );
  }

  updateCatHasProd(categoryId, productId, { category_id, product_id }) {
    if (!category_id || !product_id) return Promise.reject('CategoryHasProduct data is incomplete');
    if (!categoryId || isNaN(categoryId) || !productId || isNaN(productId))
      return Promise.reject('Category ID and Product ID is not defined or is incorrect');

    return this.query(
      `UPDATE Categories_has_Products
      SET category_id=${category_id},product_id=${product_id} 
      WHERE product_id=${productId} AND category_id=${categoryId}`,
    );
  }
})();