<template>
	<button @click="changeState">{{state}}</button>
</template>

<script>
import { Howl } from 'howler'

let stream = undefined

export default {
	name: 'Player',
	props: [ 'previewUrl' ],
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
	watch: {
		previewUrl(newUrl) {
			if (stream) stream.stop()
			stream = new Howl({
				src: [newUrl],
				ext: ['mp3'],
				autoplay: true,
				html5: true
			})
			console.log('youpi')
			stream.play()
		}
	},
}
</script>
