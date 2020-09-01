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
            stars:item.rating.stars,
            coverImage:item.images.large,
            average:item.rating.average,
        }
    })
}

module.exports = {
    getMovieList:getMovieList,
}
