<template>
	<view >
		<view>
			<cu-custom bgColor="bg-gradual-blue" :isBack="true" class="status_bar">
			    <block slot="content">训练陪伴人</block>
			</cu-custom>
		</view>
		<view class="">
			<view class="my bg-gradual-green">
				<view class="cu-form-group margin-left margin-top margin-bottom" style="width: 500rpx;">
					<textarea maxlength="-1"  placeholder="点击输入关键字,如:晨练" style="color: #000000;"></textarea>
				</view>
				<view class="">
					<view class="cu-avatar lg round margin-top margin-left margin-right" :style="{backgroundImage: 'url('+myavatar+')'}"></view>
				</view>
					
			</view>
			<view class="ta bg-gradual-blue">
				<view class="">
					<view class="cu-avatar lg round margin-top margin-left margin-left" :style="{backgroundImage:'url('+pavatar+')'}"></view>
				</view>
				<view class="cu-form-group margin-left margin-top margin-bottom" style="width: 500rpx;">
					<textarea maxlength="-1"  placeholder="点击输入回复内容" style="color: #000000;"></textarea>
				</view>
			</view>
			<view style="position: fixed;bottom: 0rpx;">
				<button class="but cu-btn bg-orange  lg shadow" @tap="gotoinfo()">训练规则</button>
				<button class="but cu-btn bg-blue  lg shadow" @tap="goback()">立即提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	// import store from '../../../store/index.js'
	
	var _self;
	export default {
		data() {
			return {
				myavatar:"",
				pavatar:""
			}
		},
		onLoad() {
			_self=this
			uni.getStorage({
				key:"myAvatar",
				success: (res) => {
						this.myavatar=res.data	
				},
				fail: (res) => {
					this.myavatar="../../../static/vippage/vipicon/heart.png"
				}
			})
			uni.getStorage({
				key:"PAvatar",
				success: (res) => {
					this.pavatar=res.data	
				},
				fail: (res) => {
					this.pavatar="../../../static/vippage/vipicon/heart.png"
				}
			})
		},
		mounted() {
			
		},
		methods: {
			goback(){
				uni.showToast({
					title:"提交成功",
					icon:"none",
					success() {
						setTimeout(function(){
							// uni.hideToast()
							uni.navigateBack({
								delta:1
							})
						},500)
					}
				})
			},
			gotoinfo(){
				uni.navigateTo({
					url:'addwordinfo'
				})
			}
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
	.my{
		/* height: 20vh; */
		width: 730rpx;
		/* background-color: #FFFFFF; */
		
		border-radius: 8px;
		display: flex;
		/* margin-top: 12rpx; */
		margin: 12rpx auto;
	}
	.ta{
		/* height: 20vh; */
		width: 730rpx;
		/* background-color: #FFFFFF; */
		
		border-radius: 8px;
		display: flex;
		margin: 12rpx auto;
	}
	.but{
		width: 375rpx;
	}

</style>
