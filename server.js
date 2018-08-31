var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var hbs = require("express-handlebars");
var path = require("path");
var PORT = process.env.PORT || 4040;


app.engine("handlebars",hbs({extname: "handlebars", defaultLayout: "main", layoutsDir:__dirname + "/views/layouts/"}));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




app.use(express.static("public"));


var server = app.listen(PORT,listening);

function listening() {
    console.log("listening on:", PORT);
}
