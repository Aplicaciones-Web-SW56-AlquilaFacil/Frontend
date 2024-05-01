<script setup>
import { ref } from 'vue'
import NavbarContent from "../../public/components/navbar-content.component.vue";
import FooterContent from "../../public/components/footer-content.component.vue";

import TheUserEditProfileComponent from "../components/the-user-edit-profile.component.vue";
const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showLogin
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showEmailLogin

</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                  @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"></navbar-content>
  <the-user-edit-profile-component></the-user-edit-profile-component>
  <footer-content></footer-content>
</template>

<style scoped>

</style>
