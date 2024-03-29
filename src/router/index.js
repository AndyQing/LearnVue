import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FatherCom from '@/components/FatherCom'
import AVueDemo from '@/components/AVueDemo'
import VantDemo from '@/components/VantDemo'
import TodoList from '@/components/TodoList'
import ErrorPage from '@/components/ErrorPage'
import Login from '@/components/Login'

Vue.use(Router)

var login = {
  template: '<h3 >登录组件---</h3>',
}
var register = {
  template: '<h3 >注册组件---</h3>',
}

const router = new Router({
  mode: 'hash',//默认是hash模式，网址路径上带有“#”，其后面的东西不会传给服务器
  // mode:"history",//需要解决刷新页面404的问题，需要后端人员解决。
  linkActiveClass: 'myactive',//默认选中样式是："router-link-active"
  routes: [
    //不推荐直接用根路径直接指向一个组件，用户可能会感觉到歧义，建议用redirect
    // {
    //   path: '/',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/hello'//redirect重定向
    },
    // {
    //   path: '/hello',
    //   component: HelloWorld
    // },
    // {
    //   path: '/hello/login',
    //   component: login
    // },
    // {
    //   path: '/hello/register',
    //   component: register
    // },
    //上面方式并不能实现嵌套，用下面的方法吧：
    {
      path: '/hello',
      component: HelloWorld,
      //使用children属性实现子路由，且path前不要带‘/’,否则永远以根路径请求
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    {
      path: '/fatherCom/:id/:name',
      name: 'FatherCom',
      component: FatherCom,
      // props: { id: "111" },
      props: true,//这种只适用于访问‘/fatherCom/1/2’的方式，会把params参数通过props传给组件
      // props() {
      //   return { id: '222' }
      // },
      // props($route) {//这种只适用于访问‘/fatherCom?id=1’的方式
      //   return { id: $route.query.id }
      // }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/avueDemo',
      component: AVueDemo
    },
    {
      path: '/vantDemo',
      component: VantDemo
    },
    {
      path: '/todoList',
      component: TodoList
    },
    {
      path: '/errorPage/:code',
      component: ErrorPage
    },
  ]
})
router.beforeEach((to, from, next) => {
  console.log('beforeEach---', to, from)
  if (localStorage.getItem('token1')) {
    next()
  }
})
export default router