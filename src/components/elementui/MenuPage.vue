<template>
  <el-tabs tab-position="left" stretch>
    <el-tab-pane label="用户管理">
      <div><img src="../../assets/logo.png" /></div>
    </el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {};
</script>
<style>
.el-tabs--left .el-tabs__nav-wrap.is-left::after {
  width: 0;
}
.el-tabs__item {
  height: 60px;
  line-height: 60px;
}
.el-tabs__active-bar {
  /* 选中时竖线的样式 */
  background-color: none;
}
</style>