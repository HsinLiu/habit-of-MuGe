(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/guide"],{5505:function(t,a,e){"use strict";e.r(a);var i=e("a246"),n=e("5ef1");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("95b4");var u=e("2877"),o=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=o.exports},"5ef1":function(t,a,e){"use strict";e.r(a);var i=e("683c"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},"683c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("fcfe"));function n(t){return t&&t.__esModule?t:{default:t}}var s,u=function(){return e.e("components/uni-number-box/uni-number-box").then(e.bind(null,"89a5"))};function o(t){var a=new Date,e=a.getFullYear(),i=a.getMonth()+1,n=a.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(e,"-").concat(i,"-").concat(n)}var r={components:{uniNumberBox:u},data:function(){return{modalName:null,experience:"立即体验",uuid:"",iconlist:[],initjiyu:"写给完成目标后的你...",isselecthabit:{"唱歌":!1,"晨练":!1,"跑步":!1,"吃早餐":!1,"画画":!1,"多喝烫水":!1,"与家人通话":!1,"减肥":!1,"健身":!1,"戒酒":!1,"戒烟":!1,"看书":!1,"学习":!1,"看电影":!1,"微笑":!1,"吉他":!1,"练字":!1,"吃蔬菜":!1,"理财":!1,"练钢琴":!1,"陪孩子":!1,"篮球":!1,"摄影":!1,"刷牙":!1,"听歌":!1,"滑板":!1,"英语":!1,"早起":!1,"早睡":!1,"做饭":!1},item_id:"slide1",dayvalue:21,nowselect:"目标",pname:"",tempsex:"Ta",psex:"",pcallme:"",pavatar:"../../static/touxiang/avatar.png",myname:"",mysex:"",myIdentity:"",mybirthday:o({format:!0}),myavatar:"../../static/touxiang/avatar.png",startDate:o("start"),endDate:o("end")}},methods:{showModal1:function(t){this.modalName="DialogModal1"},showModal2:function(t){this.modalName="DialogModal2"},hideModal1:function(t){this.modalName=null},hideModal2:function(t){this.modalName=null,this.showModal1()},makeallsetStorage:function(){t.setStorage({key:"uuid",data:this.uuid}),t.setStorage({key:"isselecthabit",data:this.isselecthabit}),t.setStorage({key:"pname",data:this.pname}),t.setStorage({key:"psex",data:this.psex}),t.setStorage({key:"pcallme",data:this.pcallme}),t.setStorage({key:"pavatar",data:this.pavatar}),t.setStorage({key:"myname",data:this.myname}),t.setStorage({key:"mysex",data:this.mysex}),t.setStorage({key:"myIdentity",data:this.myIdentity}),t.setStorage({key:"mybirthday",data:this.mybirthday}),t.setStorage({key:"myavatar",data:this.myavatar}),t.request({url:"http://47.104.95.72:5000/usermanage",method:"POST",data:[this.uuid,this.isselecthabit,this.pname,this.psex,this.pcallme,this.pavatar,this.myname,this.mysex,this.myIdentity,this.mybirthday,this.myavatar]})},getallsetStorage:function(){var a=this;t.request({url:"http://47.104.95.72:5000/likes",method:"POST",data:this.uuid,success:function(e){a.isselecthabit=e.data[1],a.pname=e.data[2],a.psex=e.data[3],a.pcallme=e.data[4],a.pavatar=e.data[5],a.myname=e.data[6],a.mysex=e.data[7],a.myIdentity=e.data[8],a.mybirthday=e.data[9],a.myavatar=e.data[10],t.setStorage({key:"uuid",data:s.uuid}),t.setStorage({key:"isselecthabit",data:a.isselecthabit}),t.setStorage({key:"pname",data:a.pname}),t.setStorage({key:"psex",data:a.psex}),t.setStorage({key:"pcallme",data:a.pcallme}),t.setStorage({key:"pavatar",data:a.pavatar}),t.setStorage({key:"myname",data:a.myname}),t.setStorage({key:"mysex",data:a.mysex}),t.setStorage({key:"myIdentity",data:a.myIdentity}),t.setStorage({key:"mybirthday",data:a.mybirthday}),t.setStorage({key:"myavatar",data:a.myavatar})}})},launchFlag:function(a){t.setStorage({key:"launchFlag",data:!0}),0==a?this.getallsetStorage():this.makeallsetStorage(),t.switchTab({url:"/pages/tabBar/chat/chat"})},getDeviceInfo:function(){plus.device.getInfo({success:function(a){s.uuid=a.uuid,t.request({url:"http://47.104.95.72:5000/user_info",data:{uuid:s.uuid},success:function(t){"1"==t.data&&s.showModal1()},fail:function(){s.uuid="网络异常"},complete:function(){}})}})},habitClick:function(t,a){this.isselecthabit[a]?this.isselecthabit[a]=!1:this.isselecthabit[a]=!0,this.initjiyu=this.iconlist[t].jiyu},goChange:function(t){var a=t.detail.current+1;this.item_id="slide"+a},go2:function(){this.item_id="slide2"},go3:function(){this.item_id="slide3"},sexchange:function(t){this.psex=t.detail.value,"girlfriend"==this.psex&&(this.tempsex="她"),"boyfriend"==this.psex&&(this.tempsex="他")},mysexchange:function(t){this.mysex=t.detail.value},indentitychange:function(t){this.myIdentity=t.detail.value},setpAvatar:function(){var a=this;t.chooseImage({count:1,success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(e){a.pavatar=e.savedFilePath,t.setStorage({key:"pavatar",data:a.pavatar})}})}})},setAvatar:function(){var a=this;t.chooseImage({count:1,success:function(e){var i=e.tempFilePaths;t.saveFile({tempFilePath:i[0],success:function(e){a.myavatar=e.savedFilePath,t.setStorage({key:"myavatar",data:a.myavatar})}})}})},bindDateChange:function(t){this.mybirthday=t.target.value}},mounted:function(){this.iconlist=i.default.state.iconlib},onLoad:function(){s=this,this.getDeviceInfo()},computed:{friendname:function(){var t=this.pname;return""==t?"Ta":this.pname}}};a.default=r}).call(this,e("6e42")["default"])},"727f":function(t,a,e){"use strict";(function(t){e("9805"),e("921b");i(e("66fd"));var a=i(e("5505"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"95b4":function(t,a,e){"use strict";var i=e("c93c"),n=e.n(i);n.a},a246:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},c93c:function(t,a,e){}},[["727f","common/runtime","common/vendor"]]]);