<template>
  <div >
    <div id="nav">
      <div>
        <h1 class="retangulo">ALUGAVUE</h1>
      </div>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
#nav {
 color: blue;
  background-color: yellow;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: blue;
}

#nav a.router-link-exact-active {
  color: #282929;
}
.retangulo {
  border: 3px solid blue;
  padding: 2px 10px;
}
</style>
