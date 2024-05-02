  <script>
  export default {
    name: "create-space-post",
  }
  </script>

  <template>
    <div class="container-dir">
      <div class="left-column-confirm">
        <div>
          <h2 class="mb-12 font-bold">Paso 3</h2>
          <h1 class="text-4xl mb-12 font-bold">Terminar y publicar</h1>
          <p class= "text-gray-500 mb-12">Por último, vas a elegir el precio y publicitar tu espacio</p>
        </div>
      </div>
      <div class="right-column-confirm">
        <img src="../../assets/image-step3.jpg" alt="Descripción de la imagen" class="img-confirm-dir">
      </div>
    </div>
    <router-link to="/price">
      <pv-button class="back-next " style="left: 80%;">Siguiente</pv-button>
    </router-link>
  </template>