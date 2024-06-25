<script setup>
import { ref } from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";


const showLogin = ref(false);

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
