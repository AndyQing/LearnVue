<template>
  <div class="hello">
    以下是comA中的数据========
    <h1>自己data中的数据：{{msg}}</h1>
    <h1>从父页面传过来的数据：{{title}}</h1>
    <button @click="clickMe">clickMe show father's title,并且向父组件传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "i am comA"
    };
  },
  props: ["title"],
  methods: {
    show: function() {
      console.log("子组件方法---");
    },
    clickMe: function() {
      console.log("title:" + this.title);
      this.$emit("child-tell", "hello, i am from son," + this.msg);
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
