var Xray = require('x-ray');
var fs = require('fs');
var x = Xray();

var jsonOutput = {};

fs.readFile("../Resources/Lebensmittelbeschluesse.html", function(err, file) {
    if (err) {
        throw err;
    }

    x(file, ['a@href'])(function(err, data) {

        fs.writeFile("./test.json", JSON.stringify(data), function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

    });
});
