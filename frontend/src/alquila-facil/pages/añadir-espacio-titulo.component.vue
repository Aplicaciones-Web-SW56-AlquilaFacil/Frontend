<script>
export default {
  name: "añadir-espacio-titulo"
}
</script>

<template>
  <div class="text-center mb-8">
    <h1 class="mt-20 mb-4 text-4xl font-bold">¡Ahora, ponle un título a tu casa!</h1>
    <p class="text-gray-500 mb-4">Los títulos cortos funcionan mejor. No te preocupes, puedes modificarlo más adelante.</p>
    <textarea class="mb-8 border-2 border-gray-400 p-4 rounded-md placeholder-gray-400
              focus:outline-none focus:ring focus:border-gray-700"
              placeholder="Escribe algo aquí" rows="4" cols="50"></textarea>
  </div>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute
    bottom-36 right-12">Siguiente</button>
</template>