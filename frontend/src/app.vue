<script setup>
import { ref, provide } from 'vue';
import NavbarContent from './public/components/navbar-content.component.vue';
import FooterContent from './public/components/footer-content.component.vue';
import {formStore} from "./space/services/local.store.js";


const showLogin = ref(false);

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
};

provide('formStore', formStore);

</script>

<template>
  <navbar-content
      :showLogin="showLogin"
      @update:showLogin="handleShowLoginUpdate"
  />
  <router-view></router-view>
  <footer-content></footer-content>
</template>
