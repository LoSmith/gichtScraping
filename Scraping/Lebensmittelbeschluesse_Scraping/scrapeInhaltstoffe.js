var Xray = require('x-ray');
var fs = require('fs');
var x = Xray();

var jsonOutput = {};
var counter = 0;

fs.readFile("somelinks.html", function(err, file) {
    if (err) {
        throw err;
    }

    //json = JSON.parse(file);
    //console.log(json);

    x(file, ['a@href']).paginate('a@href')(function(err, data) {

        console.log(data);

        fs.writeFile("output.json", JSON.stringify(data), function(err){
          if (err) {throw err};
        });
    });
});
