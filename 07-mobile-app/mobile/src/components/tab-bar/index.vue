<!-- 结构 -->
<template>
  <div id="Tabbar">
    <van-tabbar 
        v-model="active"
        active-color="#ff6700"
        inactive-color="#aaa"
        route
    >
        <van-tabbar-item 
            name="home" 
            icon="wap-home"
            to="/home"
        >
            首页
        </van-tabbar-item>
        <van-tabbar-item 
            name="search" 
            icon="bag"
            to="/list"
        >
            商品列表
        </van-tabbar-item>
        <van-tabbar-item 
            name="friends" 
            icon="cart"
            to="/cart"
        >
            购物车
        </van-tabbar-item>
        <van-tabbar-item 
            name="setting" 
            icon="manager"
            to="/me"
        >
            个人中心
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<!-- 逻辑 -->
<script>
  export default {
      name:'Tabbar',
      data(){
          return {
              active: 0,
          }
      },
  }
</script>
<!-- 样式 -->
<style scoped lang="less">

</style>
