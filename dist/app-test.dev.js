"use strict";

var express = require("express");

var app = express();

var path = require("path");

var books = [{
  id: 1,
  title: '별주부전',
  writer: '작자미상',
  content: "불법 장기매매",
  src: '/img/byul.jpg'
}, {
  id: 2,
  title: '심청전',
  writer: '작자미상',
  content: "인신매매, 사기",
  src: '/img/sim.jpg'
}, {
  id: 3,
  title: '춘향전',
  writer: '작자미상',
  content: "공권력 남용",
  src: '/img/chun.jpg'
}]; // server 

app.listen(3000, function () {
  console.log("Server listen 127.0.0.1:3000");
}); // set

app.set('view engine', 'pug');
app.set('views', './views'); //middle

app.use('/', express["static"](path.join(__dirname, './public'))); //router

app.get('/list', function (req, res) {
  var pug = {
    title: {
      head: '도서 리스트',
      body: '도서 목록',
      small: '소설'
    },
    lists: [].concat(books)
  };
  res.render('book/list', pug);
});
app.get('/book/:id', function (req, res) {
  var book = books.filter(function (v) {
    return v.id == req.params.id;
  });
  console.log(book);
  var pug = {
    title: {
      head: '상세보기',
      body: book[0].title,
      small: book[0].writer
    },
    lists: [].concat(books),
    book: book[0]
  };
  res.render('book/view', pug);
});