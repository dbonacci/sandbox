import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource);

export const bus = new Vue();

//filteri
Vue.filter('formatDate', function(value){
	return moment(String(value)).format('DD-MM-YYYY');	
})

Vue.filter('formatTime', function(value){
	return moment(String(value)).format('HH:mm');	
})

Vue.filter('stringify', function(value){
	return String(value);
})
new Vue({
  el: '#app',
  render: h => h(App)
})
