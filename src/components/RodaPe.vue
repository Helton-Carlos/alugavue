<template>
  <div class="fundo-verde">
    <div class="flex-jb container">
      <div>
        <h1 style="color: #fff; font-size: 45px">AlugaVue</h1>
      </div>
      <img src="../assets/cartoes.png" alt="Cartões de credito" style="width: 200px" />
      <div>
        <img src="../assets/facebook.png" alt="facebook" class="rede-social" />
        <img src="../assets/instagram.png" alt="instagran" class="rede-social" />
        <img src="../assets/whatsapp.png" alt="whatsaap" class="rede-social" />
      </div>
    </div>
    <p class="fim">Todos os direitos reservados</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fundo-verde {
  width: 100%;
  background-color: #006468;
  margin-top: 50px;
  padding: 40px 10px 10px 10px;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;

  font-size: 15px;
}
a:hover {
  color: #999999;
}
li {
  list-style: none;
}
.rede-social {
  margin-right: 20px;
}
.fim {
  text-align: center;
  padding: 20px;
  font-size: 12px;
  font-weight: 500;
}
</style>
