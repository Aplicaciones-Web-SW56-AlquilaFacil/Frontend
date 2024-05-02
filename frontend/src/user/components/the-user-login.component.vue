<script>
export default {

  name: 'the-user-login',
  props: ['showLogin', 'showEmailLogin'],
  methods: {
    closeLogin() {
      this.$emit('update:showLogin', false);
    },
    openEmailLogin() {
      this.$emit('update:showEmailLogin', true);
      this.$emit('update:showLogin', false);
    },
  },
  emits: ['update:showLogin', 'update:showEmailLogin'],
}
</script>

<template>
  <section v-if="showLogin" class="user-login w-full flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card h-30rem w-20rem">
      <template #title>
        <h4 class="text-center font-bold"> Inicia sesión ahora </h4>
      </template>
      <template #content>
        <h5 class="text-center">
          ¡Sumérgete en una aventura única de la mano de libros ilustrados!
        </h5>
        <div class ="mt-3 login-buttons flex flex-column gap-3">
          <pv-button class="w-full bg-white" icon="pi pi-envelope" :label="'Iniciar sesión con Email'" plain text @click="openEmailLogin"/>
          <pv-button class="w-full bg-white" icon="pi pi-google" :label="'Iniciar sesión con Google'" plain text/>
          <pv-button class="w-full bg-white" icon="pi pi-facebook" :label="'Iniciar sesión con Facebook'" plain text/>
          <pv-button class="w-full bg-white" icon="pi pi-twitter" :label="'Iniciar sesión con Twitter'" plain text/>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center">
          <h5 class="text-center" v-html="'O <span class=\'register-link cursor-pointer text-white\'>regístrate</span> si aún no tienes una cuenta'"/>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
.user-login {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
}

.login-card{
  background-color: #c53030;
}
</style>