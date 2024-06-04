<script setup>
import { ref } from 'vue'
import NavbarContent from "../../public/components/navbar-content.component.vue";
import FooterContent from "../../public/components/footer-content.component.vue";

import TheUserEditProfileComponent from "../components/the-user-edit-profile.component.vue";
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

  <the-user-edit-profile-component></the-user-edit-profile-component>

</template>

<style scoped>

</style>
