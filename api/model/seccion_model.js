const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {
	getSeccions : async function(res){
				var query = "select * from [seccion] where estatus = 1";
                var result = await database.executeQuery (res,query);

                return result ;
                /*result.then(function(result) {
    				// you can access the result from the promise here
    				res.send(result);
				});*/
	},

	insertarSeccion : async function(req, res){
				var now = new Date();

				var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var parameters = [
					{ name: 'nombre', sqltype: sql.NVarChar, value: req.body.nombre },
					{ name: 'fecha', sqltype: sql.NVarChar, value: formatDate }
				];
				var query = "InsterSeccion";
				console.log(query);
				var result = await database.executeQuery(res, query, parameters);                
                return result ;
	},

    cambiarSeccion : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");

                    var query = "UPDATE seccion SET nombre='"+req.body.nombre+"',fecha_editado='"+formatDate+"' WHERE id="+req.body.id;
				
				console.log(query);

                var result = await database.executeQuery (res,query);
                
                return result ;
    },

    bajaSeccion: async function (req, res) {
        var query = "UPDATE Seccion" +
            " SET estatus = 0"  +
            " WHERE id  = " + req.body.id;
        console.log(query);

        var result = await database.executeQuery(res, query);
        return result;
    }

}