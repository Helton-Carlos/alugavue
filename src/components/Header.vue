<template>
  <div id="nav">
    <div>
      <router-link to="/"><h1>AlugaVue</h1></router-link>
    </div>
    <nav>
      <router-link to="/casas">Casas</router-link>
      <router-link to="/apartamentos">Apartamentos</router-link>
      <router-link to="/kit-net">Kit-net</router-link>
      <router-link to="/temporada">Temporada</router-link>
      <router-link to="/login" class="btn-primary" style="color: #ffffff"
        >Login</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 780px) {
  nav {
    display: none;
  }
}
</style>
