var express = require('express');
var axios = require('axios');
var app = express();

    app.get('/', function(req, res){
        axios({
            method:'get',
            url:'https://food2fork.com/api/search?key=b9200be3b1915fc8c84d7c7a9b84c9e3'
          })
          .then(data => {
              console.log(data)
              res.send(data.data)
        })
      });
      
      app.listen(3001);

module.exports = app;