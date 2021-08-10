<template>
	<ul>
		<li class="track" v-for="track in tracks" :key="track">
			<Track :track="track" @play-track="playTrack"/>
			<msToMinutes :track="track" />
		</li>
	</ul>
</template>

<script>
import axios from 'axios'
import msToMinutes from '@/components/msToMinutes'
import Track from '@/components/Track'

export default {
	name: 'AlbumTracks',
	props: [ 'albumId' ],
	emits: [ 'playTrack' ],
	components: {
		msToMinutes,
		Track,
	},
	data () {
		return {
			tracks: [],
		}
	},
	mounted() {
			axios.get(`https://api.spotify.com/v1/albums/${this.albumId}/tracks`).then(res => {
				this.tracks = res.data.items
			}).catch(err => {
				throw err
			})
	}
}
</script>

<style>
.track {
	list-style-type: none;
	text-align: left;
}
</style>
