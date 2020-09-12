<template>
    <div class="shopList">
        <SearchCommon />
        <div
            v-for="(category,index) in this.$store.state.shoplist.shoplist.list"
            :key="''+index"
        >
            <div class="shoplist-item">
                <div class="shoplist-img">
                    <img :src="category.mainImage">
                </div>
                <div class="shoplist-detail">
                    <p class="shoplist-title">{{category.name}}</p>
                    <p class="shoplist-desc">{{category.name}}</p>
                    <p class="shoplist-price">
                        <span>￥</span>
                        {{category.price}}.00
                    </p>
                    <span @click="shopBtn" class="shoplist-icon"><i class="fa fa-shopping-cart"></i></span>
                </div>
            </div>
        </div>
        <NoShop />
    </div>
</template>

<script>
    // 引入搜索框
    import SearchCommon from '../searchcommon/index';
    import { GET_SHOPLIST } from './store/types.js';
    // 引入没有更多了
    import NoShop from 'pages/noshop';
    export default {
        name: 'shopList',
        data(){
            return {
                // id:this.$route.params.id,
            }
        },
        components:{
            SearchCommon,
            NoShop
        },
        // 组件加载完毕时
        mounted(){
            // 获取传过来的id值
            var id = this.$route.query.id;
            // console.log(id);
            // 获取商品列表数据
            this.$store.dispatch(GET_SHOPLIST,id)
        },
        methods:{
            shopBtn(){
                console.log(34567);
            }
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .shopList{
        background-color: #fff;
    }
    .shoplist-item{
        background-color: #FAFAFA;
        margin-bottom: .3rem;
        padding: .3rem;
        img{
            width: 3.3rem;
            height: 3.3rem;
        }
        .shoplist-img,.shoplist-detail{
            display: inline-block;
        }
        .shoplist-detail{
            padding-left: .2rem;
            padding-right: .2rem;
        }
        .shoplist-desc,.shoplist-title{
            color: #323233;
            font-size: 0.3rem;
            word-break: break-all;
            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
            -webkit-line-clamp: 2; 
            overflow: hidden;  /** 隐藏超出的内容 **/
            text-overflow: ellipsis;
            width: 5rem;
            white-space:pre-line;
            margin-bottom: .1rem;
        }
        .shoplist-desc{
            color: #7d7e80;
            -webkit-line-clamp: 1;
        }
        .shoplist-price{
            color: #f44;
            font-size: .4rem;
        }
        .shoplist-icon{
            float: right;
            font-size: .7rem;
            color: #ff6700;
        }
    }
</style>
  