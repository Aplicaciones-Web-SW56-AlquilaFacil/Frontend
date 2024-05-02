<script>
import {defineComponent, ref} from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import CreateSpaceStartComponent from "./space/components/create-space-start.component.vue";
import CreateSpaceDescribeComponent from "./space/components/create-space-describe.component.vue";
import CreateSpaceDescribeOptionComponent from "./space/components/create-space-describe-option.component.vue";
import CreateSpaceTitleComponent from "./space/components/create-space-title.component.vue";
import CreateSpacePriceComponent from "./space/components/create-space-price.component.vue";
import CreateSpacePostComponent from "./space/components/create-space-post.component.vue";
import CreateSpaceAddPhotoComponent from "./space/components/create-space-add-photo.component.vue";
import CreateSpaceStandOutComponent from "./space/components/create-space-stand-out.component.vue";
import CreateSpaceFinishComponent from "./space/components/create-space-finish.component.vue";
import CreateSpaceConfirmDirectionComponent from "./space/components/create-space-confirm-direction.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import PropietaryCardComponent from "./premiumcards/components/propietary-card.component.vue";
import OrganizatorCardComponent from "./premiumcards/components/organizator-card.component.vue";
import TypePremiumComponent from "./premiumcards/components/type-premium.component.vue";
import ForgotPassword from "./user/components/the-user-forgot-password.component.vue";
import UserEditProfile from "./user/pages/user-edit-profile.vue";
import TheUserEditProfile from "./user/components/the-user-edit-profile.component.vue";
import TheUserForgotPassword from "./user/components/the-user-forgot-password.component.vue";
import UserForgotPassword from "./user/pages/user-forgot-password.vue";
import UserRegister from "./user/pages/user-register.vue";
import TheUserLogin from "./user/components/the-user-login.component.vue";
import TheUserLoginEmail from "./user/components/the-user-login-email.component.vue";
import TheUserRegister from "./user/components/the-user-register.component.vue";
import Router from "./router/index.js";

const showLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión
const showEmailLogin = ref(false); //Esta variable se encarga de mostrar el componente de inicio de sesión con correo electrónico

const handleShowLoginUpdate = (value) => {
  showLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showLogin
const handleShowEmailLoginUpdate = (value) => {
  showEmailLogin.value = value;
}; //Esta función se encarga de actualizar el valor de la variable showEmailLogin

export default defineComponent({
  name:'App'
  components: {FooterContent, CreateSpaceStartComponent, CreateSpaceDescribeComponent,
    CreateSpaceDescribeOptionComponent, CreateSpaceTitleComponent, CreateSpacePriceComponent, CreateSpacePostComponent,
    CreateSpaceAddPhotoComponent, CreateSpaceStandOutComponent, CreateSpaceFinishComponent, CreateSpaceConfirmDirectionComponent,
    NavbarContent, PropietaryCardComponent, OrganizatorCardComponent, TypePremiumComponent, Router},
    data() {
    return {
      drawer: false,
      items: [
        {label: 'Type', to: '/type-subscription'},
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }
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
                      
    <navbar-content :showLogin="showLogin" :showEmailLogin="showEmailLogin"
                      @update:showLogin="handleShowLoginUpdate" @update:showEmailLogin="handleShowEmailLoginUpdate"/>
    
  </div>
  <router-view></router-view>
  <footer-content></footer-content>
</template>





