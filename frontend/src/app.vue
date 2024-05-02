<script setup>
import {defineComponent, ref} from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import Router from "./router/index.js";

const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
};
</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                      @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <router-view></router-view>
  <footer-content></footer-content>
</template>





