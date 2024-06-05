<script>
export default {
  name: "create-space-describe.component"
}
</script>

<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <div>
        <h2 class="mb-12 font-bold">Paso 1</h2>
        <h1 class="text-4xl mb-12 font-bold">Describe tu espacio</h1>
        <p class= "text-gray-500 mb-12">En este paso, te preguntaremos qué tipo de propiedad tienes.
          <br> A continuación, indicanos la ubicación y algunas cosas más.</p>
      </div>
    </div>
    <div class="right-column-confirm">
      <img src="../../assets/image-step1.jpg" alt="Descripción de la imagen" class="img-confirm-dir">
    </div>
  </div>
  <hr>
  <router-link to="/start">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Atrás</pv-button>
  </router-link>

  <router-link to="/describe-option">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Siguiente</pv-button>
  </router-link>

</template>