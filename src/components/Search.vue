<template>
	<div>
		<input v-model="query">
		<button type="button" v-on:click="searchAlbums">Search</button>
	</div>
	<div>
		<ul>
			<li v-for="artist in artists" :key="artist">
				<Artist :artistId="artist.id" :clickable="true"/>
			</li>
		</ul>
	</div>
</template>

<script>
import Artist from '@/components/Artist.vue'
import axios from 'axios'

export default {
	name: "Search",
	components: {
		Artist,
	},
	data() {
		return {
			query: "",
			type: "artist",
			artists: []
		}
	},
	methods: {
		searchAlbums() {
			axios.get(`https://api.spotify.com/v1/search?q=${this.query}&type=${this.type}`).then(res => {
				this.artists = res.data.artists.items
			}).catch(err => {
				throw err
			})
		}
	},
}
</script>
