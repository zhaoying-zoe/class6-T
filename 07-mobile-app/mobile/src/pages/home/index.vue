<template>
    <div class="Home">
        <!-- 搜索 -->
        <Search />
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://api.mall.kuazhu.com/ad-images/1599184987338.jpg"/>
                </div>
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://api.mall.kuazhu.com/ad-images/1599184940642.jpg"/>
                </div>
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://api.mall.kuazhu.com/ad-images/1599184962033.jpg"/>
                </div>
                <div class="swiper-slide">
                    <VanImage width="100%" height="200" src="https://api.mall.kuazhu.com/ad-images/1599184975302.jpg"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 分类列表 -->
        <van-grid :column-num="5">
            <van-grid-item v-for="(image,index) in images" :key="index">
                <a href="javascript:;">
                    <van-image round :src="image.src" />
                    <span class="category-text">{{image.text}}</span>
                </a>
            </van-grid-item>
        </van-grid>

        <!-- 商品楼层 -->
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
                    {
                        src:"https://api.mall.kuazhu.com/category-icons/1595243404358.jpg",
                        text:"手机通讯"    
                    },
                    {
                        src:"https://api.mall.kuazhu.com/category-icons/1595243379743.jpg",
                        text:"食品生鲜"
                    },
                    {
                        src:"https://api.mall.kuazhu.com/category-icons/1595243323048.jpg",
                        text:"汽车保养" 
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595243298132.jpg",
                        text:"内衣配饰"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595243270185.jpg",
                        text:"母婴童装"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595243232631.jpg",
                        text:"美妆护肤"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595243206088.jpg",
                        text:"酒水饮料"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595243130830.jpg",
                        text:"手机通讯"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1595244144843.jpg",
                        text:"手机通讯"
                    },
                    {src:"https://api.mall.kuazhu.com/category-icons/1587973628877.png",
                        text:"手机通讯"
                    },
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
    .category-text{
        font-size: .3rem;
        text-align: center;
        /* width: 53px; */
        margin-left: 7px;
    }
  </style>
  