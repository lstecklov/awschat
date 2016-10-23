var app = require('express')();
var http = require('http').Server(app);
var https = require('https').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


app.set('port', process.env.PORT || 3000);

var server = https.listen(app.get('port'), function(){
  console.log('listening on ' +   server.address().port);
});

