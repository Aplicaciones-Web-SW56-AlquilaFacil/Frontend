<script>
import { defineComponent } from "vue";
import TheHome from "../components/the-home.component.vue";

export default defineComponent({
  components: { TheHome }
});
</script>

<template>
  <div class="container">
    <div class="grid">
      <the-home class="home-card"></the-home>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

@media (min-width: 1200px) {
  .grid {
    width: 90%;
    gap: 50px;
  }
}

/* Medium screens (md) */
@media (min-width: 768px) and (max-width: 1199px) {
  .grid {
    width: 95%;
    gap: 20px;
  }
}

/* Small screens (sm) */
@media (max-width: 767px) {
  .grid {
    width: 95%;
    gap: 30px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
}
</style>
