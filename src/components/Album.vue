<template>
	<GoBack />
	<AlbumInfo :albumId="albumId" />
	<AlbumTracks :albumId="albumId" />
</template>

<script>
import AlbumTracks from '@/components/AlbumTracks.vue'
import AlbumInfo from '@/components/AlbumInfo.vue'
import GoBack from '@/components/GoBack.vue'
import axios from 'axios'

export default {
	name: "Album",
	components: {
		AlbumTracks,
		AlbumInfo,
		GoBack,
	},
	data() {
		return {
			albumId: this.$router.currentRoute._value.params['albumId'],
			album: {},
			imageUrl:"",
			artist:{},
		}
	},
	mounted() {
		axios.get(`https://api.spotify.com/v1/albums/${this.albumId}`).then(res => {
			this.album = res.data
			this.artist = res.data.artists[0]
			this.imageUrl = res.data.images[1].url
		}).catch(err => {
			throw err
		})
	}
}
</script>
