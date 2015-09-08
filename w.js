// worker.js
var log4js = require('log4js');
var logger = log4js.getLogger();

var zmq = require('zmq')
  , sock = zmq.socket('pull');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

var msgpack = require('msgpack5')() // namespace our extensions
  , encode  = msgpack.encode
  , decode  = msgpack.decode


var i = 0;
sock.on('message', function(msg){
  i++;
  logger.debug("Some debug messages" + msg);
  var o = decode(msg)
  
  var json = JSON.stringify(o);
  json = JSON.parse(json) 
  
  if(i % 2==0){
      console.dir(json._id);
  }else if(i%3 ==0){
      console.dir(json.nickname);
  }else{
      console.dir(json.headimgurl);
  }
  
  
});