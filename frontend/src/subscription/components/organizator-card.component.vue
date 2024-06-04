<script>

export default {
  name: "organizer-card",
  title: "Organizer Card",

  props: ['organizadores'],

  data() {
    return {
      premiumPlan: {
        planName: "Coorporativo",
        price: "S/44.90/mes",
        benefits: [
          "Descuentos adicionales en tarifas de alquiler de espacios premium.",
          "Acceso prioritario a espacios exclusivos y populares.",
          "Acceso prioritario a espacios exclusivos y populares.",
        ],
      },
      standarPlan: {
        planName: "Estandar",
        price: "S/24.90/mes",
        benefits: [
          "Búsqueda y reservas ilimitadas de espacios.",
          "Descuentos exclusivos en tarifas de alquiler de espacios seleccionados.",
        ],
      },

      basicPlan: {
        planName: "Basico",
        price: "Free",
        benefits: [
          "Reservas de hasta 2 espacios por mes.",
          "Acceso a calificaciones y comentarios sobre los espacios.",
        ],
      }
    };
  },
};
</script>

<template>
  <h1 class="type-tittle">Organizador</h1>
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

.type-tittle{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  margin: 0;
  font-size: 45px;
}

.card-container{
  display: flex;
  flex-grow: 1;
}

.subscription-card {
  width: 400px;
  margin: 0 auto 9vh auto;
  padding: 1rem;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.25);
  height: 500px;
}

.planname {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.benefits {
  list-style-type: none;
  padding-left: 1rem;
  font-size: 20px;
}

.choose-plan {
  background-color: #d13333;
  display: block;
  width: 70%;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin: 1% auto auto auto;
}

.price {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
}

@media (max-width: 768px) {
  .subscription-card {
    width: 200px;
    height: 400px;
    margin-top: 5%;
  }
  .choose-plan {
    width: 100%;
    padding: 10px 10px;
    margin-top: 0;
  }
  .benefits {
    font-size: 8px;
    padding-left: 0;
    margin-bottom: 0;
  }
}

</style>