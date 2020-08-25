import Vue from 'vue' // 引入vue
import App from './App.vue' // 引入组件App

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
