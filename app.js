const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usuariosRoutes = require('./api/routes/usuario_route');
const marcasRoutes = require('./api/routes/marca_route');
const seccionRoutes = require('./api/routes/seccion_route');
const subseccionRoutes = require('./api/routes/subseccion_route');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

app.use('/usuarios', usuariosRoutes);
app.use('/marcas', marcasRoutes);
app.use('/seccion', seccionRoutes);
app.use('/subseccion', subseccionRoutes);

app.use((req, res, next) => {
	const error = new Error('Not Found');

	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);

	res.json({
		error: {
			message: error.message
		}
	})
});

module.exports = app;