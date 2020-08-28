<!-- 结构 -->
<template>
    <div id="Home">
        <div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
        </div>
        <div class="home">{{ this.$store.state.home.home }}</div>
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.swiper样式
    import Swiper from 'swiper';
    import 'swiper/css/swiper.min.css';
    export default {
        name:'Home',
        data(){
            return {

            }
        },
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
		},
        //2.注册组件
        components: {

        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">
    #Home {
        .home{
            color: #ff6700;
            .rem(padding,5px)
        }
    }
</style>
