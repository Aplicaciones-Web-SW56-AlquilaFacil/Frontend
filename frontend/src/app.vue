<script>
import {defineComponent} from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import CreateSpaceTitle from "./alquila-facil/pages/create-space-title.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default defineComponent({
  components: {FooterContent, CreateSpaceTitle, NavbarContent}
})
</script>

<template>
  <div>
    <navbar-content></navbar-content>
    <router-view></router-view> <!-- Muestra el componente de la ruta actual -->
    <!-- Solo renderiza el componente CreateSpaceTitle si no estás en la ruta '/create-space-post' -->
    <footer-content></footer-content>
  </div>
</template>





