<template>
	<div>
		<button @click="changeState">{{state}}</button>
	</div>
</template>

<script>
import { Howl } from 'howler'

let stream = undefined

export default {
	name: 'Player',
	data() {
		return {
			state: 'pause',
		}
	},
	methods: {
		changeState() {
			if (!stream) return
			if (stream.playing() === true) {
				stream.pause()
				this.state = 'play'
			} else {
				stream.play()
				this.state = 'pause'
			}
		}
	},
	created() {
		this.$mitt.on('playTrack',() => {
			if (stream) stream.stop()
			let url = this.$store.state.trackUrl
			stream = new Howl({
				src: [url],
				ext: ['mp3'],
				autoplay: true,
				html5: true
			})
			stream.play()
		}) 
	}
}
</script>
