const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');

module.exports = {
	getCeldas: async function (res) {
		var query = " select" +
			" Celda.id," +
			" Celda.id_tema," +
			" Celda.titulo," +
			" Celda.descripcion," +
			" Tema.nombre" +
			" FROM [Logrand].[dbo].[Celda]" +
			" join Tema ON Celda.id_tema = Tema.id	 where Celda.estatus = 1";
		var result = await database.executeQuery(res, query);
		return result;
	},

	insertarCelda: async function (req, res) {
		var now = new Date();
		var formatDate = dateformat.dateFormat(now, "isoDateTime");
		var query = "declare @ModelID int  INSERT INTO [celda] (titulo,id_tema,descripcion,fecha_creado,estatus)" +
			" VALUES('" + req.body.titulo + "'," +
			" " + req.body.id_tema + "," +
			" '" + req.body.descripcion + "'," +
			" '" + formatDate + "'," +
			" 1) 			 SET @ModelID = (select SCOPE_IDENTITY() as 'id') " +
			" INSERT INTO Celda_Preview(id_celda, archivo)" +
			" VALUES(@ModelID , '" + req.files['logo_principal'][0].filename + "')" +
			" INSERT INTO Celda_Archivo(id_celda, archivo)" +
			" VALUES(@ModelID , '" + req.files['logo_principal2'][0].filename + "')";

		console.log(query);
		var result = await database.executeQuery(res, query);
		console.log("resultado: "+result);
		return result;
	},

	cambiarCelda: async function (req, res) {
		var now = new Date();
		var formatDate = dateformat.dateFormat(now, "isoDateTime");
		var query = "UPDATE Celda SET" +
			" titulo='" + req.body.titulo + "'," +
			" descripcion='" + req.body.descripcion + "'," +
			" id_tema='" + req.body.id_tema + "'," +
			" fecha_editado = '" + formatDate + "'" +
			" WHERE id= " + req.body.id;
		console.log(query);
		var result = await database.executeQuery(res, query);
		return result;
	},
	bajaCelda: async function (req, res) {
		var query = "UPDATE Celda" +
			" SET estatus = 0" +
			" WHERE id  = " + req.body.id;
		console.log(query);

		var result = await database.executeQuery(res, query);
		return result;
	}
}