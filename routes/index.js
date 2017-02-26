var express = require('express');
var router = express.Router();
var accountSid = 'ACd8d354e0e3d5690deffaf8fde7f7c888';
var authToken = "7d73da288eee2faea71aa0bef89337d3";
var client = require('twilio')(accountSid, authToken);

var url = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  client.messages.list(function(err, data) {
    data.messages.forEach(function(message) {
        //console.log(message.sid);
        if (message.sid.startsWith("MM")) {
          client.messages(message.sid).media.list(function(err, data) {
              data.mediaList.forEach(function(media) {
				  //console.log(message.body);
                  url.push({url: "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages/" + message.sid + "/Media/" + media.sid, lat: "40.7717637", lng: "-73.9904759", address: message.body});
                  //console.log(url);
              });
          });
        }
    });
  });
  res.render('index', { title: 'FillTheMap', link: JSON.stringify(url) });
});


module.exports = router;