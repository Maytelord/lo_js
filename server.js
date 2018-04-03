const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);





server.listen(port);



/*
Host: 40.84.154.6:3389

Username: mxdare

Password: Lotu8119
*/





    // config for your database
    /*var config = {
        user: 'Mxdare',
        password: 'Root1',
        server: '40.84.154.6',
        database: 'BrandCenter',
        connectionTimeout: '99999' 
    };*/
