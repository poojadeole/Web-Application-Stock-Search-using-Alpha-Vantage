const express = require('express')
const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', function (req, res, next) {
  console.log(req.query.symbol);
  console.log(req.query.indicator);

  if(req.query.indicator == "SMA"){
    var fetch = require('node-fetch');
    fetch('https://www.alphavantage.co/query?function=SMA&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        display(json);
    })
function display(json){
  res.send(json);
}
  }

  else if(req.query.indicator == "EMA"){
    var fetch = require('node-fetch');
    fetch('https://www.alphavantage.co/query?function=EMA&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        display(json);
    })
function display(json){
  res.send(json);
}


  }
  else if(req.query.indicator == "STOCH"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=STOCH&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }
  else if(req.query.indicator == "RSI"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=RSI&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }
  else if(req.query.indicator == "ADX"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=ADX&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }

  else if(req.query.indicator == "CCI"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=CCI&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }
  else if(req.query.indicator == "BBANDS"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=BBANDS&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }
  else if(req.query.indicator == "MACD"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=MACD&symbol='+req.query.symbol+'&interval=daily&time_period=10&series_type=open&apikey=US5US3OS067EER9S')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }

  else if(req.query.indicator == "Price"){
          var fetch = require('node-fetch');
          fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+req.query.symbol+'&apikey=US5US3OS067EER9S&outputsize=full')
          .then(function(response){
              return response.json();
          })
          .then(function(json){
              console.log(json);
              display(json);
          })
      function display(json){
        res.send(json);
      }
  }

  else if(req.query.indicator == "XML"){
    var fetch = require('node-fetch');
    fetch('https://seekingalpha.com/api/sa/combined/'+req.query.symbol+'.xml')
    .then(function(response) {
      return response.text()
    })
    .then(function(text) {
      passThis(text);
      //console.log(text);
    });

    // function parseXML(text){
    //   var parseString = require('xml2js').parseString;
    //   var xml = text;
    //   parseString(xml, function (err, result) {
    //     passThis(result);
    // //  console.dir(JSON.stringify(result));
    //   });
    // }
    function passThis(result){
      res.send(result);
    }

      }

      else{
        console.log("in here");
        var fetch = require('node-fetch');
        fetch('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input='+req.query.sym)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
            display(json);
        })
    function display(json){
      res.send(json);
    }


      }

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
