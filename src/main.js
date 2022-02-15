import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import './assets/iconfont/iconfont.css'
//活动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//视频播放器
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
