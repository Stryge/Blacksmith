<template>
	<div v-if="artistId">
		<GoBack />
		<Artist :artistId="artistId" />
		<div>Albums :</div>
		<Albums :artistId="artistId"/>
	</div>
	<div v-else>
		<Search />
	</div>
</template>

<script>
import Artist from '@/components/Artist.vue'
import Albums from '@/components/ArtistAlbums.vue'
import GoBack from '@/components/GoBack.vue'
import Search from '@/components/Search.vue'

export default {
	name: 'Dashboard',
	props: ['token'],
	components: {
		Artist,
		Albums,
		GoBack,
		Search,
	},
	data() {
		return {
			artistId: this.$router.currentRoute._value.params['artistId']
		}
	},
}
</script>
