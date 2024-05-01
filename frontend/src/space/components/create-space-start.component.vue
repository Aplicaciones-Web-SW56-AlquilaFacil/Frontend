<script>
export default {
  name: "create-space-start.component",
  props: ['showCreateSpace'],
  methods: {
    createSpaceStart () {
      this.$emit('update:showCreateSpace', true);
    }
  },
  emits: ['update:showCreateSpace'],
}
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen w-screen flex items-center justify-center">
    <div class="flex justify-center items-start text-left md:w-1/2">
      <h1 class="text-4xl font-bold">Empezar a usar<br>AlquilaFácil es muy<br>sencillo</h1>
    </div>

    <div class="md:w-1/2 flex flex-col justify-center">
      <div class="flex items-center mb-4">
        <img src="../../assets/icon-step1.png" alt="Paso 1" class="w-16 h-16 mr-4">
        <div>
          <h2 class="font-bold">1 Describe tu espacio</h2>
          <p class="text-gray-500">Comparte algunos datos básicos.</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <img src="../../assets/icon-step2.png" alt="Paso 2" class="w-16 h-16 mr-4">
        <div>
          <h2 class="font-bold">2 Haz que destaque</h2>
          <p class="text-gray-500">Agregar al menos 4 fotos, un título y una <br> descripción. Lo demás nos encargamos <br> nosotros.</p>
        </div>
      </div>
      <div class="flex items-center mb-4">
        <img src="../../assets/icon-step3.png" alt="Paso 3" class="w-16 h-16 mr-4">
        <div>
          <h2 class="font-bold">3 Terminar y publicar</h2>
          <p class="text-gray-500">Agrega las últimas configuraciones y publica tu espacio.</p>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/create-space-describe">
    <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute
      bottom-0 right-12">Comencemos</pv-button>
  </router-link>
</template>
