<template>
	<view class="bgall">
		<cu-custom bgColor="bg-gradual-blue" class="status_bar">
			<block slot="content">习惯列表</block>
		</cu-custom>
		<view class="box">
			<view v-for="(item,index) in chooselist" class="flexicon" @tap="gotochartslist(item.iconname)">
				<view v-if="isselecthabit[item.iconname]" class="boxwbox">
					<image :src="'../../../static/iconfont/'+item.url" mode="" class="imglist"></image>
					<text class="iconname">{{item.iconname}}</text>
				</view>
			</view>

		</view>



	</view>
</template>

<script>
	import store from '../../../store/index.js';
	var _self;
	export default {
		data() {
			return {
				chooselist: [],
				chooseurl: "",
				url: 'intochart1?iconname=',
				isselecthabit: {}
				// gotochartslist:["gotocharts","gotocharts1"]

			}
		},
		onLoad() {
			this.chooselist = store.state.iconlib
			_self = this;
			this.getallsetStorage()
		},
		methods: {

			gotochartslist: function(iconname) {
				_self.url = 'intochart1?iconname='
				// console.log(iconname);
				_self.url += iconname
				// console.log(_self.url);
				uni.navigateTo({
					url: _self.url,
					animationDuration: 200
				})


			},
			getallsetStorage: function() {
				// console.log("get is");
				uni.getStorage({
					key: "isselecthabit",
					success: (res) => {
						this.isselecthabit = res.data
						// console.log(res.data);
					}
				})

				// console.log(this.isselecthabit);
			}


		},
		onShow() {
			this.getallsetStorage()
		}

	}
</script>

<style>
	@import url("../../../colorui/main.css");
	@import url("../../../colorui/icon.css");
	@import url("../../../static/xizi_css.css");

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	page {
		/* 	background-repeat: no-repeat;
		backgound-size: 100%;
		background-attachment: fixed;
		background-size: contain; */
		background-color: #FCF7E9;
	}
</style>
