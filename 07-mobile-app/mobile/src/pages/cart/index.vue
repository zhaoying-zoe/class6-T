<template>
    <div class="Cart">
        Cart
        <TabBar />
    </div>
  </template>
  
  <script>
    // 引入tab-bar组件
    import TabBar from 'tab-bar';
    export default {
        name: 'Cart',
        props: {
        
        },
        components: {
            // 注册组件
            TabBar
        }
    }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      .Cart{
          color:red;
      }
  </style>
  