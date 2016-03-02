/**
 * Created by yangyusenhit on 2016/3/1.
 */
var server  = require("./server");
var router = require("./router");
var actionServer = require("./actionServer");

server.start(router,actionServer);