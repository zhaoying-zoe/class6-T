const mongoose = require('mongoose');

//1.生成文档模型
const ArticleSchema = new mongoose.Schema({
	title:{
  		type:String
  	},
    intro:{
        type:String
    },
    user:{
    	type:mongoose.Schema.Types.ObjectId, // 类型是作者的id
    	ref:'user' // 产生关联
    },
    category:{
		type:mongoose.Schema.Types.ObjectId, // 类型是作者的id
    	ref:'category' // 产生关联
    },
    createdAt:{
    	type:Date,
    	default:Date.now
    },
    click:{
    	type:Number,
		default:0
    },
    content:{
    	type:String
    }
});


//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型ArticleSchema
const ArticleModel = mongoose.model('article',ArticleSchema);


module.exports = ArticleModel;