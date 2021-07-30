<template>
	<div class="home" v-if="access_token">
		<Dashboard/>
	</div>
	<div class="home" v-else>
		<Login />
	</div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'

const urlHash = window.location.hash.substring(2).split('&').shift()
const token = urlHash.split('=').pop()

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
if (token) {
	window.location.href = 'http://localhost:8080/#/'
}

export default {
  name: 'Home',
  components: {
    Login,
    Dashboard,
  },
  data() {
	return {
		access_token: token
	}
  }
}
</script>

<style>
.home {
	width:100%;
	margin-left: auto;
	margin-right: auto;
}
</style>
