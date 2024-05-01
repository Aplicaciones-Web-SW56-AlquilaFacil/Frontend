<script>
export default {
  name: "create.space-describe-option.component"
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h2 class="text-2xl font-medium mb-6">¿Cuál de estas opciones describe mejor tu espacio?</h2>

    <div class="grid grid-rows-2 gap-8">
      <div class="border border-gray-300 rounded-2xl p-8 max-w-xs">
        <pv-button class="flex flex-col items-center justify-center mb-4">
          <img src="../../assets/describe-option-icon1.png" class="w-20 h-20 mb-4" alt="icon1" />
        </pv-button>
        <p class="mb-2 text-center">Casa de playa</p>
      </div>
      <div class="border border-gray-300 rounded-2xl p-8 max-w-xs">
        <pv-button class="flex flex-row items-center justify-center mb-4">
          <img src="../../assets/describe-option-icon2.png" class="w-20 h-20 mb-4" alt="icon2" />
        </pv-button>
        <p class="mb-2 text-center">Casa Urbana</p>
      </div>

      <div class="border border-gray-300 rounded-2xl p-8 max-w-xs">
        <pv-button class="flex flex-col items-center justify-center mb-4">
          <img src="../../assets/describe-option-icon3.png" class="w-20 h-20 mb-4" alt="icon3" />
        </pv-button>
        <p class="mb-2 text-center">Salones elegantes</p>
      </div>
      <div class="border border-gray-300 rounded-2xl p-8 max-w-xs">
        <pv-button class="flex flex-row items-center justify-center mb-4">
          <img src="../../assets/describe-option-icon4.png" class="w-20 h-20 mb-4" alt="icon4" />
        </pv-button>
        <p class="mb-2 text-center">Casa de campo</p>
      </div>
    </div>
  </div>
  <router-link to="/create-space-describe">
    <pv-button class="bg-white-200 border border-red-500 text-red-600 px-4 py-2 rounded fixed bottom-4 left-4">Atrás</pv-button>
  </router-link>
  <router-link to="/create-space-stand-out">
    <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4">Siguiente</pv-button>
  </router-link>
</template>

