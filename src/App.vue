<template>
  <div id="app">
    <!-- 跳转方式1：不推荐 -->
    <!-- <a href="#/avueDemo">跳转路由1</a> -->

    <div style="height:40px;line-height:40px">
      <!-- 跳转方式2：推荐 -->
      <!-- router-link 默认渲染为一个 a 标签,tag设置渲染成哪种标签 -->
      <router-link to="/hello?id=1" tag="span">跳转路由1</router-link>
      <router-link to="/fatherCom/2/qing" tag="span">跳转路由2</router-link>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
      <transition mode="out-in">
        <!-- 路由页面坑位 -->
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.content {
  height: calc(100% - 40px);
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
