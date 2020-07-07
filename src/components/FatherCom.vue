<template>
  <div class="hello">
    <h1>{{msg}}</h1>

    <!-- ComA和com-a都可以 -->
    <!-- <com-a title="i am from father" v-on:child-tell="listenSon"></com-a> -->
    <ComA title="i am from father" v-on:child-tell="listenSon"></ComA>
    <!-- 注：listenSon后面不用到小括号 -->
    <!-- ComA子组件通过this.$emit("child-tell");来调用父组件的listenSon方法，可以用第二个参数来传参 -->
  </div>
</template>

<script>
import ComA from "./ComA"; //comA用来充当子组件
export default {
  data() {
    return {
      msg: "我是父页面中的数据"
    };
  },
  components: { ComA },
  methods: {
    // clickMe: function() {
    //   console.log("list");
    // },
    listenSon: function(msg) {
      console.log("father---", msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
