//链接数据库
const mongoose = require('mongoose');

const Kitten = require('./module/user.js');
mongoose.connect('mongodb://127.0.0.1:27017/zhuzhu',{useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (err)=>{
	console.log(err)
	throw err;
});

db.once('open', ()=> {
  	console.log("we're connected!");

	Kitten.findOne({name:'tom'},function(err,docs){
		if(err){
			console.log('err...',err);
		}else{
			console.log('success documents...',docs);
		}
	});
});




//创建数据用
/*
const getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}
const names = ["Tom","Leo","Anmy","Kitty","Jane","Alice","Lucy","Kimi"];
const majors = ["computer","song","art","elec","sport","law"];
const getName = ()=>{
	return names[getRandom(0,names.length-1)];
};
const getMajor = ()=>{
	return majors[getRandom(0,majors.length-1)];
};
const arrData = [];
for(var i = 0;i<10;i++){
	arrData.push({name:getName(),age:getRandom(20,100),major:getMajor()})
}
*/