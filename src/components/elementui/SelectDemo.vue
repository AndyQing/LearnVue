<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="选项" prop="value">
        <!-- <el-select
          v-model="form.value"
          placeholder="请选择"
          @change="changeValue"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->

        <!-- 获取select中的value和label值 -->
        <el-select
          v-model="form.value"
          placeholder="请选择"
          @change="changeValue2"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="{ value: item.value, label: item.label }"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSubmit">获取form</el-button>
    <el-button type="primary" @click="resetForm">重置form</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        // value: "选项1",
        // value: { value: "选项1" },
      },

      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    changeValue: (value) => {
      console.log("changeValue---", value);
    },
    changeValue2: (data) => {
      console.log("changeValue2---", data);
      const { value, label } = data;
      this.label = label;
      this.value = value;
    },
    resetForm() {
      console.log("resetForm---", this.$refs.form);
      //在使用 validate、resetFields 方法的情况下，<el-form-item>必须要加prop
      this.$refs.form.resetFields();
      // this.$nextTick(() => {
      //   this.$refs.form && this.$refs.form.resetFields()
      // })
    },
    onSubmit() {
      console.log("onSubmit---", this.form);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.active {
  color: red;
}
</style>
