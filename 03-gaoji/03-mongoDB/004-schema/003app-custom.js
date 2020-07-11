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

/*
	schema.create([{name:'tom',phone:'15345679745',_id:'5f09789ca720932408a8a174'}])
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})
	*/

	schema.findById({_id:'5f09789ca720932408a8a174'})
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})
});