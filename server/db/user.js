const { Mysql } = require('./config');

exports.UserModel = new (class UserModel extends Mysql {
  getUserById(id) {
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(`SELECT * FROM Users WHERE id_user=${id}`);
  }

  getAllUsers() {
    return this.query('SELECT * FROM Users');
  }

  createUser({ first_name, last_name, gender, email, password, rol, date_add }) {
    if (!first_name || !last_name || !gender || !email || !password || !rol || !date_add)
      return Promise.reject('User data is incomplete');

    return this.query(
      `INSERT INTO Users 
      (first_name, last_name, gender, email, password, rol, date_add) 
      VALUES (${first_name},${last_name},${gender},${email},${password},${rol},${date_add})`,
    );
  }

  deleteUser(id) {
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(`DELETE FROM Users WHERE id_user=${id}`);
  }

  updateUser(id, { first_name, last_name, gender, email, password }) {
    if (!first_name || !last_name || !gender || !email || !password)
      return Promise.reject('User data is incomplete');
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(
      `UPDATE Users
      SET first_name=${first_name}, last_name=${last_name}, gender=${gender}, email=${email}, password=${password}
      WHERE id_user=${id}`,
    );
  }
})();
