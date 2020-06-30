<template>
  <div id="app">
    <input v-model="title" v-on:keyup.enter="addData" />
    <!-- <p>Reversed message: "{{ reversedMessage() }}"</p> -->
    <h2>待办事项</h2>
    <ul>
      <li
        v-for="(list,index) in lists"
        v-bind:key="index"
        v-bind:class="{finishStyle:list.check}"
        v-on:click="doFinish(list)"
      >{{list.name}}</li>
    </ul>
  </div>
</template>

<script>
import Storage from "../model/storage";
export default {
  name: "TodoList",
  data() {
    return {
      title: "",
      lists: [
        {
          name: "111",
          check: true
        },
        {
          name: "222",
          check: false
        },
      ],
      lists: Storage.get('todolist')||[],
    };
  },
  methods: {
    doFinish: function(list) {
      // alert("hello");
      list.check = !list.check;
      console.log(list);
    },
    addData: function() {
      // console.log(this.title);
      this.lists.push({
        name: this.title,
        check: false
      });
      // Storage.set("todolist", this.lists);
      this.title = "";
    }
  },
  watch: {
    lists: {
      handler: function(val, oldVal) {
        console.log(val, oldVal);

        // this.fullName = val + "," + oldVal;
        Storage.set("todolist", val);
      },
      deep: true
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finishStyle {
  color: red;
}
</style>
