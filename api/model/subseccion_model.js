const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');

module.exports = {
	getSubseccion : async function(res){
		var query = " select"+
			" SubSeccion.id, "+
			" SubSeccion.nombre, "+
			" SubSeccion.id_seccion,"+
			" Seccion.nombre as 'seccionNombre'"+
			" from SubSeccion join Seccion ON SubSeccion.id_seccion = Seccion.id"+
			" where SubSeccion.estatus = 1";
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
				var query = "INSERT INTO [subseccion] (nombre,id_seccion,fecha_creado,estatus) VALUES ('" + req.body.nombre + "','" + req.body.idseccion + "','"+formatDate+"','1')";
                var result = await database.executeQuery (res,query);
                
                return result ;
	},

    cambiarSubseccion : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");

                    var query = "UPDATE subseccion SET nombre='"+req.body.nombre+"',fecha_editado='"+formatDate+"' WHERE id="+req.body.id;
				
				console.log(query);

                var result = await database.executeQuery (res,query);
                
                return result ;
    },

    bajaSubseccion: async function (req, res) {
        var query = "UPDATE Subseccion" +
            " SET estatus = 0"  +
            " WHERE id  = " + req.body.id;
        console.log(query);

        var result = await database.executeQuery(res, query);
        return result;
    }

}