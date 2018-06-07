const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {
	getTema : async function(res){
		var query = "ListaTema";
				console.log(query);
                var result = await database.executeQuery (res,query);
                return result ;
	},

	getMarcaSubseccion: async function (req, res) {
		var query = "getMarcaSubseccion";
		var parameters = [
			{ name: 'id', sqltype: sql.int, value: req.body.id }
		];
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);
		return result;
	},


	insertarTema : async function(req, res){
				var now = new Date();
				var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'categoria', sqltype: sql.NVarChar, value: req.body.categoria },
					{ name: 'id_marca_subseccion', sqltype: sql.NVarChar, value: req.body.id_marca_subseccion },
					{ name: 'formatDate', sqltype: sql.NVarChar, value: formatDate }
				];
				var query = "insertarTema";
				console.log(query);
				var result = await database.executeQuery(res, query, parameters);     
                return result ;
	},

    cambiarTema : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var query = "cambiarTema";
				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'categoria', sqltype: sql.NVarChar, value: req.body.categoria },
					{ name: 'id_marca_subseccion', sqltype: sql.NVarChar, value: req.body.id_marca_subseccion },
					{ name: 'formatDate', sqltype: sql.NVarChar, value: formatDate },
					{ name: 'id', sqltype: sql.NVarChar, value: req.body.id }
					
				];				
				
				console.log(query);

				var result = await database.executeQuery(res, query, parameters);     
                
                return result ;
    },

    bajaTema: async function (req, res) {
		var query = "bajaTema";
        console.log(query);
		var parameters = [
			{ name: 'id', sqltype: sql.NVarChar, value: req.body.id }

		];

		var result = await database.executeQuery(res, query, parameters);     
        return result;
    }

}