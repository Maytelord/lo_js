const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');

module.exports = {
	getMarcas : async function(res){
              	var query = "select * from [marcas]";
                var result = await database.executeQuery (res,query);

                return result ;
                /*result.then(function(result) {
    				// you can access the result from the promise here
    				res.send(result);
				});*/
	},

	insertarMarca : async function(req, res){
				var now = new Date();

				var formatDate = dateformat.dateFormat(now, "isoDateTime");
              	var query = "INSERT INTO [marcas] (nombre,color,logo_principal,fecha_creado,estatus) VALUES ('"+req.body.nombre+"','"+req.body.color+"','"+req.file.filename+"','"+formatDate+"','1')";
                var result = await database.executeQuery (res,query);
                
                return result ;
                /*result.then(function(result) {
    				// you can access the result from the promise here
    				res.send(result);
				});*/
	},

    cambiarMarca : async function(req, res){
          
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");
                if(!req.file){
                    var query = "UPDATE marcas SET nombre='"+req.body.nombre+"',color='"+req.body.color+"',fecha_editado='"+formatDate+"' WHERE id="+req.body.id;

                }else{
                    var query = "UPDATE marcas SET nombre='"+req.body.nombre+"',color='"+req.body.color+"',logo_principal='"+req.file.filename+"',fecha_editado='"+formatDate+"' WHERE id="+req.body.id;

                }
                console.log(query);
                var result = await database.executeQuery (res,query);
                
                return result ;
                /*result.then(function(result) {
                    // you can access the result from the promise here
                    res.send(result);
                });*/
    },

    bajaMarca: async function (req, res) {
        
        var query = "UPDATE marcas SET estatus = '-1' WHERE id  = " + req.body.id;
        console.log(query);

        var result = await database.executeQuery(res, query);
        return result;
    }

}