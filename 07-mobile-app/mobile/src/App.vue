<template>
  <div id="app">
    <!-- 配置路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入其他组件

export default {
    name: 'App',
    components: {
      // 注册组件
    }
}
</script>

<style lang="less" scoped>
#app {
    a {
        color: #ccc;
        .rem(padding,2px)
    }

}
</style>
