//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import List from 'pages/list'
import Me from 'pages/me'
import Search from 'pages/search'
import shopList from 'pages/shoplist'
import ShopDetail from 'pages/detail'

//3.声明使用
Vue.use(VueRouter)

//4.导出路由对象
export default new VueRouter({
	routes:[
		{path:"/home",component:Home},
		{path:"/cart",component:Cart},
		{path:"/list",component:List},
		{path:"/me",component:Me},
		{path:"/search",component:Search},
		{path:"/shoplist",component:shopList},
		{path:"/detail",component:ShopDetail},
		{path:"/",redirect:"/home"},
	]
})