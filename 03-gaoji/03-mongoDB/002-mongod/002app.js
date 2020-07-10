

// 引入mongodb的构造函数
const MongoClient = require('mongodb').MongoClient;
// 建立连接数据库的地址
const uri = "mongodb://127.0.0.1:27017";
// 建立mongodb的实例对象
const client = new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology:true});
// console.log(client)
// 调用实例对象上的方法
client.connect(err => {
	// 1.连接
	dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});