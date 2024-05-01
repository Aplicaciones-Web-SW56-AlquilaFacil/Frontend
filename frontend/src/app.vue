<script>
import {defineComponent} from "vue";
import FooterContent from "./public/components/footer-content.component.vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import PropietaryCardComponent from "./premiumcards/components/propietary-card.component.vue";
import OrganizatorCardComponent from "./premiumcards/components/organizator-card.component.vue";
import TypePremiumComponent from "./premiumcards/components/type-premium.component.vue";
import Router from "./router/index.js";
export default defineComponent({
  name:'App',
  title: "BC Subscripciones",
  components: {
    FooterContent,
    NavbarContent,
    PropietaryCardComponent,
    OrganizatorCardComponent,
    TypePremiumComponent,
    Router
  },
  data() {
    return {
      drawer: false,
      items: [
        {label: 'Type', to: '/type-subscription'},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }
})
</script>

<template>
  <navbar-content/>
  <pv-toast></pv-toast>
  <pv-toolbar>
    <template #start>
      <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer()"></pv-button>
      <h3>Subscriptions</h3>

      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="choose-plan" @click="navigate">
            {{ item.label }}
          </pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
  <router-view></router-view>
  <footer-content/>
</template>

<style scoped>

</style>
