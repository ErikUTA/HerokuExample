const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: '127.0.0.1',        
    database: 'Node',  
    user: 'root',
    password: 'mysql1erik23',
    port: '3308'        
});
    
conexion.connect(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Conexión exitosa");
    }
});    

module.exports = conexion;