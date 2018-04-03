const express = require('express');
var sql = require("mssql");

var dbConfig = {
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



	async function ConnectionSql(res,query) {

	    return new Promise((resolve, reject) => {

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
	    });


	}

module.exports ={
	//Function to connect to database and execute query
	executeQuerybk : function(res, query){             
	     sql.connect(dbConfig, function (err) {
	         if (err) {   
	                     console.log("Error while connecting database :- " + err);
	                     res.send(err);
	                  }
	                  else {
	                         // create Request object
	                         var request = new sql.Request();
	                         // query to the database
	                         request.query(query, function (err, answer) {
	                           if (err) {
	                                      console.log("Error while querying database :- " + err);
	                                      res.send(err);
	                                     }
	                                     else {
	                                       res.send(answer);
	                                            }
	                               });
	                       }
	      });           
	},

	executeQuery : async function(res,query){
	  var result = await ConnectionSql(res,query);
	  return result;
	  //console.log('Woo done', result)
	}


}

/*
new sql.ConnectionPool(config).connect().then(pool => {
  return pool.request().query("")
  }).then(result => {
    let rows = result.recordset
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(rows);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: "${err}"})
    sql.close();
  });
});*/

/*
async function execute2(query) {

    return new Promise((resolve, reject) => {

        new sql.ConnectionPool(dbConfig).connect().then(pool => {
            return pool.request().query(query)
        }).then(result => {

            resolve(result.recordset);

            sql.close();
        }).catch(err => {

            reject(err)
            sql.close();
        });
    });


}*/


/*
app.get('/', function (req, res) {
   
    var sql = require("mssql");


    var config = {
        user: 'sa',
        password: 'may',
        server: '192.168.10.101', 
        database: 'prueba' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from marcas', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});*/