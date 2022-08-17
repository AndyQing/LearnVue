<template>
  <div id="app">
    <LoginHeader />
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
import LoginHeader from "../src/components/LoginHeader.vue";
export default {
  name: "App",
  components: { LoginHeader },
  data() {
    return {
      // isLogin: true,
    };
  },
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