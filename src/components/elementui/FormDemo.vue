<template>
  <div class="block">
    <el-form ref="form" :model="form" label-width="160px" :rules="rules">
      <p class="title">基础信息</p>
      <!-- 左边一列 -->
      <div class="column">
        <el-form-item label="用户名称：" prop="name" class="right0">
          <el-input v-model="form.name" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号码">
            <el-button slot="append" icon="el-icon-mobile"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="登录账号：" prop="zhanghao" class="right0">
          <el-input v-model="form.zhanghao" placeholder="请输入登录账号"></el-input>
        </el-form-item>
        <el-form-item label="用户性别：">
          <el-select v-model="form.sex" placeholder="请选择活动区域">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="岗位：">
          <el-input v-model="form.gangwei" placeholder="请输入岗位"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-checkbox-group v-model="form.role">
            <el-checkbox label="普通角色" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div>
      <!-- 右边一列 -->
      <div class="column">
        <el-form-item label="归属部门：" prop="bumen">
          <el-input v-model="form.bumen" placeholder="请选择归属部门" @focus="showDialog">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="mail">
          <el-input v-model="form.mail" placeholder="请输入邮箱">
            <el-button slot="append" icon="el-icon-message"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="登录密码：" prop="password">
          <el-input v-model="form.password" placeholder="请输入登录密码" type="password">
            <el-button slot="append" icon="el-icon-key"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="用户状态：">
          <el-switch v-model="form.state"></el-switch>
        </el-form-item>
      </div>
      <p class="title">其他信息</p>
      <el-form-item label="备注：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item style="textAlign:center;marginLeft:-160px">
        <el-button type="primary" @click="onSubmit('form')">保存</el-button>
        <el-button>关闭</el-button>
      </el-form-item>
    </el-form>
    <!-- 选择部门弹框 -->
    <el-dialog title="选择部门" :visible.sync="dialogFormVisible" :close-on-click-modal="closeModal">
      <!-- 弹框主体内容： -->
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        <template slot="prepend">关键字：</template>
        <el-button slot="append" @click="doSearch">搜索</el-button>
      </el-input>
      <el-button @click="collapseAll" style="marginTop:10px;float:right">折叠/展开</el-button>
      <el-tree
        class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        node-key="id"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
        @node-click="handleNodeClick"
      ></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sureChoise">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("必填"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      dialogFormVisible: false,
      closeModal: false,
      expandAll: true,
      bumen: "", //当前选择的部门
      form: {
        name: "",
        mobile: "",
        zhanghao: "",
        sex: "man",
        gangwei: "",
        bumen: "",
        mail: "",
        password: "",
        state: true,
        role: [],
        desc: "",
      },
      rules: {
        name: [{ required: true, message: "必填", trigger: "blur" }],
        mobile: { required: true, validator: checkPhone, trigger: "blur" },
        zhanghao: [
          { required: true, message: "必填", trigger: "blur" },
          { min: 2, message: "最少2个字符", trigger: "blur" },
        ],
        bumen: [{ required: true, message: "必填", trigger: "change" }],
        mail: [
          { required: true, message: "必填", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, message: "必填", trigger: "blur" },
          { min: 2, message: "最少2个字符", trigger: "blur" },
        ],
      },
      filterText: "",
      treeData: [
        {
          id: 1,
          label: "若依科技",
          children: [
            {
              id: 4,
              label: "深圳总公司",
              children: [
                {
                  id: 41,
                  label: "研发部门",
                },
                {
                  id: 42,
                  label: "市场部门",
                },
              ],
            },
            {
              id: 5,
              label: "长沙分公司",
              children: [
                {
                  id: 51,
                  label: "市场部门",
                },
                {
                  id: 52,
                  label: "财务部门",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {},
  methods: {
    onSubmit(formName) {
      console.log("submit!");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!", this.form);
        } else {
          console.log("error submit!!", this.form);
          return false;
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    showDialog() {
      this.bumen = null;
      this.dialogFormVisible = true;
    },
    //选中tree节点时
    handleNodeClick(data) {
      this.bumen = data;
      console.log(data);
    },
    doSearch() {
      this.$refs.tree.filter(this.filterText);
    },
    sureChoise() {
      if (this.bumen && !this.bumen.children) {
        this.dialogFormVisible = false;
        this.form.bumen = this.bumen.label;
      }
    },
    // 全部折叠/展开
    collapseAll() {
      // console.log("collapseAll---", this.$refs.tree.store);
      var nodes = this.$refs.tree.store.nodesMap;
      this.expandAll = !this.expandAll;
      for (var i in nodes) {
        nodes[i].expanded = this.expandAll;
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
