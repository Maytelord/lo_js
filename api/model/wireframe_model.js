const express = require('express');
const database = require('../lib/database');
const dateformat = require('../lib/dateFormat');
var sql = require("mssql");

module.exports = {

	gettema: async function (req, res) {
		var id = req.body.id; 
		id = 2;
		var idc = req.body.idc;
		idc = 1;

	
		var parameters = [
			{ name: 'id', sqltype: sql.NVarChar, value: id },
			{ name: 'idc', sqltype: sql.NVarChar, value: idc }
		];
		var query = "wfgettema";
		var tema = await database.executeQuery(res, query, parameters);     

		console.log("T id: " + tema[0].id);

		var i;
		var arreglotemas = [];

		var arregloceldas = [];




		
		arregloceldas = await this.getCelda(res, tema[0].id);
		console.log("L: " + arregloceldas.length);

		


		

		var temafinal = {
			id: tema[0].id,
			nombre: tema[0].nombre,
			celdas: arregloceldas
		};
		arreglotemas.push(temafinal);
		var mymenu = {
			temas: arreglotemas
		};

		return mymenu;
	},
	getCelda: async function (res, id) {

		var query = "wfgetCelda";
		var parameters = [
			{ name: 'id', sqltype: sql.NVarChar, value: id }
		];
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);     

		return result;
	},

	getMenu: async function (req, res) {

		var result = this.getSubseccion(req, res);
		//var result2 = result.substr(1, result.length - 1);

		return result;
	},

	getSeccion: async function (res, id) {
		var query = "wfgetSeccion";
		var parameters = [
			{ name: 'id', sqltype: sql.NVarChar, value: id }
		];
		console.log(query);
		var result = await database.executeQuery(res, query, parameters);    

		return result;
	},
	getSubseccion: async function (req,res) {
		var query = " select subseccion.id, SubSeccion.id_seccion, nombre from Marca_Subseccion " +
			" join subseccion on Marca_Subseccion.subseccion_id = SubSeccion.id" +
			" where marca_id = 1002 AND estatus = '1'";
		var result = await database.executeQuery(res, query);
		var i;
		var seccionesarr = [];

		
		

		for (i = 0; i < result.length; i++){		
			var tempres = await this.getSeccion(res, result[i].id_seccion);
			console.log("L: " + seccionesarr.length);
			if (seccionesarr.length > 0)
				for (j = 0; j < seccionesarr.length; j++) {
					console.log(seccionesarr[j][0].id + " = " + tempres[0].id);
					if (seccionesarr[j][0].id != tempres[0].id)
						seccionesarr[i] = tempres;
				}
			else
				seccionesarr[i] = tempres;
		}


		var secciones = [];
		for (i = 0; i < seccionesarr.length; i++) {
			var subsecciones = [];
			for (j = 0; j < result.length; j++) {
				var subseccion = {
					id: result[j].id,
					nombre: result[j].nombre,
				};
				if (result[j].id_seccion == seccionesarr[i][0].id)
					subsecciones.push(subseccion);
			}
			var seccion = {
				id: seccionesarr[i][0].id,
				nombre: seccionesarr[i][0].nombre,
				subseccion: subsecciones
			};
			secciones.push(seccion);
		}
		var mymenu = {
			secciones: secciones
		};
		
		
		//console.log(JSON.parse(result));
		return mymenu;
	},
	getceldaimage: async function (res, id) {
		var query = "select * from Celda_Preview where id = 5";
		console.log(query);
		var result = await database.executeQuery(res, query);

		console.log(result[0].archivo);
		return result[0].archivo;
	}
}