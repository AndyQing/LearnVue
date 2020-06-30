<template>
  <div class="hello">
    123
    <h1>{{msg}}</h1>

    <com-a title="i am from father" v-on:child-tell="listenSon"></com-a>
  </div>
</template>

<script>
import ComA from "./ComA"; //comA用来充当子组件
export default {
  data() {
    return {
      msg: "i am pather page"
    };
  },
  components: { ComA },
  methods: {
    clickMe: function() {
      console.log("list");
    },
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
