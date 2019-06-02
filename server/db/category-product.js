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

  createCatHasProd({ categoryId, productId }) {
    if (!categoryId || !productId) return Promise.reject('CategoryHasProduct data is incomplete');
    return this.query(
      `INSERT INTO Categories_has_Products (category_id, product_id) 
      VALUES (${Number(categoryId)},${Number(productId)}) 
      ON DUPLICATE KEY UPDATE category_id=${Number(categoryId)},product_id=${Number(productId)}`,
    );
  }

  deleteCatHasProdByProductId(productId) {
    if (!productId || isNaN(productId))
      return Promise.reject('Product ID is not defined or is incorrect');
    return this.query(`DELETE FROM Categories_has_Products WHERE product_id=${productId}`);
  }

  deleteCatHasProdByCategoryId(categoryId) {
    if (!categoryId || isNaN(categoryId))
      return Promise.reject('Category ID is not defined or is incorrect');
    return this.query(`DELETE FROM Categories_has_Products WHERE category_id=${categoryId}`);
  }
})();
