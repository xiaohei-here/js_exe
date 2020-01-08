<template>
<div class="swiper-container" ref="swiper">
	<div class="swiper-wrapper">
		<slot></slot>
	</div>
	
	<!-- 如果需要分页器 -->
	<div class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
	mothods: {
		updateDOM(){
			console.log('调用了更新');
			swiper.update();
		}
	},
	mounted(){
		new Swiper(this.$refs.swiper,{
			pagination: '.swiper-pagination'
		});
		console.log("创建");
	}

}
</script>