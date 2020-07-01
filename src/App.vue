<template>
  <div id="app">
    <div id="nav">
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap"
        rel="stylesheet"
      />
      <router-link to="/">Home</router-link>|
      <router-link to="/release">Release</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "M PLUS 1p";
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
