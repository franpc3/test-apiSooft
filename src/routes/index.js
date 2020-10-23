import express from 'express';
import { addRestaurant, getRestaurant} from './../restaurants/restaurant';
import {checkValues} from './../restaurants/checkValues';

var router = express.Router();

/* GET - Obtener Restaurantes */
router.get('/:kindOf', function(req,res,next) {
  getRestaurant(req,res,next);
});

router.get('/', function(req,res,next) {
  getRestaurant(req,res,next);
});

 
/* POST - Añadir Restaurante */
router.post('/',checkValues, function(req, res, next) {
  addRestaurant(req,res,next);
});




export default router;
