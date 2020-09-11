<template>
    <div class="List">
        <!-- 搜索 -->
        <SearchInput />
        <!-- v-for="(listIcon,index) in this.$store.state.list.listicons" :key="index" -->
        <div class="wrap">
            <!-- 左侧sider-bar -->
            <van-sidebar
                v-model="activeKey" 
            >
                <van-sidebar-item 
                    v-for="(listIcon,index) in this.$store.state.list.listicons"
                    :key="index"
                    :title="listIcon.mobileName" 
                    @click="handleImg(listIcon._id)"
                />
            </van-sidebar>
            <!-- 右侧商品栏 -->
            <div class="sidebar-list">
                <div
                    class="sidebar-child"
                    v-for="(shop,index) in this.$store.state.list.shop"
                    :key="index"
                >
                    <img class="sidebar-img" :src="shop.icon">
                    <p class="sidebar-text">{{shop.mobileName}}</p>
                </div>
            </div>
        </div>
        <TabBar />
    </div>
  </template>
  
    <script>
        // 引入搜索框
        import SearchInput from '../../components/search/index.vue'
        // 引入tab-bar组件
        import TabBar from 'tab-bar';
        import { GET_LISTICONS,GET_SHOP } from './store/types.js'
        export default {
            name: 'List',
            data() {
                return {
                    activeKey: 0,
                    active:0,
                };
            },
            // 组件加载完毕
            mounted(){
                // 获取icon数据
                this.$store.dispatch(GET_LISTICONS);
                // 第一次进组件获取数据
                // this.$store.dispatch(GET_SHOP,id)
            },
            // 组件注册
            components: {
                SearchInput,
                TabBar
            },
            // 绑定方法
            methods: {
                // 获取单独的商品内容
                handleImg:function(id){
                    // 派发action
                    this.$store.dispatch(GET_SHOP,id)
                    // console.log(id)
                }
            },
        }
    </script>
  
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style lang="less" scoped>
            .List{
                color:red;
                /* display:flex; */
                /* flex-flow: wrap; */
            }
            .wrap{
                display:flex;
                flex-flow: wrap;
                overflow: hidden;
            }
            .sidebar-list{
                display:flex;
                background-color: #fff;
                flex: 5;
                /* width: 100%; */
                /* margin: 0px; */
                /* height: 560px; */
                float: right;
                .sidebar-child{
                    padding: 0.4rem;
                    .sidebar-img{
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                    .sidebar-text{
                        margin-left: .4rem;
                        color: #000;
                        font-size: 0.2rem;
                    }
                }

            }
    </style>
  