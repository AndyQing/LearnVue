<template>
  <div>
    <input type="text" v-model="firstName" /> +
    <input type="text" v-model="lastName" /> =
    <input type="text" v-model="fullName" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
      //data中的fullName去掉
    };
  },
  props: ["title"],
  methods: {},
  computed: {
    //computed中定义的属性，就是计算属性，实质就是个方法且需要有返回值，使用时当做属性来使用，不用加小括号
    // 只要计算属性中任意一个data数据发生变化，就会立即重新计算这个值
    fullName: function() {
      return this.firstName + "_" + this.lastName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
