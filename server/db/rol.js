const { Mysql } = require('./config');

exports.RoleModel = new (class RoleModel extends Mysql {
  getRolById(id) {
    if (!id || isNaN(id)) return Promise.reject('Role id is not defined or is incorrect');

    return this.query(`SELECT * FROM Roles WHERE id_roles=${id}`);
  }

  getAllRoles() {
    return this.query('SELECT * FROM Roles');
  }

  createRol({
    name,
    edit_product,
    create_product,
    delete_product,
    edit_review,
    create_review,
    delete_review,
    dashboard_access,
    edit_category,
    create_category,
    delete_category,
    edit_user,
    create_user,
    delete_user,
    edit_role,
    create_role,
    delete_role,
  }) {
    if (
      !name ||
      !edit_product ||
      !create_product ||
      !delete_product ||
      !edit_review ||
      !create_review ||
      !delete_review ||
      !dashboard_access ||
      !edit_category ||
      !create_category ||
      !delete_category ||
      !edit_user ||
      !create_user ||
      !delete_user ||
      !edit_role ||
      !create_role ||
      !delete_role
    )
      return Promise.reject('Role data is incomplete');

    return this.query(
      `INSERT INTO Roles 
      (name,edit_product,create_product,delete_product,edit_review,create_review,delete_review,dashboard_access,edit_category,create_category,delete_category,edit_user,create_user,delete_user,edit_role,create_role,delete_role) 
      VALUES (${name},${edit_product},${create_product},${delete_product},${edit_review},${create_review},${delete_review},${dashboard_access},${edit_category},${create_category},${delete_category},${edit_user},${create_user},${delete_user},${edit_role},${create_role},${delete_role},)`,
    );
  }

  deleteRol(id) {
    if (!id || isNaN(id)) return Promise.reject('Role id is not defined or is incorrect');

    return this.query(`DELETE FROM Roles WHERE id_roles=${id}`);
  }

  updateRol(
    id,
    {
      name,
      edit_product,
      create_product,
      delete_product,
      edit_review,
      create_review,
      delete_review,
      dashboard_access,
      edit_category,
      create_category,
      delete_category,
      edit_user,
      create_user,
      delete_user,
      edit_role,
      create_role,
      delete_role,
    },
  ) {
    if (
      !name ||
      !edit_product ||
      !create_product ||
      !delete_product ||
      !edit_review ||
      !create_review ||
      !delete_review ||
      !dashboard_access ||
      !edit_category ||
      !create_category ||
      !delete_category ||
      !edit_user ||
      !create_user ||
      !delete_user ||
      !edit_role ||
      !create_role ||
      !delete_role
    )
      return Promise.reject('Role data is incomplete');
    if (!id || isNaN(id)) return Promise.reject('Role id is not defined or is incorrect');

    return this.query(
      `UPDATE Roles SET 
      name=${name},
      edit_product=${edit_product},
      create_product=${create_product},
      delete_product=${delete_product},
      edit_review=${edit_review},
      create_review=${create_review},
      delete_review=${delete_review},
      dashboard_access=${dashboard_access},
      edit_category=${edit_category},
      create_category=${create_category},
      delete_category=${delete_category},
      edit_user=${edit_user},
      create_user=${create_user},
      delete_user=${delete_user},
      edit_role=${edit_role},
      create_role=${create_role},
      delete_role=${delete_role},
      WHERE id_roles=${id}`,
    );
  }
})();
