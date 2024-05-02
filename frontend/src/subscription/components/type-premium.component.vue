<script>
export default {
  name: "type-card",
  title: "Type Card",

  props: {
  },
  methods: {
    selectPlan(role) {
      this.$emit('plan-selected', role)
    }
  },
  data() {
    return{
      drawer: false,
      items1: [{label: 'Propietario', to: '/proprietary'},],
      items2: [{label: 'Organizador', to: '/organizer'},],
    }

  },
};

</script>

<template>
  <h1 class="type-tittle">Primero elige el tipo de premium</h1>
  <div class="card-container">

    <pv-card class="subscription-card">
      <template #content>
        <img class="card-image"
             src="C:\Users\Augusto\WebstormProjects\appweb-feature-pcard\src\assets\proprietary-image.png"
             alt="Propietario">
      </template>
      <template #footer>
        <router-link v-for="item in items1" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="choose-plan" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>

      </template>
    </pv-card>

    <pv-card class="subscription-card">
      <template #content>
        <img class="card-image"
             src="C:\Users\Augusto\WebstormProjects\appweb-feature-pcard\src\assets\organizer-image.png"
             alt="Organizador">
      </template>
      <template #footer>
        <router-link v-for="item in items2" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="choose-plan" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card-image {
  display: block;
  margin: 20px auto auto auto;
}
</style>