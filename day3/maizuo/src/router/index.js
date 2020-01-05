import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import City from '../pages/common/City.vue'
import Cinemas from '../pages/cinemas/index.vue'
import Films from '../pages/films/index.vue'
import Home from '../pages/home/index.vue'
import Mine from '../pages/mine/index.vue'
import Shops from '../pages/shops/index.vue'
import Cards from '../pages/Cards/index.vue'

const routes = [
	{
		name: 'home',
		path: '/home',
		component: Home,
		alias: '/',
	},
	{
		name: 'films',
		path: '/films',
		component: Home,
		alias: '/',
	},
	{
		name: 'cinema',
		path: '/cinemas',
		component: Cinemas,
	},
	{
		name: 'shop',
		path: '/shops',
		component: Shops,
	},
	{
		name: 'mine',
		path: '/mine',
		component: Mine,
	},
	{
		name: 'card',
		path: '/cards',
		component: Cards,
	},
	{
		path: '**',
		redirect: '/home'
		
	}
	
]

export default new Router({
	routes
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location){
	return originalPush.call(this,location).catch(err => err)
}

