const Router = require('restify-router').Router;
const router = new Router();

// podemos uasr los 4 metodos hhtp para responder al frontEnd (get, post, put, delete)
router.get('/review', (req, res) => {
  // el parametro req es un objeto que trae los datos de la peticion
  // el parametro res es un objeto con metodos para enviar las respuestas desde el back

  // el metodo send del objeto res envia responde datos, por ejemplo en este caso un objeto en JSON: { hola: 'adsa' }
  res.send({ hola: 'adsa' });
});

router.post('/review', (req, res) => {
  res.send({ hola: 'adsa' });
});

router.put('/review', (req, res) => {
  res.send({ hola: 'adsa' });
});

router.del('/review', (req, res) => {
  res.send({ hola: 'adsa' });
});

// hay que exportar el router con sus metodos para poner importarlo despues y unirlo al server
module.exports = router;
