<template>
  <div class="block">
    <div>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :label="city" :key="city"
          >{{ city }}---<el-button @click="cancel(city)"
            >取消</el-button
          ></el-checkbox
        >
      </el-checkbox-group>
    </div>
    <!-- value-format="yyyy-MM-dd" -->
    <el-date-picker
      v-model="dateValue"
      type="date"
      @change="dateChange"
      placeholder="选择日期"
    >
    </el-date-picker>

    <li v-for="(item, index) in datalist">{{ index }}-{{ item.good.price }}</li>
    <!-- vue实现点击列表中的哪一项，哪一项就变颜色: -->
    <ul>
      <li
        v-for="(item, index) in movices"
        :class="{ active: index == mark }"
        @click="getcolor(index)"
      >
        {{ item }}
      </li>
    </ul>
    <!-- <ul>
      <li :class="{ active: mark == 0 }" @click="mark = 0">111</li>
      <li :class="{ active: mark == 1 }" @click="mark = 1">222</li>
      <li :class="{ active: mark == 2 }" @click="getcolor(2)">333</li>
    </ul> -->

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="选择框" width="180">
        <template slot-scope="scope">
          <el-select v-model="scope.row.name" placeholder="请选择">
            <el-option
              v-for="item in scope.row.option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>

    <span class="demonstration">默认 click 触发子菜单</span>
    <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select class="date" v-model="value2" size="mini" placeholder="请选择">
      <el-option
        v-for="item in 59"
        :key="item"
        :label="item < 10 ? '0' + item : item"
        :value="item"
      >
      </el-option>
    </el-select>

    <el-cascader
      v-model="value"
      :options="options"
      :props="{ expandTrigger: 'hover', value: 'value', label: 'label' }"
      @change="handleChange"
    ></el-cascader>
    <!-- @visible-change="vChange" -->
    <el-select
      v-model="value2"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,

      dateValue: "",
      mark: 0,
      movices: ["复仇者联盟", "钢铁侠", "美国队长", "小黑历险记"],
      datalist: [{ id: 16, good: { price: 25 } }],
      tableData: [
        {
          date: "2016-05-02",
          name: "选项1",
          option: [{ value: "选项1", label: "黄金糕" }],
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          option: [{ value: "选项1", label: "黄金糕" }],
        },
      ],
      value1: "选项1",
      value: [],
      options1: [
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
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
            },
            {
              value: "daohang",
              label: "导航",
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
            },
            {
              value: "form",
              label: "Form",
            },
            {
              value: "data",
              label: "Data",
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
        },
      ],
      options2: [],
      value2: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  props: ["title"],
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    handleCheckAllChange(val) {
      console.log("val---", val);
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log("value-", value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    cancel(city) {
      this.checkedCities = this.checkedCities.filter((item) => item != city);
      let checkedCount = this.checkedCities.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
      console.log("checkedCount---", checkedCount, this.isIndeterminate);
    },
    getcolor: function (index) {
      if (index == this.mark) {
        // this.mark = -1; // if判断，实现点击一项时变色，再次点击，取消变色
      } else {
        this.mark = index;
      }
    },
    handleChange(value) {
      console.log(value);
    },
    dateChange(value) {
      console.log(value, this.dateToString(value));
    },
    dateToString(date) {
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString();
      var day = date.getDate().toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      if (day.length == 1) {
        day = "0" + day;
      }
      var dateTime = year + "-" + month + "-" + day;
      return dateTime;
    },
    vChange(val) {
      console.log("val0----", val);
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options2 = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options2 = [];
      }
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
