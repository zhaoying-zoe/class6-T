import Vue from 'vue'
import App from './App.vue'
// 加载全局css样式
import './assets/css/index.css'
// 引入router
import router from './router/index'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
