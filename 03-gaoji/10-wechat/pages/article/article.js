// pages/article/article.js
var { articles } = require('../../db/index.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        name:'tom',
        arr:[
            {
                name:'zhuzhu',
            },
            {
                name:'xiaozhuzhu',
            }
        ],
        /* 文章列表数据 */
        articles:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 页面加载完毕后获取数据
        // console.log(this.data);
        // this.data.articles = articles;// 错误的写法
        this.setData({articles:articles},function(){
            // 异步
            // console.log('异步');
        })
        // 同步
        // console.log('同步');
        
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('article onReady ...');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('article onShow ...');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // console.log('article onHide ...');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // console.log('article onUnload ...');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // console.log('article onPullDownRefresh ...');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // console.log('article onReachBottom ...');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        // console.log('article onShareAppMessage ...');
    },
    onPageScroll: function() {
        // 页面滚动时执行
        // console.log('article onPageScroll ...');
    },
    onResize: function() {
        // 页面尺寸变化时执行
        // console.log('article onResize ...');
    },
    onShareAppMessage() {
        return {
          title: 'swiper',
          path: 'page/component/pages/swiper/swiper'
        }
    },
    changeIndicatorDots() {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },

    changeAutoplay() {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },

    intervalChange(e) {
        this.setData({
            interval: e.detail.value
        })
    },

    durationChange(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    topArticle:function(ev){
        var articleId = ev.currentTarget.dataset.articleId
        // console.log(ev.currentTarget.dataset);
        // console.log(articleId);
        // console.log(wx);
        wx.navigateTo({
            url:'/pages/article/article-detail/article-detail?articleId=' + articleId,
        })
    }
})