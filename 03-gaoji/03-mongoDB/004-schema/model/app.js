// getting-started.js 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 1.生成文档模型
const kittySchema = new Schema({
	name:{
		type: String,
		required: true,
		enum: ['tom','pdd',],
		maxlength: 4,
		minlength: 2
	},
	age:{
		type: Number,
		min: [15,'年龄必须大于15'],
		max: [100,'年龄不得大于100']
	},
	friends:{
		type: Array,
		required: true	
	},
	phone:{
		type: String,
	    validate: {
			validator: function(val) {
				return /1[35789]\d{9}/.test(val);
			},
			message: props => `${props.value} 是错误的电话号码!`
		}
	},
	_id:{
		type: mongoose.Schema.Types.ObjectId
	}
});

// 2.根据文档模型生成集合
const schema = mongoose.model('schemas', kittySchema);

//导出模块
module.exports = schema;