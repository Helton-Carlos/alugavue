<template>
  <div class="home">
    <Main />
    <div class="container">
      <div style="margin: 40px 0px">
        <h2><strong class="borda-baixa">Novidades</strong></h2>
      </div>
      <div>
        <Card
          :titulo="objCard"
          :valor="objCard"
          :codigo="objCard"
          :id="objCard"
          :disponivel="objCard"
          :banheiro="objCard"
          :quarto="objCard"
          :garagem="objCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Main,
    Card,
  },
  methods: {
    getCard() {},
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
