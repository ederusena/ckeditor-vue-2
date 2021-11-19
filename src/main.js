import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
