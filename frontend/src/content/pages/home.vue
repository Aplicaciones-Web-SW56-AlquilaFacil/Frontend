<script>

import {defineComponent} from "vue";
import TheHome from "../components/the-home.component.vue";

export default defineComponent({
  components: {TheHome}
})
</script>

<template>
  <div class="card-container">

    <div class="card-row" v-for="rowIndex in 3" :key="rowIndex">

      <div class="card-column" v-for="colIndex in 4" :key="colIndex">
        <the-home></the-home>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-row {
  width: 100%;
  display: flex;
  margin: auto 40px auto 40px;
}

.card-column {
  width: 24%; /* Ajusta el ancho de cada columna */
  margin: auto auto auto auto; /* Espacio entre las columnas */
}
</style>