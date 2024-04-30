  <script>
  export default {
    name: "create-space-post",
  }
  </script>

  <template>
    <div class="flex items-center justify-center mt-16">
      <div class="flex items-center mb-32">
        <div>
          <h2 class="mb-12 font-bold">Paso 3</h2>
          <h1 class="text-4xl mb-12 font-bold">Terminar y publicar</h1>
          <p class= "text-gray-500 mb-12">Por último, vas a elegir el precio y publicitar tu espacio</p>
        </div>
        <img src="../../assets/image-paso3.jpg" alt="Descripción de la imagen" class="w-96 h-96 ml-8">
      </div>
    </div>
    <router-link to="/create-space-price">
      <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute
      bottom-36 right-12">Siguiente</pv-button>
    </router-link>
  </template>