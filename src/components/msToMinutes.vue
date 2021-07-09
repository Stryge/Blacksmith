<template>
	<span>{{msToMinutes}}</span>
</template>

<script>
export default {
	name: 'msToMinutes',
	props: [ 'track' ],
	computed: {
		msToMinutes() {
			let milliseconds = this.track.duration_ms
			let minutes = Math.floor(milliseconds / 60000)
			let seconds = ((milliseconds % 60000) / 1000).toFixed(0)
			let result = seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`

			return result
		}
	}
}
</script>
