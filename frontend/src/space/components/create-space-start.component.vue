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
  <div class="container-dir">
    <div class="left-column-confirm">
      <h1 class="text-4xl font-bold">Empezar a usar<br>AlquilaFácil es muy<br>sencillo</h1>
    </div>

    <div class="right-column-confirm">
      <div class="enum-start">
        <div>
          <h2 class="font-bold">1 Describe tu espacio</h2>
          <p class="text-gray-500">Comparte algunos datos básicos.</p>
        </div>
        <img src="../../assets/icon-step1.png" alt="Paso 1" class="img-start">
      </div>
      <div class="enum-start">
        <div>
          <h2 class="font-bold">2 Haz que destaque</h2>
          <p class="text-gray-500">Agregar al menos 4 fotos, un título y una <br> descripción. Lo demás nos encargamos <br> nosotros.</p>
        </div>
        <img src="../../assets/icon-step2.png" alt="Paso 2" class="img-start">
      </div>
      <div class="enum-start">
        <div>
          <h2 class="font-bold">3 Terminar y publicar</h2>
          <p class="text-gray-500">Agrega las últimas configuraciones y publica tu espacio.</p>
        </div>
        <img src="../../assets/icon-step3.png" alt="Paso 3" class="img-start">
      </div>
    </div>
  </div>
<hr>
  <router-link to="/describe">
  <pv-button class="back-next" style="left: 80%; margin-left:0%;">Comencemos</pv-button>
  </router-link>

</template>

<style>
.img-start {
  width: 14vh;
  height: 14vh;
  margin: auto 20% auto auto;
}

.enum-start {
  display: flex;
  justify-content: center;
  margin: 5vh 20vh 5vh auto;
}
</style>