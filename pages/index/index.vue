<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar></custom-nav-bar>
		
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
				autoplay>
				<swiper-item v-for="item in 3">
					<image src="/common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in 4">文字内容文字内容文字内容文字内容文字内容文字内容文字内容</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" ></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd天"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="/common/images/preview_small.webp"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		.notice {
			display: flex;
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			.left{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 140rpx;
				.text{
					color: $text-font-color-1;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right:{
				display: flex;
				align-items: center;
				justify-content: center;
				width:70rpx;
			}
		}
		.select{
			padding-top: 50rpx;
			.date{
				color: $brand-theme-color;
				display: flex;
				align-items: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				.text{
					margin-left: 5rpx;
				}
			}
			.content{
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						display: inline-block;
						width: 200rpx;
						height: 430rpx;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
		.theme{
			padding-top: 50rpx;
			.more{
				font-size: 30rpx;
				color: #888;
			}
			.content{
				display: grid;
				gap:15rpx;
				grid-template-columns: repeat(3,1fr);
				margin-top: 30rpx;
				padding: 0 30rpx;
			}
		}
	}
</style>