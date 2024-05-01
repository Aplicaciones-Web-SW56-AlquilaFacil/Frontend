<script>
export default {
  name: "create-space-add-photo.component"
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Agrega algunas fotos de tu espacio</h2>
      <p class="text-gray-500 mb-4">Para empezar, necesitarás cuatro fotos. Después podrás
        <br>agregar más o hacer cambios.</p>
    </div>

    <div class="border border-dashed border-black rounded-lg p-7 shadow-xl w-full max-w-2xl">
      <div class="flex flex-col items-center mb-2">
        <img src="../../assets/add-photo-icon.png" alt="icon" class="w-14 h-14 mb-2 mx-auto justify-start">
        <div class="items-center justify-start">
          <p class="mb-2 font-bold text-center">Arrastra las fotos</p>
          <p class="mb-2 text-gray-500">Elege por lo menos 5 fotos</p>
        </div>
      </div>

      <p class="justify-end text-center mb-2 underline">Sube fotos desde tu dispositivo</p>
    </div>
  </div>
  <router-link to="/create-space-stand-out">
    <pv-button class="bg-white-200 border border-red-500 text-red-600 px-4 py-2 rounded fixed bottom-4 left-4">Atrás</pv-button>
  </router-link>
  <router-link to="/create-space-title">
    <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4">Siguiente</pv-button>
  </router-link>
</template>

