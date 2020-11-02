const express = require('express');
const app = express();
app.listen(3000);

app.get('/',(req,res)=>{
	res.send('<h1>hello world</h1>');
});

app.get('/hi',(req,res)=>{
	res.send('<h1>hi jihong</h1>');
});