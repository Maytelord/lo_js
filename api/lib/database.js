const express = require('express');
var sql = require("mssql");

////may
//var dbConfig = {
//    user: 'sa',
//    password: 'may',
//    server: '192.168.10.98', 
//    database: 'prueba' 
//};


var dbConfig ={
	user: 'sa',
		password: 'may',
			server: 'localhost',
				database: 'Logrand',
					port: '51916',
						dialect: "mssql",
							dialectOptions: {
		"instanceName": "SQLEXPRESS"
	}
};






async function ConnectionSql(res, query, pparameters) {

	    return new Promise((resolve, reject) => {
			if (pparameters) {
				new sql.ConnectionPool(dbConfig).connect().then(pool => {
					var request = pool.request();

					console.log("ConnectionSql con parametros jose 2");

					// Add parameters
					pparameters.forEach(function (p) {
						console.log("ConnectionSql con parametros: nombre: " + p.name);
						//console.log("ConnectionSql con parametros: tipo: " + p.sqltype);
						console.log("ConnectionSql con parametros: valor: " + p.value);
						//request.input(p.name, p.sqltype, p.value);

						request.input(p.name, p.value);
					});


					return request.execute(query)
				}).then(result => {

					resolve(result.recordset);
					sql.close();

				}).catch(err => {
					console.log("ConnectionSql weee");

					reject(err)
					sql.close();
				});
			} else {
				new sql.ConnectionPool(dbConfig).connect().then(pool => {
					return pool.request().query(query)
				}).then(result => {
					//res.send(result.recordset);

					resolve(result.recordset);
					//return result.recordset;
					sql.close();
				}).catch(err => {

					reject(err)
					sql.close();
				});
			}
	    });


	}

module.exports ={
	//Function to connect to database and execute query
	//executeQuerybk: function (res, query, parameters){             
	//     sql.connect(dbConfig, function (err) {
	//         if (err) {   
	//                     console.log("Error while connecting database :- " + err);
	//                     res.send(err);
	//                  }
	//                  else {
	//                         // create Request object
	//			 var request = new sql.Request();
				 

	//                         // query to the database
	//                         request.query(query, function (err, answer) {
	//                           if (err) {
	//                                      console.log("Error while querying database :- " + err);
	//                                      res.send(err);
	//                                     }
	//                                     else {
	//                                       res.send(answer);
	//                                            }
	//                               });
	//                       }
	//      });           
	//},

	executeQuery: async function (res, query, parameters) {

		var result = await ConnectionSql(res, query, parameters);
	  return result;
	}


}