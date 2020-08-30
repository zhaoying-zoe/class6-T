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