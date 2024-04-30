<script>
export default {
  name: "create-space-describe.component"
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex items-center">
      <div>
        <h2 class="mb-12 font-bold">Paso 1</h2>
        <h1 class="text-4xl mb-12 font-bold">Describe tu espacio</h1>
        <p class= "text-gray-500 mb-12">En este paso, te preguntaremos qué tipo de propiedad tienes.
          <br> A continuación, indicanos la ubicación y algunas cosas más.</p>
      </div>
      <img src="../../assets/image-paso1.jpg" alt="Descripción de la imagen" class="w-96 h-96 ml-8">
    </div>
  </div>
  <router-link to="/create-space-start">
    <pv-button class="bg-white-200 border border-red-500 text-red-600 px-4 py-2 rounded fixed bottom-4 left-4">Atrás</pv-button>
  </router-link>
  <router-link to="/create-space-stand-out">
    <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4">Siguiente</pv-button>
  </router-link>

</template>

<style scoped>

</style>