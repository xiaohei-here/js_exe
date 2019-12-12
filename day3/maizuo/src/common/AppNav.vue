<template>
	<div class="app-nav">
		<div class="cover" v-show="showNav">111</div>
		<!-- 全覆盖层的div -->
		<div class="cover-page" v-show="showNav" @click="tapAction()"></div>
		<!-- 列表层  -->
		<ul class="nav" v-show="showNav">
			<li v-for="(item,index) in navlist" :key="index">
			{{ item.title }}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {
			showNav: false,
			navlist: [
				{title:"首页",path:'/home',name:'卖座电影'},
                {title:"影片",path:'/films',name:'卖座电影'},
                {title:"影院",path:'/cinemas',name:'全部影院'},
                {title:"商城",path:'/shops',name:'商城'},
                {title:"我的",path:'/mine',name:'登录'},
                {title:"卖座卡",path:'/cards',name:'查询/绑定/激活卖座卡'}		
			]
		}	
	},
	methods:{
		tapAction(){
			console.log('点击了');
			this.showNav = false;
		}
	},
	mounted(){
		this.center.$on('showNav',()=>{
			this.showNav = true
		})
	}
}
</script>
<style>
.cover-page{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
}

</style>