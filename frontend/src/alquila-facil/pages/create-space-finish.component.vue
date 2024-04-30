<script>
export default {
  name: "create-space-finish"
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-4 mb-12">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">¡Es todo!</h1>
      <p class="text-gray-500 mb-4">Esto es lo que mostraremos a los demás.</p>
    </div>

    <div class="border border-gray-300 rounded-lg p-4 mb-12 shadow-xl">
      <img src="../../assets/final-image.jpg" alt="Descripción de la imagen" class="w-64 h-64 mb-4">
      <div>
        <p class="mb-2">Miraflores, Lima</p>
        <p class="mb-2 text-gray-500">Casa de playa</p>
        <p class="mb-2">S/. 1000 por noche</p>
      </div>
    </div>
  </div>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-12">Siguiente</button>
</template>