<template>
    <div class="Home">
        <Search />
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </div>
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </div>
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <van-grid :column-num="5" :gutter="5">
            <van-grid-item v-for="(image,index) in images" :key="index">
                <van-image round src="https://api.mall.kuazhu.com/category-icons/1595243404358.jpg" />
            </van-grid-item>
        </van-grid>
        <Floor />
    </div>
  </template>
  
  <script>
    // import { GET_ADS } from './store/types.js'
    import Swiper from 'swiper';
    // 引入swiper css样式
    import 'swiper/css/swiper.min.css';
    // import axios from 'axios';
    // 引入搜索框
    import Search from '../../components/search/index.vue'
    // 引入楼层
    import Floor from '../../components/floor/index.vue'
    export default {
        name: 'Home',
		data:function(){
            return {
                images:[
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                    {src:"https://img.yzcdn.cn/vant/apple-3.jpg"},
                ],
            } 
		},
        // 组件加载完毕时
        mounted(){
            // 加载首页广告数据
            new Swiper ('.swiper-container', {
                // 循环模式选项
                loop: true,
                autoplay:true,
                //分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
            })
            // this.$store.dispatch()
            // axios.get('https://api.mall.kuazhu.com/ad-images/',{
            //     params:{
            //         // name:'alice',
            //         // age:19
            //     }
            // })
            // .then(resp => {
            //     console.log(resp.data);
            // }).catch(err => {// 
            //     console.log('请求失败：'+err.status+','+err.statusText);
            // });
        },
        // 组件注册
        components: {
            Search,
            Floor
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .Home{
        color:red;
    }
    .swiper-container{
        height: 200px;
    }
    #Search{
        /* position: fixed; */
        top: 100px;
        left: 100px;
    }
    .van-grid-item{
        /* background-color: #ff6600; */
    }
  </style>
  