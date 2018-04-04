const express = require('express');
const router = express.Router();
const seccionModel = require('../model/seccion_model');
const multer = require('multer');
const path = require('path');



router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /seccion'
  });
});

router.post('/', (req, res, next) => {
  const user = {
    name: req.body.nombre,
    pass: req.body.pass
  };
  res.status(200).json({
    message: 'Handling POST request to /seccion',
    user: user
  });
});

router.get('/:id/:nombre', (req, res, next) => {
  const id = req.params.id;
  const nombre = req.params.nombre;
  res.status(200).json({
    message: 'my id is ' + id + " and name is " + nombre
  });
});

//GET API
router.get("/get", function(req , res){
    var result = seccionModel.getSeccions(res);
    result.then(function(result) {
    res.send(result);
  });
});

router.post("/alta", function (req, res) {
  console.log("body:"+req.body);    
    var result = seccionModel.insertarSeccion(req,res);
    result.then(function(result) {
        res.send(result);
	});

});


router.post("/cambio", function(req , res){    
    var result = seccionModel.cambiarSeccion(req,res);
	result.then(function (result) {
		res.send(result);
    });
});

router.post("/baja", function (req, res) {
    var result = seccionModel.bajaSeccion(req, res);
      result.then(function (result) {
        // you can access the result from the promise here
        res.send(result);
    })
});







module.exports = router;