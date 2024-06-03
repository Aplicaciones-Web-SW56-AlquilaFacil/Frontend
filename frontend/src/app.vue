<script setup>
import { ref } from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import Router from "./router/index.js";

const showLogin = ref(false); // Esta variable se encarga de mostrar el componente de inicio de sesión

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
</script>

<template>
  <navbar-content
      :showLogin="showLogin"
      @update:showLogin="handleShowLoginUpdate"
  />
  <router-view></router-view>
  <footer-content></footer-content>
</template>
