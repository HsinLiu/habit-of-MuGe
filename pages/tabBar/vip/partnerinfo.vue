<template>
	<view class="content">
		<view>
			<cu-custom bgColor="bg-gradual-blue" :isBack="true" class="status_bar">
				<block slot="content">资料修改</block>
			</cu-custom>
		</view>
		<view class="middle">
			<view class="ptop" @click="getallsetStorage()">请设置陪伴人{{tempsex}}的资料:</view>
			<view class="middle">
				<view class="partnerform">
					<view class="cu-form-group pinfo pname">
						<text class="title">{{tempsex}}的名字:</text>
						<input name="input" confirm-type="done" v-model="pname" placeholder="请输入陪伴人姓名" maxlength="6" />
					</view>
					<view class="cu-form-group pinfo psex">
						<text class="title">把{{tempsex}}当成你的:</text>
						<radio-group name="radio" @change="sexchange">
							<label class="labelfont">
								<radio class="red" :class="psex=='girlfriend'?'checked':''" :checked="psex=='girlfriend'?true:false" value="girlfriend" />女朋友
							</label>
							<label class="labelfont">
								<radio class="blue" :class="psex=='boyfriend'?'checked':''" :checked="psex=='boyfriend'?true:false" value="boyfriend" />男朋友
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group pinfo">
						<text class="title touxiang">{{friendname}}的头像:</text>
						<view class="pavatar" @tap="setpAvatar()">
							<image class="pavatar" :src="pavatar"></image>
						</view>
					</view>
					<view class="cu-form-group pinfo pcallme">
						<text class="title">{{friendname}}称呼你为:</text>
						<input name="input" confirm-type="done" v-model="pcallme" placeholder="陪伴人怎么称呼你" maxlength="6" />
					</view>
				</view>
			</view>
			<view class="ptop">请设置个人信息:</view>
			<view class="middle">
				<view class="partnerform">
					<view class="cu-form-group pinfo pname">
						<text class="title">昵称:</text>
						<input name="input" confirm-type="done" v-model="myname" placeholder="请设置昵称" maxlength="6" />
					</view>
					<view class="cu-form-group pinfo psex">
						<text class="title">性别:</text>
						<radio-group name="radio" @change="mysexchange">
							<label class="labelfont">
								<radio class="red" :class="mysex=='girl'?'checked':''" :checked="mysex=='girl'?true:false" value="girl" />女
							</label>
							<label class="labelfont">
								<radio class="blue" :class="mysex=='boy'?'checked':''" :checked="mysex=='boy'?true:false" value="boy" />男
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group pinfo">
						<text class="title">生日:</text>
						<picker mode="date" :value="mybirthday" :start="startDate" :end="endDate" @change="bindDateChange">
							<text>{{mybirthday}}</text>
						</picker>
					</view>
					<view class="cu-form-group pinfo">
						<text class="title touxiang">头像:</text>
						<view class="pavatar" @tap="setAvatar">
							<image class="pavatar" :src="myavatar"></image>
						</view>

					</view>
					<view class="cu-form-group pinfo">
						<text class="title">身份</text>
						<radio-group name="radio" @change="indentitychange">
							<label class="labelfont">
								<radio class="orange" :class="myIdentity=='student'?'checked':''" :checked="myIdentity=='student'?true:false"
								 value="student" />学生
							</label>
							<label class="labelfont">
								<radio class="green" :class="myIdentity=='worker'?'checked':''" :checked="myIdentity=='worker'?true:false"
								 value="worker" />上班族
							</label>
							<label class="labelfont">
								<radio class="brown" :class="myIdentity=='other'?'checked':''" :checked="myIdentity=='other'?true:false" value="other" />其他
							</label>
						</radio-group>
					</view>
					<view class="cu-form-group pinfo">
						<text class="title">我的ID</text>
						<text>{{uuid}}</text>
						<!-- {{isselecthabit["唱歌"]}} -->
					</view>
				</view>
			</view>
			<view class="bottom">
				<button class="btn" @tap="go_ok()">完成</button>
			</view>
		</view>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		data() {
			return {
				uuid: "",
				isselecthabit: {},
				pname: "", //姓名
				tempsex: "Ta",
				psex: "", //性别
				pcallme: "", //Ta对你的昵称
				pavatar: "../../static/touxiang/avatar.png",
				// //
				myname: "",
				mysex: "",
				myIdentity: "",
				mybirthday: getDate({
					format: true
				}),
				myavatar: "../../static/touxiang/avatar.png"
				//

			};
		},
		methods: {
			makeallsetStorage: function() {
				// console.log("存储ing");
				uni.setStorage({
					key: "isselecthabit",
					data: this.isselecthabit
				})
				uni.setStorage({
					key: "pname",
					data: this.pname
				})
				uni.setStorage({
					key: "psex",
					data: this.psex
				})
				uni.setStorage({
					key: "pcallme",
					data: this.pcallme
				})
				uni.setStorage({
					key: "pavatar",
					data: this.pavatar
				})
				uni.setStorage({
					key: "myname",
					data: this.myname
				})
				uni.setStorage({
					key: "mysex",
					data: this.mysex
				})
				uni.setStorage({
					key: "myIdentity",
					data: this.myIdentity
				})
				uni.setStorage({
					key: "mybirthday",
					data: this.mybirthday
				})
				uni.setStorage({
					key: "myavatar",
					data: this.myavatar
				})
				uni.request({
					url: "http://47.104.95.72:5000/usermanage",
					method: "POST",
					data: [
						this.uuid,
						this.isselecthabit,
						this.pname,
						this.psex,
						this.pcallme,
						this.pavatar,
						this.myname,
						this.mysex,
						this.myIdentity,
						this.mybirthday,
						this.myavatar

					]
				})
				// console.log(this.isselecthabit);
			},
			getallsetStorage: function() {
				uni.getStorage({
					key:"uuid",
					success: (res) => {
						this.uuid = res.data
					}
				})
				uni.getStorage({
					key: "pname",
					success: (res) => {
						this.pname = res.data
					},
					fail: (res) => {
						this.pname = "陪伴人"
					}
				})
				uni.getStorage({
					key: "psex",
					success: (res) => {
						this.psex = res.data
					}
				})
				uni.getStorage({
					key: "pcallme",
					success: (res) => {
						this.pcallme = res.data
					}
				})
				uni.getStorage({
					key: "pavatar",
					success: (res) => {
						this.pavatar = res.data
					}
				})
				uni.getStorage({
					key: "myname",
					success: (res) => {
						this.myname = res.data
					}
				})
				uni.getStorage({
					key: "mysex",
					success: (res) => {
						this.mysex = res.data
					}
				})
				uni.getStorage({
					key: "myIdentity",
					success: (res) => {
						this.myIdentity = res.data
					}
				})
				uni.getStorage({
					key: "mybirthday",
					success: (res) => {
						this.mybirthday = res.data
					}
				})
				uni.getStorage({
					key: "myavatar",
					success: (res) => {
						this.myavatar = res.data
					}
				})
			},
			go_ok: function() {
				this.makeallsetStorage()
				uni.showToast({
					title: "已保存",
					icon: "none",
					success() {
						setTimeout(function() {
							// uni.hideToast()
							uni.navigateBack({
								delta: 1
							})
						}, 200)
					}
				})
			},
			sexchange(e) {
				this.psex = e.detail.value
				if (this.psex == "girlfriend") {
					this.tempsex = "她"
				}
				if (this.psex == "boyfriend") {
					this.tempsex = "他"
				}

			},
			mysexchange(e) {
				this.mysex = e.detail.value
			},
			indentitychange(e) {
				this.myIdentity = e.detail.value
			},
			setpAvatar() {
				uni.chooseImage({
					success: (res) => {
						this.pavatar = res.tempFilePaths
					}
				})
			},
			setAvatar() {
				uni.chooseImage({
					success: (res) => {
						this.myavatar = res.tempFilePaths
					}
				})
			},
			bindDateChange: function(e) {
				this.mybirthday = e.target.value
			}
		},
		onLoad() {
			_self = this
			this.getallsetStorage()
			console.log("123");
			// this.iconlist = store.state.iconlib

		},
		onReady() {
			this.getallsetStorage()
		},
		onShow() {
			this.getallsetStorage()
		},
		computed: {
			friendname: function() {
				var tempname = this.pname
				if (tempname == "") {
					return "Ta"
				} else {
					return this.pname
				}
			}
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

	page,
	.content {
		width: 100%;
		height: 90%;
		background-size: 100% auto;
		padding: 0;
	}

	/* 		.swiper {
			width: 100%;
			height: 100%;
			background: #FFFFFF;
		} */

	.swiper-item {
		width: 90%;
		height: 100%;
		margin: 0 auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		/* border-radius: 15px;
			box-shadow: 0px 10px 20px #EBEEF5; */
	}

	.ptop {
		flex-basis: 5%;
		font-size: 40rpx;
		margin-top: 14%;
	}

	.middle {
		/* width: 100%; 
			height: 65%; */
		/* flex-basis: 80%; */
		/* background-color: #F43F3B; */
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border-radius: 16px;
		box-shadow: 0px 15px 20px #EBEEF5;
	}

	.form {
		width: 75%;
		flex-basis: 30%;
		/* background-color: #007AFF; */
	}

	.bottom {
		/* width: 100%;
			height: 20%; */
		flex-basis: 10%;
		/* background-color: #CCE6FF; */
	}


	.btn {
		/* position: absolute; */
		width: 210rpx;
		height: 60rpx;
		margin-top: 6rpx;
		line-height: 60rpx;
		padding: 0 40rpx;
		border-radius: 30rpx;
		font-size: 32rpx;
		text-align: center;
		color: #454343;
		border: 1px solid #454343;
		z-index: 999;
		/* position: relative;
			bottom: 20rpx; */
	}

	.cu-form-group {
		background-color: #ffffff;
		padding: 1rpx 20rpx;
		display: flex;
		align-items: center;
		min-height: 130rpx;
		min-width: 100%;
		justify-content: space-between;
		border-bottom: 2rpx solid #eee;
		/* border-top: 0.8rpx solid #eee; */
	}


	.cu-form-group .title {
		text-align: justify;
		padding-right: 30upx;
		font-size: 30rpx;
		position: relative;
		height: 60upx;
		line-height: 60rpx;
	}

	.cu-form-group input {
		flex: 1;
		font-size: 30upx;
		color: #555;
		padding-right: 20upx;
	}

	.cu-form-group>text[class*="cuIcon-"] {
		font-size: 36upx;
		padding: 0;
		box-sizing: border-box;
	}

	.cu-form-group.align-start .title {
		height: 1em;
		margin-top: 32upx;
		line-height: 1em;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15rpx);
	}

	radio.red[checked] .wx-radio-input,
	radio.red.checked .uni-radio-input {
		background-color: #e54d42 !important;
		border-color: #e54d42 !important;
		color: #ffffff !important;
	}

	radio.blue[checked] .wx-radio-input,
	radio.blue.checked .uni-radio-input {
		background-color: #0081ff !important;
		border-color: #0081ff !important;
		color: #ffffff !important;
	}

	.labelfont {
		padding-right: 26rpx;
		font-size: 30rpx;
	}

	.pavatarview {
		padding-right: 45rpx;
	}

	.pavatar {
		height: 50px;
		width: 50px;
		margin-right: 40rpx;
		border-radius: 50%;
	}

	.partnerform {
		margin-top: 36rpx;
		width: 100%;
	}

	.pinfo {
		/* height: 200rpx;
			background-color: #CCE6FF;
			border-bottom: 1rpx solid #000000; */
	}

	.touxiang {
		/* padding-right: 90rpx; */
		width: 300rpx;
	}
</style>
