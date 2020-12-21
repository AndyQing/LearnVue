<template>
  <!-- el-table 可编辑数据的el-form表单校验 -->
  <div class="block">
    <el-form
      label-position="right"
      status-icon
      :rules="rules"
      :model="ruleForm"
      ref="ruleForm"
    >
      <el-table
        :data="ruleForm.evidenceTemplateList"
        border
        fit
        highlight-current-row
        :span-method="objectSpanMethod"
      >
        <el-table-column label="星期" align="center" width="100">
          <template slot-scope="scope">
            <p>{{ scope.row.id }}</p>
          </template>
        </el-table-column>
        <el-table-column label="名称" align="center" width="100">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
          </template>
        </el-table-column>
        <el-table-column align="center" label="数量">
          <template slot-scope="scope">
            <el-form-item
              :prop="'evidenceTemplateList.' + scope.$index + '.age'"
              :rules="rules.age"
            >
              <el-input v-model="scope.row.age" :maxlength="50"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" size="mini" @click="saveData()">保存</el-button>
      <el-button size="mini" @click="closeDialog()">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // evidenceTemplateGroup: {
      //   id: "",
      //   name: "",
      //   nickname: "",
      //   userId: "",
      //   evidenceTemplateList: [],
      // },
      ruleForm: {
        evidenceTemplateList: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur",
            // trigger: ["blur", "change"],
          },
        ],
        age: [
          {
            required: true,
            message: "年龄不能为空",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let obj = { zhouyishouli: 1, zhouyibanli: 1 };
      let arr = [
        { id: "周一", name: "受理总量", age: obj.zhouyishouli },
        { id: "周一", name: "办理总量", age: "19" },
        { id: "周二", name: "受理总量", age: "20" },
        { id: "周二", name: "办理总量", age: "20" },
        { id: "周三", name: "受理总量", age: obj.zhouyishouli },
        { id: "周三", name: "办理总量", age: "19" },
        { id: "周四", name: "受理总量", age: "20" },
        { id: "周四", name: "办理总量", age: "20" },
      ];
      this.ruleForm.evidenceTemplateList = arr;
    },
    del(id) {
      console.log("id---", id);
    },
    saveData() {
      console.log(
        "evidenceTemplateList----",
        this.ruleForm.evidenceTemplateList
      );
      return;
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
<style>
.el-tree {
  width: 60%;
  margin-top: 10px;
}
.el-form-item.is-error .el-input__inner {
  background: rgba(245, 108, 108, 0.1);
}
.el-form-item__error {
  padding-top: 0;
  position: absolute;
  top: 0;
  right: 70px;
  line-height: 40px;
  left: unset;
}
.el-form-item__error::before {
  font-family: element-icons !important;
  content: "\e79d";
}
.right0 .el-form-item__error {
  right: 10px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.title {
  padding: 20px 0 5px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 24px;
  color: #409eff;
  font-size: 16px;
}
.el-form {
  font-size: 0;
  padding: 0 40px;
}
.el-form > div.column {
  display: inline-block;
  width: 50%;
  vertical-align: top;
}
</style>
