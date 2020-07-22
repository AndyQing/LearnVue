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
      lastName: "",
      fullName: " "
    };
  },
  props: ["title"],
  methods: {},
  watch: {
    //使用这个属性可以监听data中指定数据的变化，然后触发这个watch对应的function函数
    firstName: function(newVal, oldVal) {
      // this.fullName = this.firstName + '_' + this.lastName
      //此时的this.firstName可以用newVal代替
      this.fullName = newVal + "_" + this.lastName;
    },
    lastName: function(newVal) {
      this.fullName = this.firstName + "_" + newVal;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
