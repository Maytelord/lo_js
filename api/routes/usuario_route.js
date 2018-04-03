const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET request to /usuarios'
	});
});

router.post('/', (req, res, next) => {
	const user = {
		name: req.body.nombre,
		pass: req.body.pass
	};

	res.status(200).json({
		message: 'Handling POST request to /usuarios',
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

module.exports = router;



/*
app.get('/', function (req, res) {
   
    var sql = require("mssql");


    var config = {
        user: 'sa',
        password: 'may',
        server: '192.168.10.101', 
        database: 'prueba' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from marcas', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});*/