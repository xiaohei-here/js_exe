import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.prototype.$pubsub = new Vue();

import AppContent from './common/AppContent.vue'
Vue.component('app-content', AppContent);

//日期过滤器
import {formatDate} from './filter/dateFilter'
Vue.filter('formatDate', formatDate);


new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    render: h=>h(App)
})