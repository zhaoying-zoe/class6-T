// pages/article/article-detail/article-detail.js
// 引入文章数据
var articles = require('../../../db/index.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 背景音乐默认不播放
        ismusic:true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var articleId = options.articleId;
        var article = articles.articles[articleId];
        // 处理文章收藏
        var isCollected = false;

        // 处理背景播放
        var backgroundAudioManager =  wx.getBackgroundAudioManager()
        // 监听背景音频播放事件
        backgroundAudioManager.onPlay(function(){
            this.setData({ismusic:false});
        }.bind(this))
        // 监听背景音频暂停事件
        backgroundAudioManager.onPause(function(){
            this.setData({ismusic:true});
        }.bind(this))
        
        // 动态处理文章详情
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
            // var data = {};
            // data[articleId] = false;
            // wx.setStorageSync('articles_collection',data);
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
        var backgroundAudioManager =  wx.getBackgroundAudioManager()
        // 如果音乐播放着
        if(!this.data.ismusic){
            backgroundAudioManager.pause();
            // 改变播放音乐图标(不播放)
            // this.setData({music:true})
        }else{// 如果音乐停止了
            /*
            backgroundAudioManager.title = '飞鸟和蝉';
            backgroundAudioManager.src = 'http://mp.111ttt.cn/mp3music/144152379.mp3';
            backgroundAudioManager.coverImgUrl = 'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed2e73f2c9ce559001a18b87d64dce?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5'
            */
            // 动态加载数据
            // console.log(this.data);
            backgroundAudioManager.title = this.data.music.title;
            backgroundAudioManager.src = this.data.music.src;
            backgroundAudioManager.coverImgUrl = this.data.music.coverImgUrl;
            // 改变播放音乐图标(播放)
            // this.setData({music:false});
        }
    }
})