var usd = 1;
var nzd = 0.64;

function compute(){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bed748066464b7',
    password : '303caf2b',
    database : 'heroku_ca91be7a53f5ea4'
    });

    connection.connect();

    connection.query('SELECT * from heroku_ca91be7a53f5ea4.currency WHERE curr_name = nzd', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', row[2]);
    else
        console.log('Error while performing Query.');
    });

    connection.end();
}
