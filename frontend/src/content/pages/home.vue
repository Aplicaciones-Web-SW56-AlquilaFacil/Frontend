<script>

import {defineComponent} from "vue";
import TheHome from "../components/the-home.component.vue";

export default defineComponent({
  components: {TheHome}
})
</script>

<template>

  <div class="grid">
        <the-home></the-home>
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

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>