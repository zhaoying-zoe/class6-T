const fs = require('fs');

// 异步写文件
// 逐步方法
// 1.读取文件 fs.open(path[, flags[, mode]], callback)
	fs.open('./003.txt','r',(err,fd)=>{
		if(err){
			console.log('read file err');
			console.log(err);
		}else{
			// 2.写入文件 fs.read(fd, buffer, offset, length, position, callback)
			const buf = Buffer.alloc(100);
			fs.read(fd,buf,0,20,0,(err)=>{
				if(err){
					console.log(err);
					console.log('read file err');		
				}else{
					// 3.关闭并修改文件 fs.close(fd, callback)
					fs.close(fd,(err)=>{
						if(err){
							console.log(err);
							console.log('close file err');
						}else{
							console.log(buf.toString());
						}
					})
				}

			})
		}
	})

// 合并方法 fs.read(fd, [options,] callback)
fs.read(fd,{flag:'r',encoding:'utf-8'},(err)=>{
	c
});

// 异步操作同步化 fsPromises.writeFile(file, data[, options])
