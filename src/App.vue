<template>
  <div>
    <div id="nav">
      <div>
        <router-link to="/"><h1>AlugaVue</h1></router-link>
      </div>
      <div>
        <router-link to="/casas">Casas</router-link>
        <router-link to="/apartamentos">Apartamentos</router-link>
        <router-link to="/kit-net">Kit-net</router-link>
        <router-link to="/temporada">Temporada</router-link>
        <router-link to="/login" class="btn-primary" style="color: #ffffff"
          >Login</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
h1 {
  padding-top: 20px;
  color: #008f8f;
  font-size: 32px;
  margin-right: 50px;
  font-style: italic;
}
#nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
  color: rgb(44, 44, 44);
}

#nav a.router-link-exact-active {
  color: #008f8f;
  border-top: 2px solid #008f8f;
}
.btn-primary {
  background-color: #008f8f;
  padding: 5px 15px;
  border-radius: 4px;
}
.flex {
  display: flex;
}
.flex-jb {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container{
width: 90%;
margin: 0 auto;
}
</style>
