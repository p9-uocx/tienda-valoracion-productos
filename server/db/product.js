const { Mysql } = require('./config');

exports.ProductModel = new (class ProductModel extends Mysql {
  getProductById(id) {
    if (!id || isNaN(id)) return Promise.reject('Product id is not defined or is incorrect');

    return this.query(`SELECT * FROM Products WHERE id_product=${id}`);
  }

  getAllProducts() {
    return this.query('SELECT * FROM Products');
  }

  // getProductsByRol(rolId) {
  //   return this.query(`SELECT * FROM Products WHERE rol=${rolId}`);
  // }

  createProduct({
    reference,
    title,
    description,
    price,
    img_url,
    excerpt,
    available,
    meta_title,
    meta_description,
    date_add,
  }) {
    if (
      !reference ||
      !title ||
      !description ||
      !price ||
      !img_url ||
      !excerpt ||
      !available ||
      !meta_title ||
      !meta_description ||
      !date_add
    )
      return Promise.reject('Product data is incomplete');

    return this.query(
      `INSERT INTO Products 
      (reference,title,description,price,img_url,excerpt,available,meta_title,meta_description,date_add,) 
      VALUES (${reference},${title},${description},${price},${img_url},${excerpt},${available},${meta_title},${meta_description},${date_add})`,
    );
  }

  deleteProduct(id) {
    if (!id || isNaN(id)) return Promise.reject('Product id is not defined or is incorrect');

    return this.query(`DELETE FROM Products WHERE id_product=${id}`);
  }

  updateProduct(
    id,
    {
      reference,
      title,
      description,
      price,
      img_url,
      excerpt,
      available,
      meta_title,
      meta_description,
    },
  ) {
    if (
      !reference ||
      !title ||
      !description ||
      !price ||
      !img_url ||
      !excerpt ||
      !available ||
      !meta_title ||
      !meta_description
    )
      return Promise.reject('Product data is incomplete');
    if (!id || isNaN(id)) return Promise.reject('Product id is not defined or is incorrect');

    return this.query(
      `UPDATE Products
      SET reference=${reference},title=${title},description=${description},price=${price},img_url=${img_url},excerpt=${excerpt},available=${available},meta_title=${meta_title},meta_description=${meta_description} 
      WHERE id_product=${id}`,
    );
  }
})();
