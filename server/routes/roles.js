const Router = require('restify-router').Router;
const router = new Router();

const { RoleModel } = require('../db/rol');
const { UserModel } = require('../db/user');

router.get('/role', (req, res) => {
  RoleModel.getAllRoles()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/role/:id', (req, res) => {
  RoleModel.getRolById(req.params.id)
    .then(role =>
      UserModel.getUsersByRol(req.params.id).then(users => {
        res.send(200, { data: { ...role[0], users } });
      }),
    )
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/role', (req, res) => {
  RoleModel.createRol(req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/role/:id', (req, res) => {
  RoleModel.updateRol(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/role/:id', (req, res) => {
  RoleModel.deleteRol(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
