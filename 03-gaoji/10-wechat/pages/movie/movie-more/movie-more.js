var { getMovieList } = require('../../../utils/util.js')
var app = getApp()
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
        var _this = this
        var type = options.type;
        //获取请求地址,请求数据
        var URL = app.GLOBAL_DATA.URL
        var requestUrl = ''
        if(type == 'inTheaters'){
            requestUrl = URL +'/in_theaters'
        }else if(type == 'comingSoon'){
            requestUrl = URL +'/coming_soon'
        }else if(type == 'top250'){
            requestUrl = URL +'/top250'
        }
        getMovieList(requestUrl,function(data){
            _this.setData({movies:data})
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

    }
})