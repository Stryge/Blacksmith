<template>
	<div v-if="clickable" v-on:click="getArtistAlbums">
		<img id="image" :src="image" alt="artist image">
		<span id="artistName">{{ artist.name }}</span>
	</div>
	<div v-else>
		<img id="image" :src="image" alt="artist image">
		<span id="artistName">{{ artist.name }}</span>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Artist',
	props: { 
		artistId: {
			type: String
		},
		clickable: {
			type: Boolean,
			default: false,
		}
	},
	data () {
		return {
			artist: {},
			image: "",
		}
	},
	methods: {
		getArtistAlbums() {
			this.$router.push({path: `/dashboard/${this.artistId}`})
		}
	},
	mounted() {
		axios.get(`https://api.spotify.com/v1/artists/${this.artistId}`).then(res => {
			this.artist = res.data
			this.image = res.data.images[1].url
		}).catch(err => {
			throw err
		})
	}
}
</script>

<style>
#artistName {
	font-weight: bold;
}
</style>
