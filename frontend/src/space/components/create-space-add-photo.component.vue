<script>
export default {
  name: "create-space-add-photo.component"
}
</script>

<template>
  <div class="container-add-photo">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Agrega algunas fotos de tu espacio</h2>
      <p class="text-gray-500 mb-4">Para empezar, necesitarás cuatro fotos. Después podrás
        <br>agregar más o hacer cambios.</p>
    </div>
  </div>
  <div class="container-add-photo">
    <div class="border-photo">
      <div class="border-container">
        <img src="../../assets/add-photo-icon.png" alt="icon" class="w-14 h-14 mb-2 mx-auto justify-start">
        <div class="border-container">
          <p class="mb-2 font-bold text-center">Arrastra las fotos</p>
          <p class="mb-2 text-gray-500">Elege por lo menos 5 fotos</p>
        </div>
      </div>
      <p class="justify-end text-center mb-2 underline">Sube fotos desde tu dispositivo</p>
    </div>
  </div>

  <hr>
  <pv-button class="back-next" style="left: 0%; margin-left:6%;">Atrás</pv-button>

  <router-link to="title">
  <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Siguiente</pv-button>
  </router-link>

</template>

<style>

.border-container {
  display: block;
  justify-content: center;
  text-align: center;
  margin: 40px auto auto auto;
}

.container-add-photo {
  display: flex;
  justify-content: center;
}

.border-photo {
  border: dashed;
  width: 400px;
  height: 350px;
  margin: 20px auto 3% auto;
}

</style>
