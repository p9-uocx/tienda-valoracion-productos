const restify = require('restify');
// Importamos los distintos archivos con cada uno sus rutas REST, por ejemplo la siguiente rest se encarga de manejar usuarios (crear, borrar, listar, mostrar, ...)
const userRouter = require('./routes/users');
const roleRouter = require('./routes/roles');
const reviewRouter = require('./routes/reviews');
const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0',
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// una vez importado tenemos que añadirlos al server
userRouter.applyRoutes(server);
roleRouter.applyRoutes(server);
reviewRouter.applyRoutes(server);
productRouter.applyRoutes(server);
categoryRouter.applyRoutes(server);

server.listen(3005, () => {
  console.log('%s listening at %s', server.name, server.url);
});
