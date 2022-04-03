<template>
  <div class="box">
    <select v-model="selected">
      <option disabled value="">Escolha o Bairro</option>
      <option v-for="bairros in objeto.bairros" :key="bairros">{{ bairros }}</option>
    </select>
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";
export default {
  name: "Main",
  props: ["objeto"],
  data() {
    return { selected: "" };
  },
};
</script>

<style scoped>
.box {
  width: 250px;
}
select {
  border: 2px solid #020202;
}
</style>
