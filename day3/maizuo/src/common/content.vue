<template>
	<div class="content">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	mounted(){
		new IScroll(this.$refs.content,{
		
		})
	}
}
</script>

<style scoped>
.content {
	width: 100%;
	position: absolute;
	top: 50px;
	left: 0;
	bottom: 0;
	overflow: hidden;
}
</style>