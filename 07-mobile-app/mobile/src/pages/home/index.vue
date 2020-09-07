<template>
    <div class="Home">
        Home
        <div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
    </div>
  </template>
  
  <script>
    import Swiper from 'swiper';
    // 引入swiper css样式
	import 'swiper/css/swiper.min.css';
    export default {
    name: 'Home',
        mounted(){
            new Swiper ('.swiper-container', {
                // 循环模式选项
                loop: true,
                autoplay:true,
                //分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
            })
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      .Home{
          color:red;
      }
  </style>
  