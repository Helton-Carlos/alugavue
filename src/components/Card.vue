<template>
  <div class="flex-wrap" >
    {{ retornoFalso }}
    <div v-for="(objcard, index) in objeto" :key="index" style="margin-bottom:10px">
      <img
        :src="require(`../assets/${objcard.img}`)"
        :alt="objcard.id"
        style="width: 95%"
      />
      <div class="coluna">
        <h4>{{ objcard.titulo }}</h4>
        <div class="flex" style="padding: 5px 0px">
          <p style="color: #008f8f; margin-right: 10px">
            <strong>{{ objcard.valor }}</strong>
          </p>
          <i>Código: {{ objcard.codigo }}</i>
        </div>
        <div style="margin: 5px 0px">
          <router-link to="/casas">Saiba mais</router-link>
        </div>
      </div>
    </div>
  </div>
  <!--  
        <div class="flex">
            <div class="flex" style="padding-right: 15px">
              <span class="material-icons-outlined">home</span>
              <div style="padding-top: 2px">
                <strong>Área aproximada: </strong>
                <p>45 m²</p>
              </div>
            </div>
            <div class="flex" style="padding-right: 15px">
              <span class="material-icons-outlined">bed</span>
              <div style="padding-top: 2px">
                <strong>Quarto: </strong>
                <p>1</p>
              </div>
            </div>
            <div class="flex" style="padding-right: 15px">
              <span class="material-icons-outlined">bathtub</span>
              <div style="padding-top: 2px">
                <strong>Banheiro: </strong>
                <p>1</p>
              </div>
            </div>
          </div>
-->
</template>

<script>
import "material-icons/iconfont/material-icons.css";
export default {
  name: "Main",
  props: ["objeto", "retornoFalso"],
};
</script>

<style scoped>
a {
  background-color: #008f8f;
  text-decoration: none;
  color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
}
</style>
