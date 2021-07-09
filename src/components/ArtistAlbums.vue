<template>
	<ul>
		<li class="album" v-for="album in albums" :key="album.id">
			<router-link :to="/album/ + album.id">
			<DisplayImage :imagesArray="album.images" :index="2"/>
			<span>{{ album.name }}</span>
			<div>{{album.release_date}}</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
import axios from 'axios'
import DisplayImage from '@/components/DisplayImage.vue'


export default {
	name: 'ArtistAlbums',
	props: [ 'artistId' ],
	components: {
		DisplayImage,
	},
	data() {
		return {
			albums: [],
		}
	},
	mounted() {
		axios.get(`https://api.spotify.com/v1/artists/${this.artistId}/albums`).then(res => {
			for (let i = 0; i < 20; i++) {
				if (res.data.items[i].album_group === 'album') this.albums.push(res.data.items[i])
			}
		}).catch(err => {
			throw err
		})
	}
}
</script>

<style>
.album {
	list-style-type: none;
	font-weight: bold;
}
</style>
