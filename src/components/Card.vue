<template>
  <div>
    <div>
    {{objeto}}
      <div style="width: 400px">
        <img src="../assets/ap-01.png" alt="01" />
        <div class="coluna">
          <h3>Apartamento 1 quarto para alugar 45m²</h3>
          <div class="flex-jb" style="padding: 5px 0px">
            <p style="color: #008f8f"><strong>por R$ 1.100,00</strong></p>
            <i>Código: 902165</i>
          </div>
          <div style="margin: 5px 0px">
            <router-link to="/casas">Saiba mais</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <div class="flex">
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



--></template>

<script>
import "material-icons/iconfont/material-icons.css";
export default {
  name: "Main",
  props: ['objeto'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  background-color: #008f8f;
  text-decoration: none;
  color: #fff;
  border-radius: 15px;
  padding: 5px 15px;
}
</style>
