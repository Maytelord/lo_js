const express = require('express');
const router = express.Router();
const celdaModel = require('../model/celda_model');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')

	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname))
	}
})

var upload = multer({ storage: storage }).fields([{ name: 'logo_principal', maxCount: 1 }, { name: 'logo_principal2', maxCount: 1 }]);



//app.use(database.executeQuery);

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET request to /celdas'
	});
});

router.post('/', (req, res, next) => {
	const user = {
		name: req.body.nombre,
		pass: req.body.pass
	};

	res.status(200).json({
		message: 'Handling POST request to /celdas',
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
router.get("/get", function (req, res) {
	var result = celdaModel.getCeldas(res);
	result.then(function (result) {
		// you can access the result from the promise here
		res.send(result);
	});

});

router.post("/alta", function (req, res) {
	upload(req, res, function (err) {

		if (err) {
			// An error occurred when uploading
			console.log(err);
			return
		}


		var result = celdaModel.insertarCelda(req, res);
		result.then(function (result) {
			// you can access the result from the promise here
			res.send(result);
		});

		// Everything went fine
	})


});


router.post("/cambio", function (req, res) {

	upload(req, res, function (err) {
		if (err) {
			// An error occurred when uploading
			console.log(err);
			return
		}


		var result = celdaModel.cambiarCelda(req, res);
		result.then(function (result) {
			// you can access the result from the promise here
			res.send(result);
		});

		// Everything went fine
	})


});

router.post("/baja", function (req, res) {
	upload(req, res, function (err) {
		var result = celdaModel.bajaCelda(req, res);
		result.then(function (result) {
			// you can access the result from the promise here
			res.send(result);
		})
	});
});







module.exports = router;