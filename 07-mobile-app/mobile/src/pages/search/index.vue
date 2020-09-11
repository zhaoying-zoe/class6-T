<template>
    <div class="Search">
        <van-row class="search-top">
            <van-col span="2">
                <span 
                    class="search-title"
                    @click="handleBack()"
                >
                    &#60;
                </span>
            </van-col>
            <van-col span="22">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row>
        <div>
            <div class="search-head">
                <span>最近搜索</span>
                <span>清除</span>
            </div>
            <div class="search-body">
                "search-body"
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: '',
            };
        },
        name: 'Search',
        props: {
            
        },
        methods:{
            handleBack(){
                window.history.back()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Search{
        background-color:#fff;
    }
    .search-top{
        text-align: center;
        line-height: 1.5rem;
    }
    .search-title{
        font-size: 22px;
        color: rgb(24, 144, 255);
    }
    .search-head{
        display: flex;
        padding: 0.4rem;
        justify-content:space-between;
        font-size: 0.1rem;
    }
</style>
  