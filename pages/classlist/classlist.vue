<template>
	<view class="classlist">
		<view class="content">
			<navigator url="" class="item" v-for=" item in 10">
				<image src="../../common/images/preview2.jpg"></image>
			</navigator>
			
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.classlist{
		.content{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx;
			.item{
				height: 440rpx;
				image{
					diaplay: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
