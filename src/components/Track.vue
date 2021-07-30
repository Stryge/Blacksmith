<template>
	<div v-on:click="playTrack">
		<span>{{track.track_number}} {{track.name}}</span>
        <div>{{track.artists[0].name}}</div>
	</div>
</template>

<script>
export default {
	name: 'Track',
	props: [ 'track' ],
	emits: [ 'playTrack' ],
	methods: {
		playTrack() {
			console.log('track event', this.track.preview_url)
			this.$emit('playTrack', this.track.preview_url)
		}
	}
}
</script>
