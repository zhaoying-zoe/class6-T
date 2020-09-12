<template>
    <div class="ShopDetail">
        <!-- 详情页 页头 -->
        <van-nav-bar
            title="商品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div 
                    class="swiper-slide" 
                    v-for="(image,index) in this.$store.state.detail.images" 
                    :key="index"
                >
                    <img :src="image">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 商品详情 -->
        <div class="detail">
            <p class="detail-name">{{ this.$store.state.detail.detail.name }}</p>
            <p class="detail-desc">{{ this.$store.state.detail.detail.description }}</p>
            <div class="detail-price">
                <span>￥</span>
                <span>{{ this.$store.state.detail.detail.price }}</span>
                <span>.00</span>
            </div>
        </div>
        <!-- 查看商品详情 -->
        <div 
            class="detail-img"
        >
            <div
                @cilck="handImg()"
            >
                <span>查看商品详情</span>
                <span class="right">&gt;</span>
            </div>
        </div>
        <!-- 查看商品详情(图片) -->
        <div>
            <p style="display: none;">
                <img :src="this.$store.state.detail.detail.mainImage">
            </p>
        </div>
    </div>
  </template>
  
    <script>
        // 引入轮播图swiper
        import Swiper from 'swiper';
        // 引入swiper css样式
        import 'swiper/css/swiper.min.css';
        import { GET_DETAIL } from './store/types.js'
        export default {
            name: 'ShopDetail',
            data() {
                return {
                    
                };
            },
            // 组件加载完毕
            mounted(){
                // 获取传过来的id值
                var id = this.$route.query.id;
                // console.log(id);
                // 派发action
                this.$store.dispatch(GET_DETAIL,id)
                .then(()=>{
                    // 获取轮播图数据
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
            },
            // 组件注册
            components: {
                
            },
            // 绑定方法
            methods: {
                onClickLeft() {
                    window.history.back();
                },
                handImg(){
                    console.log(58);
                }
            },
        }
    </script>
  
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="less" scoped>
        .ShopDetail{
            /* color:red; */
            /* display:flex; */
            /* flex-flow: wrap; */
        }
        .swiper-slide{
            text-align: center;
            padding-top: .1rem;
            padding-bottom: .1rem;
        }
        .swiper-slide img{
            width: 50%;
            height: 50%;
        }
        .detail{
            /* 商品详情样式 */
            background-color: #fff;
            /* 商品name和desc的样式 */
            .detail-name,.detail-desc{
                padding: .5rem;
                color:rgb(50,50,51);
                font-size: .5rem;
                height: .9rem;
                display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
                -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
                -webkit-line-clamp: 2; 
                overflow: hidden;  /** 隐藏超出的内容 **/
                text-overflow: ellipsis;
                white-space:pre-line;
            }
            /* 商品desc的单独样式 */
            .detail-desc{
                color:rgb(204, 204, 204);
                font-size: .4rem;
                height: .6rem;
            }
            /* 价格样式 */
            .detail-price{
                color:rgb(255, 68, 68);
                padding: .5rem;
            }
        }
        /* 查看商品详情 */
        .detail-img{
            height: .9rem;
            line-height: .9rem;
            font-size: .4rem;
            background-color: #fff;
            margin-top: .4rem;
            padding: .2rem .4rem;
            /* 右箭头样式 */
            .right{
                float: right;
                font-size: .7rem;
            }
        }
        /* 商品详情图片样式 */
        p img{
            width: 100%;
            height: auto;
        }
    </style>
  