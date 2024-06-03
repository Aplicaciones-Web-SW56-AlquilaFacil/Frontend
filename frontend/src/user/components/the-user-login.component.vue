<template>
  <section v-if="showLogin" class="user-login w-full flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card h-30rem w-20rem">
      <template #title>
        <h4 class="text-center font-bold">Iniciar sesión con correo electrónico</h4>
      </template>
      <template #content>
        <div class="card flex justify-content-center">
          <div class="flex flex-column gap-1">
            <label class="text-sm" for="email">Correo electrónico</label>
            <pv-inputtext class="text-sm" id="email" placeholder="Ingresa tu correo" aria-label="Correo electrónico"/>

            <label class="text-sm" for="password">Contraseña</label>
            <pv-password :input-style="{ fontSize: '0.875rem' }" class="text-sm" id="password" toggle-mask v-model="password" placeholder="Ingresar contraseña" aria-label="Contraseña"/>

            <div class="flex justify-content-center gap-2 mt-3">
              <pv-button class="w-full bg-white text-sm" label="Atrás" plain text @click="goBack" aria-label="Cerrar inicio de sesión"/>
              <pv-button class="w-full bg-white text-sm" label="Iniciar sesión" plain text aria-label="Iniciar sesión"/>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center flex-column">
          <router-link to="/forgot-password">
            <h5 class="text-center cursor-pointer" @click="closeLogin">¿Olvidaste tu contraseña?</h5>
          </router-link>
          <div class="flex justify-content-center gap-2">
            <h5 class="text-center">¿No tienes una cuenta?</h5>
            <router-link to="/register">
              <h5 class="text-center cursor-pointer text-white" @click="closeLogin">Regístrate</h5>
            </router-link>
          </div>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<script>
export default {
  name: 'the-user-login',
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      password: '',
    };
  },
  methods: {
    closeLogin() {
      this.$emit('update:showLogin', false);
    },
    goBack() {
      this.$emit('update:showLogin', false);
    }
  }
}
</script>

<style scoped>
.user-login {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
}

.login-card {
  background-color: #c53030;
}
</style>
