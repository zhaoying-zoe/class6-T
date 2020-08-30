// pages/article/article.js
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
        articles:[
            {
                headPortrait:'/pages/images/avatar/u1.jpg',
                author:'小猪',
                time:'2天前',
                avatar:'/pages/images/avatar/u1.jpg',
                title:'我是文章标题',
                mainImage:'/pages/images/article/a1.jpg',
                desc:'我是文章1描述',
                star:20,
                view:'56'
            },
            {
                headPortrait:'/pages/images/avatar/u2.jpg',
                author:'小明',
                time:'3天前',
                avatar:'/pages/images/avatar/u2.jpg',
                title:'我是文章标题',
                mainImage:'/pages/images/article/a2.jpg',
                desc:'我是文章2描述',
                star:20,
                view:'56'
            },
            {
                headPortrait:'/pages/images/avatar/u3.jpg',
                author:'小王',
                time:'4天前',
                avatar:'/pages/images/avatar/u3.jpg',
                title:'我是文章标题',
                mainImage:'/pages/images/article/a3.jpg',
                desc:'我是文章3描述',
                star:101,
                view:'250'
            },
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('article onLoad ...');
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('article onReady ...');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('article onShow ...');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('article onHide ...');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('article onUnload ...');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('article onPullDownRefresh ...');
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log('article onReachBottom ...');
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log('article onShareAppMessage ...');
    },
    onPageScroll: function() {
        // 页面滚动时执行
        console.log('article onPageScroll ...');
    },
    onResize: function() {
        // 页面尺寸变化时执行
        console.log('article onResize ...');
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
    }
})