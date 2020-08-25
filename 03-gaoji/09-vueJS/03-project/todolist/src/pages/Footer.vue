<template>
    <div id="Footer">
        <input type='checkbox'>
        <span>1/2</span>
        <button>删除全部</button>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    components: {
    
  }
}
</script>

<style>
    #Footer{
        width: 100%;
        /* box-sizing: bordre-box; */
        height: 34px;
        line-height: 34px;
        margin-top: 10px;
    }
    #Footer span{
        margin-left: 5px;
        text-align: center;
    }
    #Footer button{
        float: right;
        margin-top: 5px;
        width: 70px;
        height: 30px;
    }
</style>