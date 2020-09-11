<template>
    <div class="SearchCommon">
        <van-row class="searchcommon-top">
            <van-col span="2">
                <span 
                    class="searchcommon-title"
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
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: '',
            };
        },
        name: 'SearchCommon',
        components: {
            
        },
        methods:{
            handleBack(){
                window.history.back()
            },
            handleClear(){
                console.log(23456);
            },
            handleSearch(ev){
                console.log(ev);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .SearchCommon{
        background-color:#fff;
    }
    .searchcommon-top{
        text-align: center;
        line-height: 1.5rem;
    }
    .searchcommon-title{
        font-size: .8rem;
        color: rgb(24, 144, 255);
    }
    .searchcommon-head{
        display: flex;
        padding: 0.4rem;
        justify-content:space-between;
        font-size: 0.4rem;
    }
    .clearBtn{
        color: #1890ff;
    }
</style>
  