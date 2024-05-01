<script>
export default {
  name: "create-space-confirm-direction.component"
}
</script>

<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <h1>Confirma tu direccion</h1>
      <h3 style="font-weight: normal">Solo compartiremos tu dirección con los que hayan hecho una reservacion</h3>

      <div class="flex flex-column gap-2">
        <label class="label-conf-dir" for="Pais/region">Pais / region</label>
        <pv-inputtext id="Pais/region" v-model="value" aria-describedby="Pais/region-help" class="confirm-dir-input"/>
      </div>

      <div class="flex flex-column gap-2">
        <label class="label-conf-dir" for="Direccion">Direccion</label>
        <pv-inputtext id="Direccion" v-model="value" aria-describedby="Direccion-help" class="confirm-dir-input"/>
      </div>

      <div class="flex flex-column gap-2">
        <label class="label-conf-dir" for="Apartamento">Apartamento, piso, edificio, condominio, etc</label>
        <pv-inputtext id="Apartamento" v-model="value" aria-describedby="Apartamento" class="confirm-dir-input"/>
      </div>

      <div class="flex flex-column gap-2">
        <label class="label-conf-dir" for="Ciudad">Ciudad</label>
        <pv-inputtext id="Ciudad" v-model="value" aria-describedby="Ciudad" class="confirm-dir-input"/>
      </div>

      <div class="flex flex-column gap-2">
        <label class="label-conf-dir" for="Distrito/provincia">Distrito / provincia</label>
        <pv-inputtext id="Distrito/provincia" v-model="value" aria-describedby="Distrito/provincia" class="confirm-dir-input"/>
      </div>
    </div>
    <div class="right-colum-confirm">
      <img src="" alt="map" class="img-confirm-dir">
    </div>
  </div>
  <hr>
  <pv-button class="back-next" style="left: 0%; margin-left:6%;">Atrás</pv-button>

  <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Siguiente</pv-button>
</template>

<style>

</style>