<template>
<div id="app">
	<app-header></app-header> 
	<!-- 路由视图 -->
	<router-view/>
	<!--  导航栏  -->
	<app-nav></app-nav>
</div>
</template>

<script>
import AppHeader from './common/AppHeader.vue'
import AppNav  from './common/AppNav.vue'
import content from './common/content.vue'

export default {
	components: {
		AppHeader,
		AppNav,
		content
	}
}
</script>