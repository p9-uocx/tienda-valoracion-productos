const { Mysql } = require('./config');

exports.CategoryModel = new (class CategoryModel extends Mysql {
  getCategoryById(id) {
    if (!id || isNaN(id)) return Promise.reject('Category id is not defined or is incorrect');
    return this.query(`SELECT * FROM Categories WHERE id_category=${id}`);
  }

  getAllCategories() {
    return this.query('SELECT * FROM Categories');
  }

  createCategory({ name, excerpt, meta_title, meta_description }) {
    if (!name || !excerpt || !meta_title || !meta_description)
      return Promise.reject('Category data is incomplete');
    const date = new Date().toISOString();

    return this.query(
      'INSERT INTO Categories (name, excerpt, meta_title, meta_description, date_add) ' +
        `VALUES ('${name}','${excerpt}','${meta_title}','${meta_description}','${date}')`,
    );
  }

  deleteCategory(id) {
    if (!id || isNaN(id)) return Promise.reject('Category id is not defined or is incorrect');
    return this.query(`DELETE FROM Categories WHERE id_category=${id}`);
  }

  updateCategory(id, { name, excerpt, meta_title, meta_description }) {
    if (!name || !excerpt || !meta_title || !meta_description)
      return Promise.reject('Category data is incomplete');
    if (!id || isNaN(id)) return Promise.reject('Category id is not defined or is incorrect');

    return this.query(
      `UPDATE Categories` +
        ` SET name='${name}',excerpt='${excerpt}',meta_title='${meta_title}',meta_description='${meta_description}'` +
        ` WHERE id_category=${id}`,
    );
  }
})();
