<template>
  <div class="hello">123--请求接口啦</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "i am comA"
    };
  },
  props: ["title"],
  mounted: function() {
    console.group("mounted 挂载结束状态===============》");
    this.getDate();
  },
  methods: {
    getDate: function() {
      const axios = require("axios").default;
      // var url =
      //   "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20"; //接口后台允许跨域了,否则获取不到数据

      var url = "https://wap.jiaogelangzhong.com/JglzServer/api/common/banners";
      axios
        .get(url)
        .then(response => {
          console.log("response===", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
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
