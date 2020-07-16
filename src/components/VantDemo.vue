<template>
  <div style="height:100%">
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <div class="content">
          内容 1
          <br />内容 2
          <br />内容 3
          <br />内容 4
          <br />内容 5
          <br />内容 6
          <br />内容 7
          <br />内容 8
        </div>
      </van-tab>
      <van-tab title="标签 2">
        <div class="content">内容 2</div>
      </van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style>
.content {
  /* height: 100%; */
  background: red;
  line-height: 100px;
}

html,
body {
  height: 100%;
}

.van-tabs {
  height: 100%;
}
.van-tabs__content {
  height: calc(100% - 44px);
  overflow-y: auto;
}
</style>
