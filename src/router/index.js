import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Address from '@/components/Address'
import FatherCom from '@/components/FatherCom'
import AVueDemo from '@/components/AVueDemo'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/fatherCom',
      name: 'FatherCom',
      component: FatherCom
    },
    {
      path: '/avueDemo',
      name: 'AVueDemo',
      component: AVueDemo
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    },
  ]
})
