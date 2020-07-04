const fs = require('fs');

// 异步写文件
// 逐步方法
// 1.读取文件 fs.open(path[, flags[, mode]], callback)
/*
	fs.open('001.txt','a',(err,fd)=>{
		if(err){
			console.log('open file err');
			console.log(err);
		}else{
			// 2.写入文件 fs.write(fd, string[, position[, encoding]], callback)
			fs.write(fd,'#ff6700',(err)=>{
				if(err){
					console.log('write file err');
					console.log(err);
				}else{
					// 3.关闭并修改文件 fs.close(fd, callback)
					fs.close(fd,(err)=>{
						if(err){
							console.log('close file err');
							console.log(err);
						}else{
							console.log('close file success')
						}
					})

				}
			})
		}
	})
	*/

// 合并方法 fs.writeFile(file, data[, options], callback)
fs.writeFile('./001.txt','#ccc',(err)=>{
	if(err){
		console.log('write file err');
		console.log(err);
	}else{
		console.log('write file success');
	}
})


// 异步操作同步化 fsPromises.writeFile(file, data[, options])
fsPromises.writeFile('./001.txt',{flag:'a',encoding:'utf-8'});
