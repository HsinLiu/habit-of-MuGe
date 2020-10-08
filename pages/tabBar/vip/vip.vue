<template>
	<view class="center">
		<view class="logo">
			<image class="logo-img" :src="myavatar" @click="setAvatar"></image>
		</view>
		<view class="center-list">
			<view class="center-list-item" @click="toaddword">
				<image src="../../../static/vippage/vipicon/yuliao.png"></image>
				<text class="list-text">训练陪伴人</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" @click="setPinfo">
				<image src="../../../static/vippage/vipicon/pinfo.png"></image>
				<text class="list-text">资料修改</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item">
				<image src="../../../static/vippage/vipicon/clear.png"></image>
				<text class="list-text" @click="clearStorage">清除数据并重启</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" @click="toabout">
				<image src="../../../static/vippage/vipicon/about.png"></image>
				<text class="list-text">关于我们</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				myavatar: "../../../static/vippage/vipicon/heart.png",
			}
		},
		onLoad(e) {
		
			_self = this;
			try {
				this.myavatar = uni.getStorageSync("myavatar")
			} catch (e) {
				console.log("头像获取异常", e);
			}
		
		},
		methods: {
			setAvatar() {
				uni.chooseImage({
					count:1,
					success: (res) => {
						let tempAvatar = res.tempFilePaths
						uni.saveFile({
							tempFilePath:tempAvatar[0],
							success: (res) => {
								this.myavatar = res.savedFilePath
								uni.setStorage({
									key: "myavatar",
									data: this.myavatar
								})
							}
						})

					}
				})
			},
			setPinfo() {
				uni.navigateTo({
					url: "partnerinfo"
				})
			},
			toabout() {
				uni.navigateTo({
					url: "about"
				})
			},
			toaddword() {
				uni.navigateTo({
					url: "addword"
				})
			},
			clearStorage() {
				uni.showModal({
					title: '清除数据',
					content: '确定要清除数据并重启？',
					success: function(res) {
						if (res.confirm) {
							// console.log('用户点击确定');
							// 清除缓存
							uni.clearStorage();
							// 两秒后重启
							// #ifdef APP-PLUS
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: '清除成功2秒后重启'
							});
							setTimeout(function() {
								uni.hideToast();
								plus.runtime.restart();
							}, 2000);
							// #endif
							// 两秒后跳转
							// #ifdef H5 || MP-WEIXIN
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: '清除成功2秒后刷新'
							});
							setTimeout(function() {
								uni.navigateTo({
									url: '/pages/index/index'
								});
							}, 2000);

							// #endif
						} else if (res.cancel) {
							// console.log('用户点击取消');https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf
						}
					}
				});
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('../../../static/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #f8f8f8;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750rpx;
		height: 200px;
		/* padding: 20upx; */
		box-sizing: border-box;
		/* background-color: #4cd964; */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		/* background: url(../../../static/vippage/vipbg/vipbg.jpeg); */
		background-image: url(../../../static/vippage/vipbg/vipbg.jpeg);
		/* background-position: center; */
		background-repeat: no-repeat;
		border-bottom-right-radius: 11%;
		border-bottom-left-radius: 11%;
	}

	.logo-img {
		width: 90px;
		height: 90px;
		border-radius: 90px;
		border: 1px solid dashed;
		box-shadow: 0 0 15px #F8F8F8;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		padding: 0upx 20upx;
		vertical-align: middle;
	}

	.center-list-item image {
		width: 20px;
		height: 20px;
		margin-right: 20upx;
	}

	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #4cd964;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}

	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 32upx;
		color: #555;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>
