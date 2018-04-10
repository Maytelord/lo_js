const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');

module.exports = {
	getTema : async function(res){
		var query = " select" +
			" Tema.id," +
			" Tema.nombre," +
			" Tema.categoria," +			 
			" Tema.id_marca_subseccion," +
			" SubSeccion.nombre as 'SubSeccionNombre'," +
			" Marca.nombre as 'MarcaNombre'," +
			" Marca.id as 'id_marca'" +
			" from Tema " +
			" join Marca_Subseccion ON Tema.id_marca_subseccion = Marca_Subseccion.id" +
			" join SubSeccion ON Marca_Subseccion.subseccion_id = SubSeccion.id" +
			" join Marca ON Marca_Subseccion.marca_id = Marca.id" +
			" where Tema.estatus = 1";
				console.log(query);
                var result = await database.executeQuery (res,query);
                return result ;
	},

	getMarcaSubseccion: async function (req, res) {
		var query = " select Marca_Subseccion.id,marca_id,subseccion_id,nombre from Marca_Subseccion" +
			" join SubSeccion ON Marca_Subseccion.subseccion_id = SubSeccion.id" +
			" where marca_id = " + req.body.id;

		console.log(query);
		var result = await database.executeQuery(res, query);
		return result;
	},


	insertarTema : async function(req, res){
				var now = new Date();
				var formatDate = dateformat.dateFormat(now, "isoDateTime");
				var query = "INSERT INTO [tema] (nombre,categoria,id_marca_subseccion,fecha_creado,estatus)" +
					" VALUES('" + req.body.nombre + "'," +
					" " + req.body.categoria + "," +
					" " + req.body.id_marca_subseccion + "," +
					" '" + formatDate + "'," +
					" 1)";
				console.log(query);
                var result = await database.executeQuery (res,query);                
                return result ;
	},

    cambiarTema : async function(req, res){
                var now = new Date();

                var formatDate = dateformat.dateFormat(now, "isoDateTime");

				var query = "UPDATE tema SET" +
					" nombre='" + req.body.nombre + "'," +
					" categoria='" + req.body.categoria + "'," +
					" id_marca_subseccion='" + req.body.id_marca_subseccion + "'," +
					" fecha_editado = '" + formatDate + "'" +
					" WHERE id= " + req.body.id;
				
				console.log(query);

                var result = await database.executeQuery (res,query);
                
                return result ;
    },

    bajaTema: async function (req, res) {
        var query = "UPDATE Tema" +
            " SET estatus = 0"  +
            " WHERE id  = " + req.body.id;
        console.log(query);

        var result = await database.executeQuery(res, query);
        return result;
    }

}