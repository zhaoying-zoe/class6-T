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

	// 生成实例对象(生成文档)
	// const silence = new Kitten({name:'Silence'});
	// console.log(silence.name); // 'Silence'

	// MyModel.find({ name: 'john', age: { $gte: 18 }});
	
	/*
	Kitten.find({name:'tom',age:{$lt:1008}},(err,docs)=>{
		if(err){
			console.log(err);
		}else{
			console.log(docs);
		}
	});


	// MyModel.find({name:/john/i},null,{skip:10},function(err,docs){});
	Kitten.find({name:'tom'},{skip:0},function(err,docs){
		if(err){
			console.log(err);
		}else{
			console.log(docs);
		}
	});



	// Adventure.findById(id, 'name length', function (err, adventure) {});
	Kitten.findById('5f082619b43c1c3d1448bc27','name',function(err,docs){
		if(err){
			console.log('err...',err);
		}else{
			console.log('success documents...',docs);
		}
	});


	// Adventure.findOne({type:'iphone'},function(err,adventure){});
	Kitten.findOne({name:'tom'},function(err,docs){
		if(err){
			console.log('err...',err);
		}else{
			console.log('success documents...',docs);
		}
	});

	*/


	// Adventure.findOne({ type: 'iphone'},'name',function(err,adventure){});
	Kitten.findOne({name:'tom'},'-age',function(err,docs){
		if(err){
			console.log('err...',err);
		}else{
			console.log('success documents...',docs);
		}
	});
});

