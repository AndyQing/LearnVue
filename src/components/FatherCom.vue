<template>
  <div class="hello">
    <h1 ref="myh1">{{ msg }}---{{ id }}</h1>

    <!-- ComA和com-a都可以 -->
    <!-- <com-a title="i am from father" v-on:child-tell="listenSon"></com-a> -->
    <ComA
      title="i am from father"
      v-on:child-tell="listenSon"
      ref="mycoma"
    ></ComA>
    <!-- 注：listenSon后面不用到小括号 -->
    <!-- ComA子组件通过this.$emit("child-tell");来调用父组件的listenSon方法，可以用第二、三...个参数来传参 -->
  </div>
</template>

<script>
import ComA from "./ComA"; //comA用来充当子组件
export default {
  props: ["id"],
  data() {
    return {
      msg: "我是父页面中的数据",
    };
  },
  components: { ComA },
  created() {
    console.log("created---", this.$route, this.$route.params.id); //用this.$route.params拿到传参
  },
  mounted() {
    console.log("获取元素：", this.$refs.myh1.innerHTML); //获取dom元素
    //获取组件的引用
    console.log(this.$refs.mycoma.msg);
    this.$refs.mycoma.show();
  },
  methods: {
    // clickMe: function() {
    //   console.log("list");
    // },
    listenSon: function (msg) {
      console.log("father---", msg);
      this.msg = msg; //this.msg这是data中的msg
    },
  },
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {//这里可以写鉴权代码
    console.log("beforeRouteEnter----", to, from, next);
    next()
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {//这里可以写鉴权代码
    console.log("beforeRouteEnter----", to, from, next);
    next()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
