// 是Vue应用的入口文件
// 用来创建一个新的Vue实例
// 并将这个实例挂载在根节点下
// 同时也可以用来引入Vue插件

import Vue from 'vue'
import App from './App.vue'
// import store from './store/index.js'
// 加载全局css样式
import './assets/css/index.css'
//加载全局vant组件
import './plugins/vant/index.js'
// 引入router
import router from './router/index'
// 引入axios
import axios from 'axios'
// Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
    axios,
    router,
    render: h => h(App),
}).$mount('#app')
