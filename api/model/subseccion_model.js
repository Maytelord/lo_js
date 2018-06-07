const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {
	getSubseccion : async function(res){
		var query = "ListaSubSeccion"
		console.log(query);

                var result = await database.executeQuery (res,query);

                return result ;
                /*result.then(function(result) {
    				// you can access the result from the promise here
    				res.send(result);
				});*/
	},

	insertarSubseccion : async function(req, res){
				var now = new Date();

				var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'idseccion', sqltype: sql.int, value: req.body.idseccion },
					{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate }
				];
				var query = "InsertSubSeccion";
				console.log(query);
				var result = await database.executeQuery(res, query, parameters);
                return result ;
	},

    cambiarSubseccion : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'id', sqltype: sql.int, value: req.body.id },
					{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate }
				];
				var query = "UpdateSubSeccion";
				console.log(query);
				var result = await database.executeQuery(res, query, parameters);
                
                return result ;
    },

    bajaSubseccion: async function (req, res) {
		var parameters = [
			{ name: 'id', sqltype: sql.int, value: req.body.id },
		];
		var query = "BajaSubSeccion";
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);
        return result;
    }

}