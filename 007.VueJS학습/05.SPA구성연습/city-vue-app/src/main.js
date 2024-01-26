// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 뷰
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //스토어 등록 사용!
  // router, // 라우터 등록 사용!
  components: { App },
  template: '<App/>',
  // 뷰 인스턴스 
  created(){

  }
})
