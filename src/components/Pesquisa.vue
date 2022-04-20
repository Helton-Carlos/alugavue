<template>
  <div class="box">
    <select v-model="bairro">
      <option disabled value="">Escolha o Bairro</option>
      <option v-for="bairros in objeto.bairros" :key="bairros">{{ bairros }}</option>
    </select>
    <select v-model="valor">
      <option disabled value="">Valores</option>
      <option v-for="preco in custo" :key="preco">{{ preco }}</option>
    </select>
    <select v-model="tipo">
      <option disabled value="">Tipo</option>
      <option v-for="type in tiposValor" :key="type">{{ type }}</option>
    </select>
    <button @click="pesquisar()">Pesquisar</button>
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";
export default {
  name: "Main",
  props: ["objeto"],
  emit: ["nomeBairro", "precoValor", "nomeTipo"],
  data() {
    return {
      bairro: "",
      valor: "",
      tipo: "",
      custo: ["0 a 500,00", "500,00 a 1.500", "1.500 a 2.000"],
      tiposValor: ["apartamento", "kit-net", "casa"],
    };
  },
  methods: {
    pesquisar() {
      var obj = {
        bairro: this.bairro,
        valor: this.valor,
        tipo: this.tipo,
      };
      this.$emit("resultPesquisa", obj);
    },
  },
};
</script>

<style scoped>
.box {
  width: 250px;
  display: flex;
}
select {
  width: 250px;
  border: 1px solid #020202;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 18px;
  margin: 0px 15px 25px 0px;
}
button {
  width: 250px;
  border: none;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 18px;
  border: 1px solid #008f8f;
  background-color: #008f8f;
  color: #fff;
  margin: 0px 15px 25px 0px;
}
button:hover {
  background: #043636;
  transition: 1s;
}
@media screen and (max-width: 800px) {
  .box {
    flex-wrap: wrap;
    width: 100%;
  }
  select,
  button {
    width: 100%;
  }
}
</style>
