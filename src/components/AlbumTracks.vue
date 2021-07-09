<template>
	<ul>
		<li class="track" v-for="track in tracks" :key="track">
			<div>
				<span>{{track.track_number}}</span>
				<span>{{track.name}}</span>
				<div>{{track.artists[0].name}}</div>
			</div>
			<msToMinutes :track="track" />
		</li>
	</ul>
</template>

<script>
import axios from 'axios'
import msToMinutes from '@/components/msToMinutes'

export default {
	name: 'AlbumTracks',
	props: [ 'albumId' ],
	components: {
		msToMinutes,
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
