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
		age:Number
	});
	// 2.根据文档模型生成集合
	const Kitten = mongoose.model('Kitten', kittySchema);

	// 生成实例对象
	const silence = new Kitten({name:'Silence',age:29});
	// console.log(silence.name); // 'Silence'

	silence.save(function(err,fluffy){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log('success')
		}
	});
});

