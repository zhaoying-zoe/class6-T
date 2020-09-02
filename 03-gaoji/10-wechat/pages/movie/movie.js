// pages/movie/movie.js
var { getMovieList } = require('../../utils/util.js')
var APP = getApp()
// console.log(APP);

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        var URL = APP.GLOBAL_DATA.URL
        var inTheatersUrl = URL + '/in_theaters?start=3&count=3';
        var comingSoonUrl = URL + '/coming_soon?start=6&count=3';
        var top250Url = URL + '/top250?start=6&count=3';
        getMovieList(inTheatersUrl,function(items){
            _this.setData({inTheaters:items})
        })
        getMovieList(comingSoonUrl,function(items){
            _this.setData({comingSoon:items})
        })
        getMovieList(top250Url,function(items){
            _this.setData({top250:items})
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    /*
    点击按钮,查看更多电影  
    */
   tapMore:function(ev){
       // 获取当前页面的相关参数
       var type = ev.target.dataset.type;
       wx.navigateTo({
           url:'/pages/movie/movie-more/movie-more?type='+type
       })
   }
})