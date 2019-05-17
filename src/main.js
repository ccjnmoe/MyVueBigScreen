// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import draggable from 'vuedraggable'
import VueDraggableResizable from 'vue-draggable-resizable-gorkys'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI, {size: 'large', zIndex: 6000})
Vue.use(draggable)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
