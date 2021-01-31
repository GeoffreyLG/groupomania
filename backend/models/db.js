const mysql = require('mysql2');

//connexion mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groupomania',
})

connection.connect(function (err) {
  if (err) {
    console.error('erreur de connexion ' + err.stack);
    return;
  }

  console.log('connecté en tant id ' + connection.threadId);
});


//connection.end();

module.exports = connection;