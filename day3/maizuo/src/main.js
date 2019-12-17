import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
Vue.prototype.center = new Vue()

import AppContent from './common/content.vue'
Vue.component('app-content',AppContent)

new Vue({
	el: '#app',
	router,
	components: {
		App
		
	},
	render: h=>h(App)
	
})