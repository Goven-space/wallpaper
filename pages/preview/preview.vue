<template>
    <view class="preview">
		<swiper>
			<swiper-item v-for="item in 5">
				<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
    </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	swiper{
		width: 100%;
		height: 100%;
			width: 100%;
			height: 100%;
		image{
		}
	}
	
}
</style>
