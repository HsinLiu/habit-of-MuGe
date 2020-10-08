<template>
	<view style="background-color: #FFFFFF;">


		<view>
			<cu-custom bgColor="bg-gradual-blue" :isBack="true" class="status_bar">
				<block slot="content">关于我们</block>
			</cu-custom>
		</view>
		<image style="width: 750rpx;" src="../../../static/xizi_img/top.png" mode=""></image>
		<view class="the_top">
			<image class="concenter logo_size" src="../../../static/xizi_img/icon.png" mode=""></image>
			<text class="concenter font_size">Version 2.0.0</text>

			<text class="font_size_list text-orange" style="text-align: center;margin: 30rpx 0rpx 20rpx 0px;">开发团队</text>
			<text class="radius light kaifazhebox" style="text-align: center;">
				<br />且听风吟<br /><br />
			</text>

			<text class="font_size_list text-blue" style="text-align: center;margin: 30rpx 0rpx 20rpx 0px;">开发者</text>

			<text class=" radius light kaifazhebox" style="text-align: center;margin-bottom: 20px;">
				<br />刘成龙 刘新 刘金格 刘颖 张志豪<br /><br />
			</text>
		</view>
		<image style="width: 750rpx;height: 800px;" src="../../../static/xizi_img/bott.png" mode=""></image>

	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		mounted() {

		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style>
	@import url("../../../colorui/main.css");
	@import url("../../../colorui/icon.css");

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}


	.the_top {
		display: flex;
		flex-direction: column;
		/* padding-top: 230px; */
		/* background-color: #FFFFFF; */
	}

	.logo_size {
		height: 150rpx;
		width: 150rpx;
	}

	.concenter {
		margin: 0 auto;
	}

	.font_size {
		font-size: 18rpx;
	}

	.font_size_list {
		font-size: 38rpx;

	}

	.kaifazhebox {
		width: 750rpx;
		/* height: 55rpx; */
		font-size: 30rpx;
	}

</style>
