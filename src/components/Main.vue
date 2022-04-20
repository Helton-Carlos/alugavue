<template>
  <main>
    <div class="container" style="margin: 0 auto">
      <div class="flex-jb">
        <div>
          <h1>A sua nova casa está aqui no AlugaVue.</h1>
          <p style="margin-top: 10px">
            Encontre Resultados de Qualidade agora! Obtenha Alugue Seu Apartamento. Mais
            de 100 imoveis para você conhecer.
          </p>
          <div class="flex" style="margin-top: 10px">
            <img src="../assets/Logo-1.svg" alt="logo1" class="img-logo" />
            <img src="../assets/Logo-2.svg" alt="logo2" class="img-logo" />
            <img src="../assets/Logo.svg" alt="logo3" class="img-logo" />
          </div>
        </div>
        <div class="image">
          <img src="../assets/Image.png" alt="pessoa" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
main {
  background-color: #008f8f;
  color: #fff;
}
.img-logo {
  padding: 5px 5px;
  margin-right: 5px;
  width: 25%;
}
h1 {
  font-size: 40px;
  max-width: 400px;
  color: #fff;
}
@media screen and (max-width:900px) {
  .image {
    display: none;
  }
  main{
  padding: 50px 20px;}
}
</style>
