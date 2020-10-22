import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
Vue.config.productionTip = true
Vue.use(Vuetify)
import ScrollAnimation from './directives/scrollanimation';
Vue.directive('scrollanimation', ScrollAnimation);
let VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
