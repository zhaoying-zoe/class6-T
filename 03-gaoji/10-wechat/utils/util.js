// 接收一个url和一个回调函数
// url:api接口、回调函数:用来设置获取的数据
function getMovieList(url,success){
    wx.request({
        url: url,
        success:function(items){
            var items = formatMovieList(items);
            success(items);
        }
    })
};

// 获取电影数据
function formatMovieList(items){
    // map返回一个新数组
    return items = items.data.subjects.map(function(item){
        return {
            title:item.title,
            stars:StarsToArrat(item.rating.stars),
            coverImage:item.images.large,
            average:item.rating.average,
        }
    })
}
// 处理行行评价
function StarsToArrat(stars){
    // 定义空数组用来存星星数
    /*
        3 : [1,1,1,0,0]
        3.5 : [1,1,1,0,0]
        0 : [0,0,0,0,0]
    */
   // 把传入的字符串stars转为数字类型,并获取第一位数
    var num = parseInt(stars.substring(0,1))
    var arr = [];
    for(var i = 1;i<=5;i++){
        if(i<=num){
            arr.push(1);
        }else{
            arr.push(0);
        }
    }
    // console.log(arr);

    return arr;
}

module.exports = {
    getMovieList:getMovieList,
}
