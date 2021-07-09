<template>
	<button type=button v-on:click="changeLocation">Connexion</button>
</template>

<script>
const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientID = 'f67f7afc9e564b5baba949a2e66ec803'
const redirectURI = "http://localhost:8080"

export default {
	name: 'Login',
	methods: {
		changeLocation() {
			window.location.href = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`
		}
	},
}
</script>
