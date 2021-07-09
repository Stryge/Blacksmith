<template>
	<div>
		<img :src="imageUrl">
		<div>
			<div>{{album.name}}</div>
			<div>{{artist.name}} | {{album.release_date}} | {{album.total_tracks}} titres</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'AlbumInfo',
	props:  ['albumId'],
	data () {
		return {
			album: {},
			imageUrl: "",
			artist: {}
		}
	},
	mounted() {
		axios.get(`https://api.spotify.com/v1/albums/${this.albumId}`).then(res => {
			this.album = res.data
			this.imageUrl = res.data.images[1].url
			this.artist = res.data.artists[0]
		}).catch(err => {
			throw err
		})
	}
}
</script>
