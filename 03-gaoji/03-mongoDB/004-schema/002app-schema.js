//链接数据库
const mongoose = require('mongoose');

const schema = require('./model/schema.js');
mongoose.connect('mongodb://127.0.0.1:27017/zhuzhu',{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (err)=>{
	console.log(err)
});

db.once('open', ()=> {
  	console.log("we're connected!");

	schema.create([{name:'pdd',age:203,admin:true}])
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})
});