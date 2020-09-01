//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /*
  handleTap: function(){
    console.log('handleTap...'); 
  },
  handleText: function(){
    console.log('handleText...');
  },
  catchTap: function(){
    console.log('catchTap...');
  },
  catchText: function(){
    console.log('catchText...');
  },
  */
  handleMotto: function(){
    // 点击跳转页面
    /*
    wx.redirectTo({
      // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      url:'/pages/article/article',
    })
    wx.navigateTo({
      // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
      url:'/pages/article/article',
    })
    */
   
    wx.switchTab({
      url:'/pages/article/article',
    })
  },
})
