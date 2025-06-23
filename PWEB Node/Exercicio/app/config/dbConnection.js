let sql = require('mssql');

let connSQLServer = function(){
  
    const sqlConfig = {
        user: 'BD2321014', //7 últimos dígitos do seu RA
        password: '',
        database: 'BD', 
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }    
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
}
