<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" class="status_bar" :isBack="true">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">图表分析</block>
		</cu-custom>
		<view>
			<uni-calendar :insert="true" :selected="selected" :lunar="false" :disable-before="false" />
		</view>
		<view class="lex-sub text-center">
			<view class="solid-bottom text-xl padding">
				<text class="text-black text-bold">习惯强度</text>
			</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
		</view>
		<!-- <button class="cu-btn bg-cyan" @tap="addchick">add</button> -->

	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import store from '../../../store/index.js'
	var _self;
	var canvaLineA = null;

	export default {
		components: {
			uniCalendar
		},
		data() {
			function getDate(date, AddMonthCount = 0, AddDayCount = 0) {
				if (typeof date !== 'object') {
					date = date.replace(/-/g, '/')
				}
				let dd = new Date(date)
				dd.setMonth(dd.getMonth() + AddMonthCount) // 获取AddDayCount天后的日期
				dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
				let y = dd.getFullYear()
				let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
				let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
				return y + '-' + m + '-' + d
			}

			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				iconname: '',
				chartData: {
					categories: [],
					series: [{
								name: '网络异常',
								data: [0, 0, 0, 0, 0, 0, 0, 0],
								color: '#66CCFF'
							}
							// , {
							// 	name: '第二个习惯',
							// 	data: [70, 40, 65,34,154, 100, 44, 68]
							// }, {
							// 	name: '第三个习惯',
							// 	data: [100,21,99, 80, 95, 150, 112, 132]

					 ]
				},
				startDate: getDate(new Date(), 0, -7),
				endDate: getDate(new Date(), 0, 7),
				selected: [{
					date: '2000-02-27',
					info: '已打卡',
					// data: {
					// 	custom: 'xx习惯打卡成功',
					// 	name: '时间：1'
					// }
				}],
				uuid: ""
			}
		},
		onLoad(e) {

			_self = this;
			// console.log(e);
			_self.iconname = e.iconname
			try {
				const value = uni.getStorageSync('uuid');
				if (value) {
					_self.uuid = value
				}
			} catch (e) {
				console.log("error");
			}
			// console.log(_self.iconname);
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
			this.addchick();

		},
		methods: {

			getServerData() {
				let a1 = _self.getDatechart(-7)
				let a2 = _self.getDatechart(-6)
				let a3 = _self.getDatechart(-5)
				let a4 = _self.getDatechart(-4)
				let a5 = _self.getDatechart(-3)
				let a6 = _self.getDatechart(-2)
				let a7 = _self.getDatechart(-1)
				let a8 = _self.getDatechart()
				
				// console.log(a1);
				_self.chartData.categories.push(a1, a2, a3, a4, a5, a6, a7, a8)
				
				uni.request({
					url: 'http://47.104.95.72:5000/qiandao',
					data: {
						h: _self.iconname,
						uuid: _self.uuid
					},
					success: function(res) {
						// console.log(res.data)
						
						_self.chartData.series[0].data = res.data
						_self.chartData.series[0].name = _self.iconname
						
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// LineA.categories = _self.chartData.categories;
						// LineA.series = _self.chartData.series;
						// _self.showLineA("canvasLineA", _self.chartData);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
						
						
					},
					complete() {
						_self.showLineA("canvasLineA", _self.chartData);
					}
				});
				// _self.showLineA("canvasLineA", _self.chartData);
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: {
						show: true
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 0,
						max: 30,
						format: (val) => {
							return val.toFixed(0) + '次'
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});

			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			addchick: function() {
				// console.log(_self.url)
				uni.request({
					url: "http://47.104.95.72:5000/calendar",
					data:{
						iconname:_self.iconname,
						uuid:_self.uuid
					},
					success(res) {

						let a = res.data
						// console.log(a);
						// console.log(_self.selected);
						_self.selected = a
						// console.log(_self.selected);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
					}
				})

			},
			getDatechart: function(AddDayCount = 0) {
				let td = new Date()
				let nd = td.getDate() + AddDayCount
				return nd + '日'
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

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
