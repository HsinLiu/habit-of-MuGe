<template>
	<view class="content">
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">系统通知</view>
				</view>
				<view class="padding-xl">
					系统检测到您的设备{{uuid}}为老用户,
					<br />
					点击是,则载入之前的服务端用户信息？
					<br />
					点击否,则重置用户数据并覆盖之前用户信息。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action ">
						<button class="cu-btn line-green text-green" @tap="showModal2()">新用户</button>
						<button class="cu-btn bg-green margin-left" @tap="launchFlag(false)">载入</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">系统警告</view>
				</view>
				<view class="padding-xl">
					将使用新用户身份进入，将覆盖服务端的用户信息，操作不可逆，是否确定
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal2()">取消</button>
						<button class="cu-btn bg-red margin-left" @tap="hideModal1()">确定</button>
					</view>
				</view>
			</view>
		</view>
		<swiper class="swiper" :autoplay="false" :duration="200" :current-item-id="item_id" @change="goChange">
			<swiper-item item-id="slide1">
				<view class="swiper-item">
					<view class="top">请选择要养成的习惯:</view>
					<view class="middle">
						<scroll-view scroll-y="true" class="scrollview">
							<view v-for="(icon,index) of iconlist" :key='index' class="iconitem animation-scale-up">
								<view class="iconbox" @tap="habitClick(index,icon.iconname)">
									<view class="imgicon">
										<image :src="'../../static/iconfont/'+icon.url" class="imgicon" :class="{selectedicon:isselecthabit[icon.iconname],unselectedicon:!isselecthabit[icon.iconname]}"></image>
									</view>
									<text class="iconname">{{icon.iconname}}</text>
								</view>
							</view>
						</scroll-view>
						<view class="form">
							<text id="text">{{nowselect}}坚持天数:</text>
							<uni-number-box  :value="dayvalue" :min="1" :max="10000"></uni-number-box>
							<br />
							<text id="jiyu">给未来的自己:</text>
							<input class="jiyuinput"  v-model="jiyu" :placeholder="initjiyu" />
						</view>
					</view>
					<view class="bottom">
						<button class="btn" @tap="go2()">下一步</button>
					</view>
				</view>
			</swiper-item>
			<swiper-item item-id="slide2">
				<view class="swiper-item">
					<view class="ptop">请设置陪伴人{{tempsex}}的资料:</view>
					<view class="middle">
						<view class="partnerform">
							<view class="cu-form-group pinfo pname">
								<text class="title">{{tempsex}}的名字:</text>
								<input  name="input" confirm-type="done" v-model="pname" placeholder="请输入陪伴人姓名" maxlength="6" />
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
							<view class="cu-form-group pinfo pavatar">
								<text class="title touxiang">{{friendname}}的头像:</text>
								<view class="pavatar" @tap="setpAvatar()">
									<image class="pavatar" :src="pavatar"></image>
								</view>
							</view>
							<view class="cu-form-group pinfo pcallme">
								<text class="title">{{friendname}}称呼你为:</text>
								<input  name="input" confirm-type="done" v-model="pcallme" placeholder="陪伴人怎么称呼你" maxlength="6" />
							</view>
						</view>
					</view>
					<view class="bottom">
						<button class="btn" @tap="go3()">下一步</button>
					</view>
				</view>
			</swiper-item>
			<swiper-item item-id="slide3">
				<view class="swiper-item">
					<view class="ptop">请设置个人信息:</view>
					<view class="middle">
						<view class="partnerform">
							<view class="cu-form-group pinfo pname">
								<text class="title">昵称:</text>
								<input  name="input" confirm-type="done" v-model="myname" placeholder="请设置昵称" maxlength="6" />
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
							<view class="cu-form-group pinfo pavatar">
								<text class="title touxiang">头像:</text>
								<view class="pavatar" @tap="setAvatar">
									<image class="" :src="myavatar"></image>
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
										<radio class="brown" :class="myIdentity=='other'?'checked':''" :checked="myIdentity=='other'?true:false"
										 value="other" />其他
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
						<button class="btn" @tap="launchFlag(true)">立即体验</button>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import store from '../../store/index.js';
	var _self;

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
		components: {
			uniNumberBox
		},
		data() {
			return {
				modalName: null,
				experience: '立即体验',
				uuid: "",
				iconlist: [],
				initjiyu: '写给完成目标后的你...',
				// jiyu:"",
				isselecthabit: {
					"唱歌": false,
					"晨练": false,
					"跑步": false,
					"吃早餐": false,
					"画画": false,
					"多喝烫水": false,
					"与家人通话": false,
					"减肥": false,
					"健身": false,
					"戒酒": false,
					"戒烟": false,
					"看书": false,
					"学习": false,
					"看电影": false,
					"微笑": false,
					"吉他": false,
					"练字": false,
					"吃蔬菜": false,
					"理财": false,
					"练钢琴": false,
					"陪孩子": false,
					"篮球": false,
					"摄影": false,
					"刷牙": false,
					"听歌": false,
					"滑板": false,
					"英语": false,
					"早起": false,
					"早睡": false,
					"做饭": false
				}, //选择的习惯列表
				item_id: "slide1",
				dayvalue: 21,
				nowselect: "目标",
				pname: "", //姓名
				tempsex: "Ta",
				psex: "", //性别
				pcallme: "", //Ta对你的昵称
				pavatar: "../../static/touxiang/avatar.png",
				//
				myname: "",
				mysex: "",
				myIdentity: "",
				mybirthday: getDate({
					format: true
				}),
				myavatar: "../../static/touxiang/avatar.png",
				//
				startDate: getDate('start'),
				endDate: getDate('end')

			};
		},
		methods: {
			showModal1(e) {
				this.modalName = "DialogModal1"
			},
			showModal2(e) {
				this.modalName = "DialogModal2"
			},
			hideModal1(e) {
				this.modalName = null
			},
			hideModal2(e) {
				this.modalName = null
				this.showModal1()
			},
			makeallsetStorage: function() {
				// console.log("存储ing");
				uni.setStorage({
					key:"uuid",
					data:this.uuid
				})
				uni.setStorage({
					key:"isselecthabit",
					data:this.isselecthabit
				})
				uni.setStorage({
					key:"pname",
					data:this.pname
				})
				uni.setStorage({
					key:"psex",
					data:this.psex
				})
				uni.setStorage({
					key:"pcallme",
					data:this.pcallme
				})
				uni.setStorage({
					key:"pavatar",
					data:this.pavatar
				})
				uni.setStorage({
					key:"myname",
					data:this.myname
				})
				uni.setStorage({
					key:"mysex",
					data:this.mysex
				})
				uni.setStorage({
					key:"myIdentity",
					data:this.myIdentity
				})
				uni.setStorage({
					key:"mybirthday",
					data:this.mybirthday
				})
				uni.setStorage({
					key:"myavatar",
					data:this.myavatar
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
			getallsetStorage:function(){
				uni.request({
					url:"http://47.104.95.72:5000/likes",
					method:"POST",
					data:this.uuid,
					// dataType:"json",
					success: (res) => {
						// console.log(res.data);
						// let alldata =  res.data
						this.isselecthabit = res.data[1]
						// console.log(res.data);
						// console.log(res.data[1]);
						this.pname = res.data[2]
						this.psex = res.data[3]
						this.pcallme = res.data[4]
						this.pavatar = res.data[5]
						this.myname = res.data[6]
						this.mysex = res.data[7]
						this.myIdentity = res.data[8]
						this.mybirthday = res.data[9]
						this.myavatar = res.data[10]
						uni.setStorage({
							key:"uuid",
							data:_self.uuid
						})
						uni.setStorage({
							key:"isselecthabit",
							data:this.isselecthabit
						})
						uni.setStorage({
							key:"pname",
							data:this.pname
						})
						uni.setStorage({
							key:"psex",
							data:this.psex
						})
						uni.setStorage({
							key:"pcallme",
							data:this.pcallme
						})
						uni.setStorage({
							key:"pavatar",
							data:this.pavatar
						})
						uni.setStorage({
							key:"myname",
							data:this.myname
						})
						uni.setStorage({
							key:"mysex",
							data:this.mysex
						})
						uni.setStorage({
							key:"myIdentity",
							data:this.myIdentity
						})
						uni.setStorage({
							key:"mybirthday",
							data:this.mybirthday
						})
						uni.setStorage({
							key:"myavatar",
							data:this.myavatar
						})
					}
				})
			},
			launchFlag: function(y) {
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
					key: 'launchFlag',
					data: true,
				});
				if (y == false) {
					this.getallsetStorage()
					// console.log(false);
				} else {
					this.makeallsetStorage()
				}

				uni.switchTab({
					url: '/pages/tabBar/chat/chat'
				});
			},
			getDeviceInfo: function() {
				plus.device.getInfo({
					success: function(e) {
						_self.uuid = e.uuid
						uni.request({
							url: "http://47.104.95.72:5000/user_info",
							data: {
								uuid: _self.uuid
							},
							success: (res) => {
								// console.log(res.data)
								if (res.data == "1") {
									_self.showModal1()
								} else {

								}
							},
							fail: () => {
								_self.uuid = "网络异常"
							},
							complete: () => {

							}
						})

						
					}
				});

			},
			habitClick(index, theiconname) {
				// try {
				// console.log(theiconname);
				if (this.isselecthabit[theiconname]) {
					this.isselecthabit[theiconname] = false
					// console.log(this.isselecthabit[theiconname] + theiconname);
				} else {
					this.isselecthabit[theiconname] = true
					// console.log(this.isselecthabit[theiconname] + theiconname);
				}
				this.initjiyu = this.iconlist[index].jiyu


			},
			goChange(event) {
				var current = event.detail.current + 1
				this.item_id = 'slide' + current
			},
			go2() {
				this.item_id = 'slide2'
			},
			go3() {
				this.item_id = 'slide3'
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
					count:1,
					success: (res) => {
						let tempAvatar = res.tempFilePaths
						uni.saveFile({
							tempFilePath:tempAvatar[0],
							success: (res) => {
								this.pavatar = res.savedFilePath
								uni.setStorage({
									key: "pavatar",
									data: this.pavatar
								})
							}
						})
					}
				})
			},
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
			bindDateChange: function(e) {
				this.mybirthday = e.target.value
			}
		},
		mounted() {
			this.iconlist = store.state.iconlib
		},
		onLoad() {
			_self = this
			// this.iconlist = store.state.iconlib
			this.getDeviceInfo()

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
	@import url("../../colorui/animation.css");

	/* @import url("../../colorui/main.css"); */
	page,
	.content {
		width: 100%;
		height: 100%;
		background-size: 100% auto;
		padding: 0;
	}

	.swiper {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
		/* display: -webkit-flex; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

	}

	.top {
		/* width: 100%;
		height: 5%; */
		flex-basis: 5%;
		font-size: 40rpx;
		margin-top: 12%;
	}

	.ptop {
		flex-basis: 5%;
		font-size: 40rpx;
		margin-top: 14%;
	}

	.middle {
		/* width: 100%; 
		height: 65%; */
		flex-basis: 75%;
		/* background-color: #F43F3B; */
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.scrollview {
		/* background-color: #F43F3B; */
		width: 80%;
		height: 60%;
		flex-basis: 70%;
		margin: 0 auto;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		border: 0.2rpx black solid;
		border-radius: 5%;
	}

	.iconitem {
		/* 	display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30upx 10upx;
		width: 25%;
		text-align: center;
		white-space: normal;
		word-break: break-all;
		box-sizing: border-box; */
		display: inline-flex;
		flex-direction: column;
		width: 33%;
		flex-basis: 33%;
		padding-top: 3rpx;

		/* border:1px black solid; */
		/* justify-content: space-between;
		align-items: center; */
		/* border: 1rpx black solid; */
	}

	.iconbox {
		height: 100%;
		display: inline-flex;
		flex-direction: column;
		width: 100%;
		/* flex-basis: 33%; */
		padding-top: 3rpx;

	}

	.imgicon {
		/* text-align: center; */
		display: block;
		height: 100rpx;
		/* width: 100rpx; */
		width: 100rpx;
		margin: 0 auto;
		/* border: 0.2rpx black solid; */
	}

	.iconname {
		margin-top: 3rpx;
		font-size: 20rpx;
	}

	.selectedicon {
		animation-name: shake;
		outline: 1rpx dashed black;
		/* border-radius: 20rpx; EBEEF5*/
		box-shadow: 8rpx 5rpx 3rpx 5rpx #FCF7E9;

	}

	.unselectedicon {
		animation-name: fade;
		animation-duration: .8s;
		animation-timing-function: linear;
	}

	.form {
		width: 75%;
		flex-basis: 30%;
		/* background-color: #007AFF; */
	}

	.bottom {
		flex-basis: 10%;
	}

	#jiyu {
		display: block;
		margin: 20rpx auto;
		/* text-align: left; */
	}

	.jiyuinput {
		height: 100rpx;
		width: 90%;
		font-size: 24rpx;
		margin: 0 auto;
		border: 1rpx solid #454343;
		border-radius: 20rpx;
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

	radio.orange[checked] .wx-radio-input,
	radio.orange.checked .uni-radio-input {
		background-color: #f37b1d !important;
		border-color: #f37b1d !important;
		color: #ffffff !important;
	}

	radio.green[checked] .wx-radio-input,
	radio.green.checked .uni-radio-input {
		background-color: #39b54a !important;
		border-color: #39b54a !important;
		color: #ffffff !important;
		border-color: #39B54A !important;
	}

	radio.purple[checked] .wx-radio-input,
	radio.purple.checked .uni-radio-input {
		background-color: #6739b6 !important;
		border-color: #6739b6 !important;
		color: #ffffff !important;
	}

	radio.brown[checked] .wx-radio-input,
	radio.brown.checked .uni-radio-input {
		background-color: #a5673f !important;
		border-color: #a5673f !important;
		color: #ffffff !important;
	}


	.labelfont {
		padding-right: 26rpx;
		font-size: 30rpx;
	}

	.pavatar {
		height: 100rpx;
		width: 100rpx;
		margin-right: 40rpx;
	}

	.partnerform {
		margin-top: 36rpx;
		width: 100%;
	}


	.touxiang {
		/* padding-right: 90rpx; */
		width: 300rpx;
	}
</style>
