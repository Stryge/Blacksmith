<template>
<div id="sidenav">
	<ul>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/about">About</router-link></li>
	</ul>
</div>
<div id="main">
	<router-view id='view'/>
</div>
<div id="footer">
	<Player id="player" />
</div>
</template>

<style>
html {
	height:100%;
	width:100;
}

body {
	height: 100%;
	width:100;
	margin: 0px;
}

#app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 1fr 100px;
  grid-template-areas:
	"sidenav main"
	"sidenav main"
	"footer footer";
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color:#474747
}

#sidenav {
  grid-area: sidenav;
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  left: 0
}

#sidenav ul {
  padding: 0
}

#sidenav a {
  font-weight: bold;
  color: #2c3e50;
}

#sidenav a.router-link-exact-active {
  color: #42b983;
}

#main {
  grid-area: main;
  overflow: auto;
}

#footer {
  grid-area: footer;
  background-color: grey;
}

#player {
	height: 100%;
	display: inline-block;
}
</style>
