const mongoose = require('mongoose');
const moment = require('moment');
const pagination = require('../util/pagination.js');


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
    // 定义时间虚拟属性
    ArticleSchema.virtual('createdTime').get(function(){
        // return this.createdAt.toLocaleString(); // 第二种格式化时间的方式
        return moment(this.createdAt).format('YYYY - MM - DD HH:mm:ss');
    })

    // 定义获取文章数据分页静态方法
    ArticleSchema.statics.getPaginationData = function(req,query={}){
        const options = {
            page:req.query.page * 1,
            model:this,
            query:query,
            projection:'-__v',
            sort:{_id:1},
            populates:[{path:'user',select:'username'},{path:'category',select:'name'}]
        }
        return pagination(options)
    }




//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型ArticleSchema
const ArticleModel = mongoose.model('article',ArticleSchema);


module.exports = ArticleModel;