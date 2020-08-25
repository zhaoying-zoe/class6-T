<template>
    <div id="App">
        this is vue page;
        <Logo />
    </div>
</template>

<script>
    // 引入组件
    import Logo from './pages/Logo.vue';
    export default {
        name:'App',
        // 注册组件
        components:{
            Logo,
        },
    }
</script>

<style>
    #App{
        color:red;
    }
</style>
