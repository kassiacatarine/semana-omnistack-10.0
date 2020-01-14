const {
  Router
} = require('express');
const DevController = require('../controllers/DevController');

const routes = Router();

routes.post('', DevController.index);
routes.post('', DevController.store);


module.exports = routes;