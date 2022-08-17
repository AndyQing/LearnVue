<template>
  <div>
    <el-button v-if="!isLogin" @click="toLogin">去登录</el-button>

    <div v-else>
      <span>已登录</span><el-button @click="exit">退出</el-button>
    </div>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "App",
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.pid = pubsub.subscribe("login", this.login);
    const token = localStorage.getItem("vue_token");
    if (token) {
      this.isLogin = true;
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    },
    login(_, data) {
      console.log("login---", data);
      this.isLogin = true;
    },
    exit() {
      this.isLogin = false;
      localStorage.setItem("vue_token", "");
      this.$router.push({ path: "/login" });
    },
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pid);
  },
  watch: {
    //不可行
    // "$route.path": function (newVal, oldVal) {
    //   console.log(newVal + '----' + oldVal);
    //   if (newVal === "/login") {
    //     this.isLogin = false;
    //   } else {
    //     this.isLogin = true;
    //   }
    // },
  },
};
</script>