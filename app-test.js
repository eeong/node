const express = require("express");
const app = express();
const path = require("path");
const books = [
	{id:1, title: '별주부전', writer: '작자미상', content:"불법 장기매매", src:'/img/byul.jpg'},
	{id:2, title: '심청전', writer: '작자미상', content:"인신매매, 사기", src:'/img/sim.jpg'},
	{id:3, title: '춘향전', writer: '작자미상', content:"공권력 남용", src:'/img/chun.jpg'},
];

// server 

app.listen(3000, () => {
	console.log("Server listen 127.0.0.1:3000");
})

// set
app.set('view engine','pug');
app.set('views','./views');


//middle
app.use('/', express.static(path.join(__dirname ,'./public')));

//router
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
	const book = books.filter(v => v.id == req.params.id);
	console.log(book);
	const pug = {
		title : {
			head : '상세보기',
			body : book[0].title,
			small : book[0].writer
		},
		lists: [
			...books
		],
		book: book[0]
	};

	res.render('book/view', pug);
})