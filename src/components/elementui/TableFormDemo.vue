<template>
  <!-- el-table 可编辑数据的el-form表单校验 -->
  <div class="block">
    <table style="width: 100%; table-layout: fixed">
      <tr v-for="item in list">
        <td width="50%">
          <p
            style="
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
          >
            {{ item.name }}
          </p>
        </td>
        <td
          style="
            width: 30%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        >
          {{ item.name }}
        </td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
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
      >
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="70"
        ></el-table-column>
        <el-table-column
          label="名称"
          align="center"
          style="margin-left: 0px !important"
        >
          <template slot-scope="scope">
            <el-form-item
              :prop="'evidenceTemplateList.' + scope.$index + '.name'"
              :rules="rules.name"
            >
              <el-input v-model="scope.row.name" :maxlength="50"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column align="center" label="年龄">
          <template slot-scope="scope">
            <el-form-item
              :prop="'evidenceTemplateList.' + scope.$index + '.age'"
              :rules="rules.age"
            >
              <el-input v-model="scope.row.age" :maxlength="50"></el-input>
            </el-form-item>
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
      list: [
        {
          name:
            "这个电影看了，我绝对要哭，因为感同身受，刚开始知道自己得了癌，其实有点难受，家里人都瞒着我。我学医的，医生查房的时候我就知道了，随然当时全麻还不是特别请醒，但是我知道他们说的每个字，(有两个淋巴转移）。自己知道，但是不能让家人担心，自己消化。偷偷的哭过，但是保持好心情才能与病魔抗争，想着我还要去看我爱的三个男孩儿。可是当时没有人给我送小红花，但是有家人的陪伴和自己的信仰。现在好了已经过去了三四年了，我还好好的，21岁的我还是很强大的，癌症不可怕。",
          age: "18",
        },
        { name: "22", age: "19" },
        { name: "33", age: "20" },
      ],
      ruleForm: {
        evidenceTemplateList: [
          { name: "11", age: "18" },
          { name: "22", age: "19" },
          { name: "33", age: "20" },
        ],
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
    // this.getList();
  },
  methods: {
    saveData() {
      console.log(
        "evidenceTemplateList----",
        this.ruleForm.evidenceTemplateList
      );
      return;
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
