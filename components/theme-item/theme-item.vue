<template>
	<view class="themeItem">
		<navigator url="/pages/classlist/classlist" class="box" v-if="!isMore">
			<image class="pic" src="/common/images/classify1.jpg" mode=""></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
		<navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
			<image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore: {
			type: Boolean,
			default: false,
		}
	})
</script>

<style lang="scss" scoped>
	.themeItem{
		.box{
			position: relative;
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 70rpx;
				background: rgba(0,0,0,0.2);
				color: #fff;
				backdrop-filter: blur(20rpx);
				font-weight: 600;
			}
			.tab{
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250,129,90,0.7);
				color: #fff;
				font-size: 22rpx;
				padding: 6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}
		.box.more{
			.mask{
				width: 100%;
				height: 100%;
				flex-direction: column
			}
			.text{
				font-size: 28rpx;
			}
		}
	}
</style>