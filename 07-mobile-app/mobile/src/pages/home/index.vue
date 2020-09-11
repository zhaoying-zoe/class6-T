<template>
    <div class="Home">
        <!-- 搜索 -->
        <SearchInput />
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(image,index) in this.$store.state.home.positionads" :key="index">
                    <img :src="image.image">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 分类列表 -->
        <van-grid :column-num="5">
            <van-grid-item v-for="(image,index) in this.$store.state.home.categoryicons" :key="index">
                <a href="javascript:;">
                    <van-image :src="image.icon" />
                    <span class="category-text">{{image.mobileName}}</span>
                </a>
            </van-grid-item>
        </van-grid>

        <!-- 商品楼层 -->
        <Floor />
        <TabBar />
    </div>
  </template>
  
  <script>
    import { GET_POSITIONADS,GET_CATEGORYICONS } from './store/types.js'
    // 引入轮播图swiper
    import Swiper from 'swiper';
    // 引入swiper css样式
    import 'swiper/css/swiper.min.css';
    // 引入搜索框
    import SearchInput from '../../components/search/index.vue'
    // 引入楼层
    import Floor from '../../components/floor/index.vue'
    // 引入tab-bar组件
    import TabBar from 'tab-bar';
    export default {
        name: 'Home',
		data:function(){
            return {}
		},
        // 组件加载完毕时
        mounted(){
            // 获取轮播图数据
            this.$store.dispatch(GET_POSITIONADS)
            .then(()=>{
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
            })
            // 获取icon数据
            this.$store.dispatch(GET_CATEGORYICONS)
        },
        // 组件注册
        components: {
            SearchInput,
            Floor,
            TabBar
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .Home{
        color:red;
    }
    .swiper-container{
        height: 5rem;
    }
    #Search{
        /* position: fixed; */
        top: 2rem;
        left: 2rem;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .van-grid-item{
        /* background-color: #ff6600; */
    }
    .category-text{
        font-size: .3rem;
        text-align: center;
        color:rgb(125, 126, 128)
    }
  </style>
  