<script>
export default {
  name: "proprietary-card",
  title: "Proprietary Card",

  props: ['propietarios'],

  data() {
    return {
      premiumPlan: {
        planName: "Coorporativo",
        price: "S/39.90/mes",
        benefits: [
          "Listado ilimitados de espacios.",
          "Destaque de listados en los resultados de búsqueda.",
          "Acceso a herramientas analíticas básicasasd.",
        ],
      },
      standarPlan: {
        planName: "Estandar",
        price: "S/19.90/mes",
        benefits: [
          "Listado de hasta 5 espacios.",
          "Funcionalidades avanzadas de reservas.",
          "Inclusión de imágenes por espacio.",
        ],
      },

      basicPlan: {
        planName: "Basico",
        price: "Free",
        benefits: [
          "Listado de hasta 2 espacios.",
          "Perfil de propietario con información básica del espacio.",
        ],
      }
    };
  },
};

</script>

<template>
  <h1 class="type-tittle">Propietario</h1>
  <div class="card-container">
    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ basicPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ basicPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in basicPlan.benefits" :key="basicPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan" style="margin-top: 21%">Elegir plan</pv-button>
      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ standarPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ standarPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in premiumPlan.benefits" :key="standarPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan">Elegir plan</pv-button>
      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #title>
        <label class="price">{{ premiumPlan.price }}</label>
      </template>
      <template #content>
        <p class="planname">{{ premiumPlan.planName }}</p>
        <hr>
        <ul class="benefits">
          <li v-for="benefits in premiumPlan.benefits" :key="premiumPlan.benefits" style="margin-bottom: 20px;">
            <i class="pi pi-check-circle"></i>{{ benefits }}</li>
        </ul>
      </template>
      <template #footer>
        <pv-button class="choose-plan">Elegir plan</pv-button>
      </template>
    </pv-card>
  </div>
</template>

<style>
</style>