<template>
  <header id="titlebar">
    <ul id="titlebar_content">
      <li id="content_child"><p>Picture manager</p></li>
    </ul>
  </header>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
* {
	margin: 0px;
	padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 70px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}

#titlebar_content {
  background-color: #2f3241;
  height: 36px;
  text-align: left;
}

#content_child {
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
