<template>
    <div class="List">
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
                />
            </van-sidebar>
            <!-- 右侧商品栏 -->
            
            <van-image 
                width="100" 
                height="100" 
                v-for="(icons,index) in this.$store.state.list.listicons"
                :key="index"
                :src="icons.icon"
                v-model="active"
            />
        </div>
    </div>
  </template>
  
    <script>
        import { GET_LISTICONS } from './store/types.js'
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
                this.$store.dispatch(GET_LISTICONS)
            },
        }
    </script>
  
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
            .List{
                color:red;
            }
            .wrap{
                /* display:flex;
                flex-flow: wrap; */
            }
    </style>
  