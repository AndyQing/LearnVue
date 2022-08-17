// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//vue3中这样写就会报错
// import App from './APP'
import App from './components/elementui/ElementUIDemo'//用于测试的页面
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(ViewUI);

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //上面两行可以用下面一行代替
  // render:h=>h(App),
  watch: {
    '$route.path': function (newVal, oldVal) {
      // console.log(newVal + '----' + oldVal);
      if (newVal === '/hello/register') {
        console.log('欢迎来到注册页面');
      } else if (newVal === '/hello/login') {
        console.log('欢迎来到登录页面');
      }

    },
  }
})
//如果上面不写el，可以用下面一行代码代替
// vm.$mount('#app')
