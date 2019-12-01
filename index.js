var bodyParser = require('body-parser');
// var usd = 1;
// var nzd = 0.64;

function compute(){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bed748066464b7',
    password : '303caf2b',
    database : 'heroku_ca91be7a53f5ea4'
    });

    connection.connect();


    var request = new XMLHttpRequest();

    connection.query('SELECT * from heroku_ca91be7a53f5ea4.currency WHERE curr_name = nzd', function(err, rows, fields) {
    if (!err)
        // get number from user
        request.open("POST", "currency.html?number");
        
        //once ready add to result area
        request.onreadystatechange = function() {
            // Check if the request is complete and was successful
            if(this.readyState === 4 && this.status === 200) {
                // Inserting response from server into result div
                bodyParser.urlencoded({ extended: false })
                var resultNum = req.body.ID;
                document.getElementById("result").innerHTML = resultNum;
            }

            // send data out
        request.send()
    else
        console.log('Error while performing Query.');
    });

    connection.end();
}

// ajax code from https://stackoverflow.com/questions/45753417/ajax-call-returns-values-and-my-html-page
// useful?
// $.ajax({
//     type: "POST",
//     url: "@Url.Action("compute", "Item")",
//     data: '{ "imageData" : "' + image + '" }',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     success: function (success) {
//         alert('Success ' + success.responseText);
//     },
//     error: function (response) {
//         alert(response.responseText);
//     }
// });
