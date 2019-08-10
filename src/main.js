// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import VueYouTubeEmbed from 'vue-youtube-embed'
// Vue.use(VueYouTubeEmbed)
// Vue.use(VueYouTubeEmbed, { global: true })
Vue.use(Vuetify)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created(){
    Aos.init({
      duration: 2000,
    })
    },

  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
