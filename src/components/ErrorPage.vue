<template>
  <div class="page">
    <p>{{errorpage}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      errorpage: "errorpage"
    };
  },
  created() {
    console.log(this.$route.params.code);
    var code = this.$route.params.code;
    if (code == 404) {
      this.errorpage = "页面404啦";
    }else{
      this.errorpage = "页面500啦";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  height: 100%;
}
.page p {
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -15px;
}
</style>
