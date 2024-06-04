<script setup>
import { ref } from 'vue'

import NavbarContent from "../../public/components/navbar-content.component.vue";
import FooterContent from "../../public/components/footer-content.component.vue";
import TheUserRegister from "../components/the-user-register.component.vue";


const showLogin = ref(false);
const showEmailLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
};

</script>

<template>
  <the-user-register/>
</template>

<style scoped>

</style>
