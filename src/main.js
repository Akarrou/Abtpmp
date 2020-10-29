import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import VueAnalytics from "vue-analytics";
Vue.config.productionTip = true
Vue.use(Vuetify)
Vue.use(VueAnalytics,{
  id:'G-SYVGYX9PY7'
})
import ScrollAnimation from './directives/scrollanimation';

Vue.directive('scrollanimation', ScrollAnimation);
let VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)



new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
