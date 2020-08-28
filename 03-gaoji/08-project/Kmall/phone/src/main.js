import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

// 引入全局Common css文件
import './assets/common/index.css'
Vue.config.productionTip = false
//加载全局vant组件
import './plugins/vant/index.js'

// 引入路由组件
import router from './router'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')