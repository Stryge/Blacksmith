<template>
	<img :src="getUrl" alt="album image">
</template>

<script>
export default {
	name: 'DisplayImage',
	props: [ 'imagesArray', 'index'],
	data() {
		return {
		}
	},
	computed: {
		getUrl() {
			let imageUrl = this.imagesArray[this.index].url
			return imageUrl
		}
	}
}
</script>
