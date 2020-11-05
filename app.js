/** 전역설정 *******************************/
const express = require('express');
const app = express();
const path = require('path');

const books = [
	{id:1, title: '별주부전', writer: '작자미상', content:"불법 장기매매", src:'/img/byul.jpg'},
	{id:2, title: '심청전', writer: '작자미상', content:"인신매매, 사기", src:'/img/sim.jpg'},
	{id:3, title: '춘향전', writer: '작자미상', content:"공권력 남용", src:'/img/chun.jpg'},
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

app.get('/book/create', (req, res) => {
	const pug = {
		css: 'index',
		js: 'index',
		title : {
			head : '도서 리스트 생성',
			body : '도서 목록 만들기',
			small : '리스트 등록할 도서'
		}
	}
	res.render('book/create', pug);
});

app.post('/book/save',(req, res) => {
	console.log(req);
});

app.get(['/book', '/book/list'],(req, res) => {
	const pug = {
		css : 'index',
		js : 'index',
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

app.get('/book/view/:id',(req, res) => {
	const book = books.filter(v => v.id == req.params.id);
	const pug = {
		css : 'index',
		js : 'index',
		title : {
			head : '도서 상세보기',
			body : book[0].title,
			small : book[0].writer
		},
		lists: [
			...books
		],
		book: book[0]

	};
	res.render('book/view', pug);
}); 

app.get('/test', ( req, res)=>{
	const pug = [
		css = 'default',
		js = 'default',

	]
	res.render('test/list.pug', pug);
});