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
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";
import axios from "axios";
//import { api } from "@/services/serviceApi.js";
export default {
  name: "Home",
  components: {
    Main,
    Card,
  },
  data() {
    return {
      objCard: [],
    };
  },
  methods: {
    getCard() {
      axios.get("http://localhost:3000/novidades").then((res) => {
        this.objCard = res.data;
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
