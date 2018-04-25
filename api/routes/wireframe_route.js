const express = require('express');
const router = express.Router();
const wireframeModel = require('../model/wireframe_model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
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
	var result = wireframeModel.getMenu(req,res);
	result.then(function (result) {
		// you can access the result from the promise here
		res.send(result);
	});

});
//GET API
router.post("/gettema", function (req, res) {
	var result = wireframeModel.gettema(req, res);
	result.then(function (result) {
		// you can access the result from the promise here
		res.send(result);
	});

});
//GET API
router.get("/getceldaimage", function (req, res) {
	var result = wireframeModel.getceldaimage(req, res);
	result.then(function (result) {
		// you can access the result from the promise here
		
		var img = fs.readFileSync('uploads/'+result);
		res.writeHead(200, { 'Content-Type': 'image/png' });
		res.end(img, 'binary');
		res.send(result);
	});

});
router.post("/getceldaimage", function (req, res) {
	var result = wireframeModel.getceldaimage(req, res);
	result.then(function (result) {
		// you can access the result from the promise here

		var img = fs.readFileSync('uploads/' + result);
		res.writeHead(200, { 'Content-Type': 'image/png' });
		res.end(img, 'binary');
		res.send(result);
	});

});


module.exports = router;