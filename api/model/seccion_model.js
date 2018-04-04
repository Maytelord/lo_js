const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');

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
              	var query = "INSERT INTO [seccion] (nombre,fecha_creado,estatus) VALUES ('"+req.body.nombre+"','"+formatDate+"','1')";
                var result = await database.executeQuery (res,query);
                
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