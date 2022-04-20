<template>
  <section>
    <div class="container-contato">
      <div class="mpas-container">
        <form action="">
          <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
          <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
          <textarea
            name="formulario"
            placeholder="Digite seu texto"
            id="formulario"
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Enviar" id="enviar" />
        </form>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7872.349192806626!2d-38.21827512573157!3d-9.406072673039432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70930bc2c5f7d83%3A0xd8939f196f1f2d12!2sCentro%2C%20Paulo%20Afonso%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1650414418422!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.container-contato {
  margin: 50px auto;
}
.mpas-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mpas-container form {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.mpas-container input {
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #756c6c;
}
.mpas-container input[type="submit"] {
  background-color: #008f8f;
  font-size: 18px;
  color: #fff;
  border: none;
  box-shadow: 0 0 0.3em #008f8f;
}
.mpas-container input[type="submit"]:hover {
  background-color: #0a4141;
  font-size: 18px;
  color: #fff;
  transition: 1s;
  border: none;
}
.mpas-container textarea {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #756c6c;
}

@media (max-width: 900px) {
  .mpas-container {
    flex-direction: column;
  }
  .mpas-container form {
    width: 100%;
  }
  .mpas-container iframe {
    width: 100%;
  }
}
</style>
