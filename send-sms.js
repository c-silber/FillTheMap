// Twilio Credentials
var accountSid = 'ACd8d354e0e3d5690deffaf8fde7f7c888';
var authToken = '7d73da288eee2faea71aa0bef89337d3';

// require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
/*
client.messages
  .create({
    to: '+19732203232',
    from: '+12402930520',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then((message) => console.log(message.sid));
*/
  client.messages.create({
    to: "+18454990993",
    from: "+12402930520",
    body: "We have receieved your message! Thank you :)",
}, function(err, message) {
    console.log(message.sid);
});
