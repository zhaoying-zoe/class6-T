import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

// 引入全局Common css文件
import './assets/common/index.css'
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')