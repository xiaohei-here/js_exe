<template>
<div id="app">
	<app-header></app-header>
	<!--  导航栏  -->
	<app-nav></app-nav>
</div>
</template>

<script>
import AppHeader from './common/AppHeader.vue'
import AppNav  from './common/AppNav.vue'

export default {
	components: {
		AppHeader,
		AppNav
	}
}
</script>