//app.js
App({
  onLaunch (options) {
    // Do something initial when launch.  加载时
    console.log('app onLaunch ...')
  },
  onShow (options) {
    // Do something when show.  展示时
    console.log('app onShow ...')
  },
  onHide () {
    // Do something when hide.  隐藏时
    console.log('app onHide ...')
  },
  onError (msg) {
    // 错误时
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})