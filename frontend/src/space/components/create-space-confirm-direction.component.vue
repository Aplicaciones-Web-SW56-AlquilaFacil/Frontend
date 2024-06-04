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
      <img src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/feature/bounded-create-space/frontend/src/assets/map.png?raw=true" alt="map"
           class="img-confirm-dir">
    </div>
  </div>
  <hr>
  <router-link to="/describe-option">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Atrás</pv-button>
  </router-link>

  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Siguiente</pv-button>
  </router-link>
</template>

<style>
.back-next {
  background-color: #d13333;
  display: inline;
  width: 10%;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  margin: 2% auto 5% auto;
}

.right-colum-confirm {
  margin: auto auto 7% 1%;
}

.left-column-confirm {
  margin: 2% auto 3% 10%;
}

.container-dir {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img-confirm-dir {
  max-width: 100%;
  border-radius: 10px;
}

.confirm-dir-input {
  width: 70%;
  padding: 10px 10px;
  border-radius: 10px;
}

.label-conf-dir {
  margin-top: 20px;
}

@media (max-width: 768px) {

  .back-next {
    width: 20%;
    padding: 10px 10px;
    margin-top: 0;
    margin-right: -20.5%;
  }
}
</style>