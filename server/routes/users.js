const Router = require('restify-router').Router;
const router = new Router();

const { UserModel } = require('../db/user');
const { RoleModel } = require('../db/rol');
const { ReviewModel } = require('../db/review');

router.get('/user', (req, res) => {
  UserModel.getAllUsers()
    .then(data => {
      res.send(200, { data: data.map(el => ({ ...el, id: el.id_user })) });
    })
    .catch(error => {
      res.send(500, { error });
    });
});

router.get('/user/:id', (req, res) => {
  UserModel.getUserById(req.params.id)
    .then(user => RoleModel.getRolById(user[0].rol).then(rol => ({ ...user[0], rol: rol[0] })))
    .then(data =>
      ReviewModel.getReviewsByUserId(data.id_user).then(reviews => {
        res.send(200, { data: { ...data, id: data.id_user, reviews } });
      }),
    )
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
