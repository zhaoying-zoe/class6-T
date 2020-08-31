// pages/article/article-detail/article-detail.js
// 引入文章数据
var articles = require('../../../db/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        music:true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var articleId = options.articleId;
        var article = articles.articles[articleId];
        // 处理文章收藏
        var isCollected = false;
        this.setData({...article,isCollected})
        // console.log(articles.articles)
        // console.log(article)

        // 获取文章收藏状态
        var articles_collection = wx.getStorageSync('articles_collection');
        // console.log(articles_collection);
        // 如果有文章收藏状态
        if(articles_collection){
            
        }
        // 如果没有文章收藏状态,初始化收藏状态
        else{
            /*
                {
                    data:true,
                }
            */
            var data = {};
            data[articleId] = false;
            wx.setStorageSync('articles_collection',data);
        }
        // 加载文章状态
        // 1. 设置收藏storage
        // wx.setStorageSync('isCollected',{})
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
    topCollecd:function(){
        // console.log('topCollecd');
        // 设置Storage
        // wx.setStorageSync('key', 'value')
        // var value = wx.getStorageSync('key')
        // console.log(value);
        
    },
    // 文章分享
    shareArticle:function(){
        var itemList = ['分享到QQ','分享到空间','分享到微博']
        wx.showActionSheet({
            itemList: itemList,
            success (res) {
                wx.showToast({
                    title: '分享成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail (res) {
                wx.showToast({
                    title: '分享失败,笨比',
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    // 背景音乐播放
    tapMusic:function(){
        // 获取背景播放器
        var BackgroundAudioManager =  wx.getBackgroundAudioManager();
        // console.log(BackgroundAudioManager());
        // 如果音乐播放着
        if(!this.data.music){
            console.log(1);

        }
        // 如果音乐停止了
        else{
            console.log(2);
            BackgroundAudioManager.title = '飞鸟和蝉';
            BackgroundAudioManager.src = 'http://mp.111ttt.cn/mp3music/144152379.mp3';
            BackgroundAudioManager.play();
            backgroundAudioManager.coverImgUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2972743467,129165969&fm=26&gp=0.jpg'
            
        }
    }
})