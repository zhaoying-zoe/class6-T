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
                <van-search 
                    v-model="value" 
                    placeholder="请输入搜索关键词"
                    @keyup.13="handleSearch()"
                />
            </van-col>
        </van-row>
        <SearchBody />
    </div>
</template>

<script>
    import SearchBody from '../searchbody/index'
    export default {
        data(){
            return {
                value: '',
            };
        },
        name: 'Search',
        components: {
            SearchBody
        },
        methods:{
            handleBack(){
                window.history.back()
            },
            handleSearch(ev){
                console.log(ev);
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
        font-size: .8rem;
        color: rgb(24, 144, 255);
    }
    .search-head{
        display: flex;
        padding: 0.4rem;
        justify-content:space-between;
        font-size: 0.4rem;
    }
    .clearBtn{
        color: #1890ff;
    }
</style>
  