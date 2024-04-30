<script>
export default {
  name: "property-detail"
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-2 mt-6 mr-64">Casa en la playa con patio</h1>

    <div class="flex justify-center items-center">
      <!-- La primera imagen más grande -->
      <img src="../../assets/image-detail.png" alt="Paso 1" class="rounded w-72 h-72 object-cover mr-2 mb-4">

      <div class="flex flex-col">
        <!-- Dos imágenes arriba -->
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="w-36 h-34 object-cover mb-2 mr-2">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="w-36 h-34 object-cover mb-4">
      </div>

      <div class="flex flex-col">
        <!-- Dos imágenes abajo -->
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="w-36 h-34 object-cover mb-2">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="w-36 h-34 object-cover mb-4">
      </div>
    </div>
  </div>
</template>




