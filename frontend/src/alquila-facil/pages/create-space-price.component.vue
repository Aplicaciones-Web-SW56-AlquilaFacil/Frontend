<script>
export default {
  name: "create-space-price"
}
</script>

<template>
  <div class="text-center mt-16 mb-36">
    <h1 class="text-4xl font-bold mb-12">Establece el precio</h1>
    <p class= "text-gray-500 mb-12">Dale un precio a tu espacio, puedes cambiarlo cuando desees</p>
    <input type="number" class="border border-gray-400 p-2 rounded-md mb-6 w-64 h-12 text-center" placeholder="Precio">
    <p>Precio para el organizador (sin incluir impuestos)</p>
  </div>
  <router-link to="/create-space-finish">
    <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute
      bottom-36 right-12">Siguiente</pv-button>
  </router-link>
</template>