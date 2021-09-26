import Vue from 'vue'
import App from './App.vue'
import router from './router'//配置路由
import { Lazyload } from 'vant';//配置懒加载
import store from "@/store/"
import i18n from '@/utils/i18n';
import "@/style/common.scss"//引入全局样式
import "@/style/vant.scss"
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去this.$i18nMsg.xxx去访问
console.log("当前环境是", process.env)
Vue.use(Lazyload);

import 'element-ui/lib/theme-chalk/index.css'
import { Carousel } from 'element-ui';
Vue.use(Carousel)
// Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
