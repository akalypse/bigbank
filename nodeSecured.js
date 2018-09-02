var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: '123456'
  };
var app = express();
var server = https.createServer(sslOptions, app);

server.listen(8443,'127.0.0.1',function(){
    server.close(function(){
      server.listen(8443,'192.168.43.223')
    })
   });


app.head('/', function (req, res) {
    res.set('Link', '<https://192.168.43.223:4200/pay/payment-manifest.json>; rel=\"payment-method-manifest\"')
    res.end();
});

var options = {
    root: __dirname + '/pay/',    
  };

app.get('/pay/payment-manifest.json', function (req, res) {
    res.sendFile('payment-manifest.json', options);
});

app.get('/pay/app-manifest.json', function (req, res) {
    res.sendFile('app-manifest.json', options);
});
