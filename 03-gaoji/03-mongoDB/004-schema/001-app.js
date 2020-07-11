//链接数据库
const mongoose = require('mongoose');

const schema = require('./model/app.js');
mongoose.connect('mongodb://127.0.0.1:27017/zhuzhu',{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (err)=>{
	console.log(err)
});

db.once('open', ()=> {
  	console.log("we're connected!");

	schema.create([{name:'tom',age:20,friends:['cat','dog','tomato']}])
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})
});