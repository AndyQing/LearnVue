<template>
  <div id="app">
    <!-- 跳转方式1：不推荐 -->
    <!-- <a href="#/avueDemo">跳转路由1</a> -->

    <!-- 跳转方式2：推荐 -->
    <!-- router-link 默认渲染为一个 a 标签,tag设置渲染成哪种标签 -->
    <router-link to="/hello?id=1" tag="span">跳转路由1</router-link>
    <router-link to="/fatherCom/2/qing" tag="span">跳转路由2</router-link>
    <!-- <img src="./assets/logo.png"> -->
    <transition mode="out-in">
      <!-- 路由页面坑位 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
.router-link-active,
.myactive {
  background: red;
}

/* 动画样式 */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
