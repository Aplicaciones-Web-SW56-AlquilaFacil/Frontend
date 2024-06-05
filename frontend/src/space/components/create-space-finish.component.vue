<script>


export default {
  name: "create-space-finish",
}
</script>

<template>
  <div class="container-add-photo">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">¡Es todo!</h1>
      <p class="text-gray-500 mb-4">Esto es lo que mostraremos a los demás.</p>
    </div>
  </div>
  <div style="display: flex; justify-content:center;">
  <pv-card class="finish-card">
    <template #content>
      <div class="container-add-photo">
        <div class="border border-gray-300 rounded-lg p-3 mb-12 shadow-xl">
          <img src="../../assets/final-image.jpg" alt="Descripción de la imagen" style="width: 100%">
          <div>
            <p class="mb-2">Miraflores, Lima</p>
            <p class="mb-2 text-gray-500">Casa de playa</p>
            <p class="mb-2">S/. 1000 por noche</p>
          </div>
        </div>
      </div>
    </template>
  </pv-card>
  </div>
  <hr>
  <router-link to="/home">
    <pv-button class="back-next" style="left: 80%;">Siguiente</pv-button>
  </router-link>
</template>

<style>
.finish-card {
  width: 40%;
  min-width: 290px;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.25);
  margin: 40px auto 50px auto;
}
</style>