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
        <Pesquisa :objeto="this.objPesquisa" @resultPesquisa="pegarResultado" />
        <Card :objeto="this.objCardPesquisa" :retornoFalso="retornoFalso" />
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
      retornoFalso: "",
      objPesquisa: [],
      objCardPesquisa: [],
    };
  },
  methods: {
    getCard() {
      let baseUrl = "http://localhost:3000";
      axios.get(baseUrl + "/novidades").then((res) => {
        this.objCard = res.data.novidades;
      });
      axios.get(baseUrl + "/bairros").then((res) => {
        this.objPesquisa = res.data;
      });
    },
    pegarResultado(parm) {
      let baseUrl = "http://localhost:3000";
      this.objCardPesquisa = [];

      axios.get(baseUrl + "/imoveis").then((res) => {
        let obj = res.data.imoveis;
        for (let i = 0; i < obj.length; i++) {
          if (parm.bairro === obj[i].endereco[0].bairro) {
            let valor;
            if (parm.valor === "0 a 500,00") {
              valor = 500;
            }
            if (parm.valor === "500,00 a 1.500") {
              valor = 1500;
            }
            if (parm.valor === "1.500 a 2.000") {
              valor = 2000;
            }
            let tiravalor = obj[i].valor.replace("R$", "");
            let converteInt = parseInt(tiravalor.replace(".", ""));
            if (valor >= converteInt) {
              if (parm.tipo === obj[i].tipo) {
                this.objCardPesquisa.push(obj[i]);
              } 
            } 
          }
          if (parm.bairro === "" || parm.valor === "" || parm.tipo === "") {
            this.objCardPesquisa.push(obj[i]);
          }
          if (this.objCardPesquisa.length === 0) {
            this.retornoFalso = "Não possui itens";
          }else{
            this.retornoFalso = null
          }
        }
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
