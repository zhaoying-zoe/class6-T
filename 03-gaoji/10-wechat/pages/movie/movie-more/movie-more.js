var { getMovieList } = require('../../../utils/util.js')
var app = getApp()
Page({

    /*
        页面的初始数据
    */
    data: {
        requestUrl:''
    },
    /*
        生命周期函数--监听页面加载
    */
    onLoad: function (options) {
        var _this = this;
        var type = options.type;
        //获取请求地址,请求数据
        var URL = app.GLOBAL_DATA.URL;
        var requestUrl = '';
        var setNavigationBarTitle = '';
        if(type == 'inTheaters'){
            requestUrl = URL +'/in_theaters'
            setNavigationBarTitle = '正在热映'
        }else if(type == 'comingSoon'){
            requestUrl = URL +'/coming_soon'
            setNavigationBarTitle = '即将上映'
        }else if(type == 'top250'){
            requestUrl = URL +'/top250'
            setNavigationBarTitle = 'Top250'
        }
        this.data.requestUrl = requestUrl;
        // 动态设置电影更多页标题
        wx.setNavigationBarTitle({
            title: setNavigationBarTitle
        })
        // 显示获取数据loading
        wx.showNavigationBarLoading()
        getMovieList(requestUrl,function(data){
            _this.setData({movies:data},function(){
                // 隐藏获取数据loading
                wx.hideNavigationBarLoading();
            })
        })
    },
    // 页面相关事件处理函数--监听用户下拉动作
    // 下拉页面获取数据
    onPullDownRefresh: function () {
        var _this = this;
        wx.showNavigationBarLoading()
        getMovieList(_this.data.requestUrl,function(data){
            _this.setData({movies:data},function(){
                // 隐藏获取数据loading
                wx.hideNavigationBarLoading();
            })
        })
    },
    // 页面上拉触底事件的处理函数
    onReachBottom: function () {
        console.log(566);
    },
})