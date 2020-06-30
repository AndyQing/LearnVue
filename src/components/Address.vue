<template>
  <div class="hello">
    <h1>{{msg}}-------{{title}}</h1>
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
    clickMe: function() {
      console.log("title:" + this.title);
      this.$emit("child-tell",'hello, i am from son');
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
