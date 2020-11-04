"use strict";

/** 전역설정 *******************************/
var express = require('express');

var app = express();

var path = require('path');
/** 서버구동 *******************************/


app.listen(3000, function () {
  console.log("=====================");
  console.log("http://127.0.0.1:3000");
  console.log("=====================");
});
/** 설정 *******************************/

app.set('view engine', 'pug');
app.set('views', './views');
/** 라우터 *******************************/

app.use('/', express["static"](path.join(__dirname, './public')));
app.get('/sample', function (req, res) {
  res.render('sample');
});