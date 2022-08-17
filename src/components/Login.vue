<template>
  <div>
    <el-button @click="doLogin">点我就登陆成功了</el-button>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "App",
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    doLogin() {
      localStorage.setItem("vue_token", "vue_token");
      pubsub.publish("login", "login success");
      this.$router.push({ path: "/" });
    },
  },
};
</script>