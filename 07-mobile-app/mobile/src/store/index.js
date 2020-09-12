import Vue from 'vue'
import Vuex from 'vuex'

import home from 'pages/home/store'
import list from 'pages/list/store'
import floor from '../components/floor/store/index'
import shoplist from 'pages/shoplist/store/index'
import detail from 'pages/detail/store/index'

// 使用vuex
Vue.use(Vuex);

// 导出store
export default new Vuex.Store({
    modules:{
        home:home,
        floor:floor,
        list:list,
        shoplist:shoplist,
        detail:detail
    }
}) 