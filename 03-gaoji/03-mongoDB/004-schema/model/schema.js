// getting-started.js 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

	// 1.生成文档模型
const kittySchema = new mongoose.Schema({
		title:  String, // String is shorthand for {type: String}
		author: String,
		body:   String,
		comments: [{ body: String, date: Date }],
		date: { type: Date, default: Date.now },
		hidden: Boolean,
		meta: {
			votes: Number,
			favs:  Number
	    }
	});
	// 2.根据文档模型生成集合
const schema = mongoose.model('schema', kittySchema);

//导出模块
module.exports = schema;