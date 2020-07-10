// getting-started.js 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/zhuzhu',{useNewUrlParser:true,useUnifiedTopology: true});

// 建立集合
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function(){
	// 1.生成文档模型
	const kittySchema = new mongoose.Schema({
		name: String,
		age: Number
	});
	// 2.根据文档模型生成集合
	const Kitten = mongoose.model('Kitten', kittySchema);
	
	let getData = (min,max)=>{
		return Math.round(min - Math.random()*max)
	}

	const names = ['tom','bob','carry','doble','pdd','骚男','tailand']
	names[0].getData();

	/*
	// 生成实例对象(生成文档)
	const silence = new Kitten({name:'Silence'});
	// console.log(silence.name); // 'Silence'

	// Model.prototype.save()
	silence.save((err,docs)=>{
		if(err){
			console.log('save err');
		}else{
			console.log('success docs')
		}
	})
	*/

	// Model.insertMany()
	/*
	Kitten.insertMany([{name:'tom',age:108}])
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})
	*/

	// Model.create()
	Kitten.create([{name:'tom',age:108},{name:'pdd',age:203}])
	.then((data)=>{
		console.log(data);
	})
	.catch((err)=>{
		console.log(err)
	})


});

