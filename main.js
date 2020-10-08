import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

import store from './store'
Vue.prototype.$store = store



App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
