<template>
	<button type="button" v-on:click="goBack">back</button>
</template>

<script>
export default {
	name: 'goBack',
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>
