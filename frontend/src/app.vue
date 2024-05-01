<script setup>
import FooterContent from "./public/components/footer-content.component.vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import {ref} from "vue";
import ForgotPassword from "./user/components/the-user-forgot-password.component.vue";



const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico
const showProfile = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showLogin
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showEmailLogin
const handleShowProfileUpdte = (value) => {
  showProfile.value = value;
};
</script>

<template>
  <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                  @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
  <forgot-password></forgot-password>
  <footer-content/>

</template>

<style scoped>

</style>
