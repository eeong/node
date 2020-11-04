/** 전역설정 *******************************/
const express = require('express');
const app = express();
const path = require('path');

const books = [
	{id:1, title: '별주부전', writer: '작자미상', content:"불법 장기매매"},
	{id:2, title: '심청전', writer: '작자미상', content:"인신매매, 사기"},
	{id:3, title: '춘향전', writer: '작자미상', content:"공권력 남용"},
];

/** 서버구동 *******************************/
app.listen(3000, () => {
	console.log("=====================");
	console.log("http://127.0.0.1:3000");
	console.log("=====================");
});

/** 설정 *******************************/
app.set('view engine', 'pug');
app.set('views','./views');
app.locals.pretty = true;

/** 라우터 *******************************/
app.use('/', express.static(path.join(__dirname, './public')));

app.get('/list',(req, res) => {
	const pug = {
		title : {
			head : '도서 리스트',
			body : '도서 목록',
			small : '소설'
		},
		lists: [
			...books
		]
	};
	res.render('book/list', pug);
}); 

app.get('/book/:id',(req, res) => {
	const pug = {
		title : {
			head : '도서 리스트',
			body : '도서 목록',
			small : '소설'
		},
		lists: [
			...books
		]
	};
	res.render('book/view', pug);
}); 