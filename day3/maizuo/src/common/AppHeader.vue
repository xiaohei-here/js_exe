<template>
<header class="app-header">
	<span class="iconfont icon-menu" @click="navAction()"></span>
	<h1 class="title">卖座电影</h1>
	<span class="city">
		深圳
		<i class="iconfont icon-arrowdown"></i>
	</span>
	
	<span class="iconfont icon-user"></span>
</header>
</template>
<script>
export default {
	methods: {
		navAction(){

			this.center.$emit('showNav')
		}
	}

}
</script>
<style>
.app-header{
	width: 100%;
	height: 50px;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	background:#282828;
	color: #999;
}
.menu{
	width: 40px;
	text-align:center;
	line-height: 50px;
	border-right: 1px solid #222;
}
.title{
	flex: 1;
	margin-top: -5px;
	padding-left: 60px;
	font-size: 20px;
	line-height: 50px;
}
.city{
	flex: 1;
	font-size: 14px;
	line-height: 50px;
	text-align: center;
}
.icon-user{
	flex: 1;
	font-size: 14px;
	width: 50px;
	line-height: 50px;
	text-align: center;
}
.icon-menu{
	font-size: 20px;
	padding-left: 10px;
	padding-top: 10px;
}
</style>