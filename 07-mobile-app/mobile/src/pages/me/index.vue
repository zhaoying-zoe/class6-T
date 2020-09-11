<template>
    <div class="Me">
        Me
        <TabBar />
    </div>
  </template>
  
    <script>
        // 引入tab-bar组件
        import TabBar from 'tab-bar';
        export default {
            name: 'Me',
            props: {
            
            },
            components:{
                TabBar
            }
        }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
        .Me{
            color:red;
        }
  </style>
  