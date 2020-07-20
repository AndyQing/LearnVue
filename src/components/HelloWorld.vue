<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>路由的嵌套---------</p>
    <router-link to="/hello/login">登录</router-link>
    <router-link to="/hello/register">注册</router-link>
    <router-view></router-view>
    
    <br />
    <button @click="toerror(404)">跳转404</button>
    <button @click="toerror(500)">跳转500</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    console.log(this.$route, this.$route.query.id); //用this.$route.query拿到传参
  },
  methods: {
    toerror(code) {
      this.$router.push("/errorPage/" + code);
    }
  }
};

function toerror(code) {
  this.$router.push("/errorPage/" + code);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
