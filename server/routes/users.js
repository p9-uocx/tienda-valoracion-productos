const Router = require('restify-router').Router;
const router = new Router();

const { UserModel } = require('../db/user');

router.get('/user', (req, res) => {
  UserModel.getAllUsers()
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/user/:id', (req, res) => {
  UserModel.getUserById(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.post('/user', (req, res) => {
  UserModel.createUser(req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.put('/user/:id', (req, res) => {
  UserModel.updateUser(req.params.id, req.body)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.del('/user/:id', (req, res) => {
  UserModel.deleteUser(req.params.id)
    .then(data => {
      res.send(200, { data });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

module.exports = router;
