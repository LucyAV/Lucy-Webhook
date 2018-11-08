console.log("Server is starting...");

var express = require("express");
var cors = require("cors");
var https = require("https");
var fs = require("fs");

var app = express();
app.use(cors());

var connection;
var api_token;

var port = 2222;

const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log('server running at ' + port)
});

app.use("/lucy", handleWebHook);


app.use("/", function(request, response) {
  response.send("Wernerfindeniggggg");
});

function handleWebHook(request, response)
{
  console.log(request.data);
  response.send({"Peter": "Rendl"});

}