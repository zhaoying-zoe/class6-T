// 获取后台数据库的数据
/* 
    分页:由前台发送的page来决定
    limit:2
    约定:skip (page - 1)*limit
*/

    /*
    options = {
        page:当前显示的页码,
        model:查询集合的名称,
        query:查询条件,
        projection:投影,
        sort:排序,
        populates:关联查询
    }
    */
   
async function pagination(options){
    let { page,model,query,projection,sort,populates } = options;
    const limit = 2;
    // console.log(page);
    if(isNaN(page)){
        page = 1;
    }
    // 设置上一页边界控制
    if(page == 0){
        page = 1;
    }
    // 获取数据库中数据的总条数
    const counts = await model.countDocuments(query)
    // console.log(counts);// 11 个数据
    // 定义页码总数
    let pages = Math.ceil(counts/limit);
    // console.log(pages);/ 6页
    // 定一下一页边界控制
    if(page >= pages){
        page = pages
    }
    // 当没有数据时,处理找不到数据的bug
    if(page == 0){
        page = 1;
    }
    let list = [];// 定义数组用来存页码总数
    for(let i = 1;i<=pages;i++){
        list.push(i)
    }

    // 跳过数据的条数
    let skip = (page - 1)*limit;

    // 重新定义函数
    let result = model.find(query,projection);
    // 关联查询前需判断
    if(populates){
        populates.forEach((populate)=>{
            // 进行关联查询
            result = result.populate(populate);
        })
    }
    const docs = await result.skip(skip).limit(limit).sort(sort)
    return {
        docs,
        page,
        list,
        pages
    }
}

module.exports = pagination;
