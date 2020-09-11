<template>
    <div class="SearchBody">
        <div>
            <div class="search-head">
                <span>最近搜索</span>
                <span 
                    class="clearBtn"
                    @click="handleClear()"
                >
                    清除
                </span>
            </div>
            <div class="search-body">
                "search-body"
            </div>
        </div>
    </div>
  </template>
  
    <script>
        export default {
            name: 'SearchBody',
            props: {
            
            },
            methods:{

                handleClear(){
                    console.log(23456);
                },

            }
        }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
        .SearchBody{
            color:red;
        }
  </style>
  