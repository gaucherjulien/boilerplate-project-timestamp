// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get ("/api/:date?", (req, res) => {

  s = req.params.date;

  if (!s) {
    d = new Date();
  } else if (isNaN (s)) {
    d = new Date (s);
  } else {
    d = new Date (Number (s));
  }

  if (isNaN (d)) {
    res.send ({"error": d.toString()});
  } else {  
    res.send ({
      unix: Date.parse (d),
      utc: d
    });
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
