// producer.js
var log4js = require('log4js');
var logger = log4js.getLogger();

var zmq = require('zmq')
  , sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

var msgpack = require('msgpack5')() // namespace our extensions
  , encode  = msgpack.encode
  , decode  = msgpack.decode
 

setInterval(function(){
  // console.log('sending work');
  var a = {
      "_id" : ("55dbd8d5a41a9b1e02f581c2"),
      "xbm_id" : 10458,
      "username" : "娇娇",
      "openid" : "ooVSouAv22324sdk0Cwg538iBqZPk",
      "nickname" : "cbb娇13628278750",
      "sex" : "2",
      "language" : "zh_CN",
      "city" : "Fuling",
      "province" : "Chongqing",
      "country" : "China",
      "headimgurl" : "http://wx.qlogo.cn/mmopen/D60RqqvBdEtFnQxapHnlrbI28p4nomXDXvGMOxmRw5L3frcjqiad5ZgCyzaqAP44cO4Q8Xs8WdT4uiby26zKU9iauP3mQ/0",
      "unionid" : "oRWRTw0g17235fNBYAUPb1aaXqTA",
      "created_at" : ("2015-08-25T02:54:13.045Z"),
      "privilege" : [],
      "type" : 0,
      "partner_count" : 6,
      "stock_total" : 303,
      "id_card_status" : 2,
      "__v" : 0,
      "invite_code" : "860343417",
      "weixin_name" : "t4334o5411",
      "phone_number" : 122243243243,
      "address" : "重庆市-重庆市-涪陵区香江豪庭3—12—7"
  }
  
  var b = encode(a)//.toString('hex');
  
  logger.debug("Some debug messages" + b);
  sock.send(b);
}, 5);