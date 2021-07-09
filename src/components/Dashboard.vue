<template>
	<div v-if="artistId">
		<GoBack />
		<Artist :artistId="artistId" />
		<div>Albums :</div>
		<Albums :artistId="artistId" />
	</div>
	<div v-else>
		<p>go to the search panel</p>
	</div>
</template>

<script>
import Artist from '@/components/Artist.vue'
import Albums from '@/components/ArtistAlbums.vue'
import GoBack from '@/components/GoBack.vue'

export default {
	name: 'Dashboard',
	props: ['token'],
	components: {
		Artist,
		Albums,
		GoBack,
	},
	data() {
		return {
			artistId: this.$router.currentRoute._value.params['artistId']
		}
	},
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>
