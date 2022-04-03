<template>
  <div class="home">
    <Main />
    <div class="container">
      <div style="margin: 40px 0px">
        <h2><strong class="borda-baixa">Novidades</strong></h2>
      </div>
      <div>
        <Card :objeto="this.objCard" />
      </div>
       <div style="margin: 40px 0px">
        <h2><strong class="borda-baixa">Busca</strong></h2>
      </div>
       <div>
        <Pesquisa :objeto="this.objPesquisa" />
      </div>
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";
import Pesquisa from "@/components/Pesquisa.vue";
import axios from "axios";
//import { api } from "@/services/serviceApi.js";
export default {
  name: "Home",
  components: {
    Main,
    Pesquisa,
    Card,
  },
  data() {
    return {
      objCard: [],
      objPesquisa:[]
    };
  },
  methods: {
    getCard() {
      let baseUrl= "http://localhost:3000"
      axios.get(baseUrl+"/novidades").then((res) => {
        this.objCard = res.data;
      });
       axios.get(baseUrl+"/bairros").then((res) => {
        this.objPesquisa= res.data;
      });
    },
  },
  created() {
    this.getCard();
  },
};
</script>

<style>
h2 {
  font-size: 35px;
  color: #020202;
}
.borda-baixa {
  border-bottom: 5px solid #008f8f;
}
</style>
