<template>
  <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="80"
  >
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="证件号" prop="idcode">
      <Input v-model="formValidate.idcode"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input
        v-model="formValidate.mail"
        placeholder="Enter your e-mail"
      ></Input>
    </FormItem>
    <FormItem label="City" prop="city">
      <Select
        v-model="formValidate.city"
        placeholder="Select your city"
        @on-change="selectCity"
      >
        <Option value="1">New York</Option>
        <Option value="2">London</Option>
        <Option value="3">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="Date">
      <Row>
        <Col span="11">
          <FormItem prop="date">
            <DatePicker
              type="date"
              placeholder="Select date"
              v-model="formValidate.date"
            ></DatePicker>
          </FormItem>
        </Col>
        <Col span="2" style="text-align: center">-</Col>
        <Col span="11">
          <FormItem prop="time">
            <TimePicker
              type="time"
              placeholder="Select time"
              v-model="formValidate.time"
            ></TimePicker>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="Eat"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input
        v-model="formValidate.desc"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 5 }"
        placeholder="Enter something..."
      ></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')"
        >Submit</Button
      >
      <Button @click="handleReset('formValidate')" style="margin-left: 8px"
        >Reset</Button
      >
    </FormItem>

    <div>
      <Table border ref="selection" :columns="columns4" :data="data1">
        <template slot-scope="{ row, index }" slot="operate">
          <Button v-if="row.age > 20">删除</Button>
        </template>
      </Table>
      <Button @click="handleSelectAll(true)">Set all selected</Button>
      <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "1",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
        idcode: "",
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
        gender: [
          {
            required: true,
            message: "Please select gender",
            trigger: "change",
          },
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change",
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change",
          },
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur",
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur",
          },
        ],
      },
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "操作",
          slot: "operate",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
          _checked: true,
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  methods: {
    selectCity(value) {
      console.log("value---", value);
      this.formValidate.name = value;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        console.log("valid---", this.formValidate);
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
  },
};
</script>
