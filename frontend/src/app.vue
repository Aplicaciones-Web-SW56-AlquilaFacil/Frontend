<script>
import {defineComponent, ref} from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import CreateSpaceStart from "./alquila-facil/pages/create-space-start.component.vue";
import CreateSpaceDescribe from "./alquila-facil/pages/create-space-describe.component.vue";
import CreateSpaceTitle from "./alquila-facil/pages/create-space-title.component.vue";
import CreateSpacePrice from "./alquila-facil/pages/create-space-price.component.vue";
import CreateSpacePost from "./alquila-facil/pages/create-space-post.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default defineComponent({
  components: {FooterContent, CreateSpaceStart, CreateSpaceDescribe, CreateSpaceTitle, CreateSpacePrice, CreateSpacePost, NavbarContent}
})

const showCreateSpace = ref(false);

const handleShowCreateSpace = (value) => {
  showCreateSpace.value = value;
};
</script>

<template>
  <div>
    <navbar-content :showCreateSpace="showCreateSpace"
                      @update:showCreateSpace="handleShowCreateSpace"></navbar-content>
    <router-view></router-view> <!-- Muestra el componente de la ruta actual -->
    <!-- Solo renderiza el componente CreateSpaceTitle si no estás en la ruta '/create-space-post' -->
    <footer-content></footer-content>
  </div>
</template>





