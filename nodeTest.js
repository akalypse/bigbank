var express = require('express')
, http = require('http')
, app = express()
, server = http.createServer(app)
app.head('/',function(req,res){
    res.write("Link: </pay/payment-manifest.json>; rel=\"payment-method-manifest\"");
    res.end();
});

server.listen(8000,'127.0.0.1',function(){
    server.close(function(){
      server.listen(8001,'192.168.43.223')
    })
   })