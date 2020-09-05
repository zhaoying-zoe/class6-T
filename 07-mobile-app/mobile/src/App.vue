<template>
  <div id="app">
    <!-- 配置路由出口 -->
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
// 引入其他组件
// 引入tab-bar组件
import TabBar from './components/tab-bar';

export default {
  name: 'App',
  components: {
    // 注册组件
    TabBar
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
