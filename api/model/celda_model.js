const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {
	getCeldas: async function (res) {
		var query = "ListaCelda";
		console.log(query);

		var result = await database.executeQuery(res, query);
		return result;
	},

	insertarCelda: async function (req, res) {
		var now = new Date();
		var formatDate = dateformat.dateFormat(now, "isoDateTime");
		var parameters = [
			{ name: 'titulo', sqltype: sql.NVarChar, value: req.body.titulo },
			{ name: 'id_tema', sqltype: sql.NVarChar, value: req.body.id_tema },
			{ name: 'desc', sqltype: sql.NVarChar, value: req.body.descripcion },
			{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate },
			{ name: 'preview', sqltype: sql.NVarChar, value: req.files['logo_principal'][0].filename },
			{ name: 'archivo', sqltype: sql.NVarChar, value: req.files['logo_principal'][0].filename }
		];
		var query = "InserCelda";
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);
		console.log("resultado: "+result);
		return result;
	},

	cambiarCelda: async function (req, res) {
		var now = new Date();
		var formatDate = dateformat.dateFormat(now, "isoDateTime");
		var parameters = [
			{ name: 'titulo', sqltype: sql.NVarChar, value: req.body.titulo },
			{ name: 'id_tema', sqltype: sql.NVarChar, value: req.body.id_tema },
			{ name: 'desc', sqltype: sql.NVarChar, value: req.body.descripcion },
			{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate },
			{ name: 'id', sqltype: sql.int, value: req.body.id }
		];
		var query = "UpdateCelda";
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);
		return result;
	},
	bajaCelda: async function (req, res) {
		var parameters = [
			{ name: 'id', sqltype: sql.int, value: req.body.id }
		];
		var query = "BajaCelda";
		console.log(query);

		var result = await database.executeQuery(res, query, parameters);
		return result;
	}
}