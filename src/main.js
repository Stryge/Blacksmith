import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Player from './components/Player.vue'
import { createStore } from 'vuex'
import Mitt from 'mitt'

let app = createApp(App)
let store = createStore({
	state: {
		trackUrl: 'test',
		playerState: 'pause',
	},
	mutations: {
		loadTrack(state, preview_url) {
			state.trackUrl = preview_url
		}
	}
})
let mitt = new Mitt()

app.config.globalProperties.$mitt = mitt

app.component("Player", Player)
app.use(store)
app.use(router)
app.mount('#app')
