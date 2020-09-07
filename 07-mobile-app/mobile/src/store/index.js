import Vue from 'vue'
import Vuex from 'vuex'

import home from 'pages/home/store'

// 使用vuex
Vue.use(Vuex);

// 导出store
export default new Vuex.Store({
    modules:{
        home:home
    }
}) 