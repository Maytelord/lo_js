const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {
	getMarcas : async function(res){
		var query = "ListaMarca";
                var result = await database.executeQuery (res,query);
                return result ;
	},

	insertarMarca: async function (req, res) {
		console.log("insertarMarca");

		var now = new Date();
		var formatDate = dateformat.dateFormat(now, "isoDateTime");		

				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'color', sqltype: sql.NVarChar, value: req.body.color },
					{ name: 'categoria', sqltype: sql.NVarChar, value: req.body.categoria },
					{ name: 'banner', sqltype: sql.NVarChar, value: req.files.banner[0].filename },
					{ name: 'filename', sqltype: sql.NVarChar, value: req.files.logo_principal[0].filename },
					{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate },
				];
				console.log(parameters);
				var query = "InsterMarca";
				console.log(query);
				var result = await database.executeQuery(res, query, parameters);
	},
    cambiarMarca : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");
				if (!req.file) {
					var parameters = [
						{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
						{ name: 'color', sqltype: sql.NVarChar, value: req.body.color },
						{ name: 'categoria', sqltype: sql.NVarChar, value: req.body.categoria },

						{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate },
						{ name: 'id', sqltype: sql.int, value: req.body.id }
					];
					var query = "UpdateMarca1";

				} else {
					var parameters = [
						{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
						{ name: 'color', sqltype: sql.NVarChar, value: req.body.color },
						{ name: 'filename', sqltype: sql.NVarChar, value: req.file.filename },
						{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate },
						{ name: 'id', sqltype: sql.int, value: req.body.id }

					];
				}
				var query = "UpdateMarca1";

				console.log(query);

				var result = await database.executeQuery(res, query, parameters);
                
                return result ;
                /*result.then(function(result) {
                    // you can access the result from the promise here
                    res.send(result);
                });*/
    },

    bajaMarca: async function (req, res) {
		var parameters = [
			{ name: 'id', sqltype: sql.int, value: req.body.id }
		];
		var query = "BajaMarca";
		var result = await database.executeQuery(res, query, parameters);
        return result;
    }

}