<template>
	<app-content>
		<h1>首页</h1>
	</app-content>
</template>

<script>
import {getHomeBannerData} from '../../services/homeService.js'
export default {
	data(){
		return{
		
		}
	},
	mounted(){
		// 请求首页轮播图的数据
		getHomeBannerData();
	}
}
</script>