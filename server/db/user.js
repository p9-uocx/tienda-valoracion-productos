const { Mysql } = require('./config');

exports.UserModel = new (class UserModel extends Mysql {
  getUserById(id) {
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(`SELECT * FROM Users WHERE id_user=${id}`);
  }

  getAllUsers() {
    return this.query('SELECT * FROM Users');
  }

  getUsersByRol(rolId) {
    return this.query(`SELECT * FROM Users WHERE rol=${rolId}`);
  }

  createUser({ first_name, last_name, gender, email, password, rol }) {
    if (!first_name || !last_name || !gender || !email || !password || !rol)
      return Promise.reject('User data is incomplete');
    const date = new Date().toISOString();

    return this.query(
      `INSERT INTO Users 
      (first_name, last_name, gender, email, password, rol, date_add) 
      VALUES ('${first_name}','${last_name}','${gender}','${email}','${password}',${rol},'${date}')`,
    );
  }

  deleteUser(id) {
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(`DELETE FROM Users WHERE id_user=${id}`);
  }

  updateUser(id, { first_name, last_name, gender, email, password, rol }) {
    if (!first_name || !last_name || !gender || !email || !password || !rol)
      return Promise.reject('User data is incomplete');
    if (!id || isNaN(id)) return Promise.reject('User id is not defined or is incorrect');

    return this.query(
      `UPDATE Users
      SET first_name='${first_name}', last_name='${last_name}', gender='${gender}', email='${email}', password='${password}', rol=${rol}
      WHERE id_user=${id}`,
    );
  }
})();
