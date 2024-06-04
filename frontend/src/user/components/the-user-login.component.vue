<template>
  <section v-if="showLogin" class="user-login flex justify-content-center align-items-center fixed" @click.self="closeLogin">
    <pv-card class="login-card max-w-md border-round-2xl">
      <template #title>
        <h4 class="text-center font-bold px-8">Iniciar sesión</h4>
      </template>
      <template #content>
        <div class="card flex justify-content-center w-full">
          <div class="flex flex-column w-full px-4">
            <label class="text-sm mb-1" for="email">Correo electrónico</label>
            <pv-inputtext v-model="email" class="text-sm mb-2 w-full" id="email" placeholder="Ingresa tu correo" aria-label="Correo electrónico"/>

            <label class="text-sm mb-1" for="password">Contraseña</label>
            <pv-inputtext v-model="password" class="text-sm mb-2 w-full" id="password" placeholder="Ingresar contraseña" aria-label="Contraseña">
              <template #prepend>
                <i class="pi pi-lock"></i>
              </template>
            </pv-inputtext>

            <div class="flex justify-content-center mt-4 w-full">
              <pv-button class="styled-button text-sm w-full" label="Iniciar sesión" plain text aria-label="Iniciar sesión" @click="login"/>
            </div>
            <router-link to="/forgot-password" class="mt-2">
              <h5 class="text-center m-1" @click="closeLogin">¿Olvidaste tu contraseña?</h5>
            </router-link>
          </div>
        </div>
        <hr class="border-white mt-4">
      </template>
      <template #footer>
        <div class="flex justify-content-center flex-column w-full px-5">
          <div class="flex justify-content-center gap-3 align-items-center w-full">
            <h5 class="text-center">¿No tienes una cuenta?</h5>
            <router-link to="/register">
              <h5 class="text-center text-white" @click="closeLogin">Regístrate</h5>
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
      email: 'italo@web.com',
      password: '123456',
    };
  },
  methods: {
    closeLogin() {
      this.$emit('update:showLogin', false);
    },
    login() {
      if (this.email === 'italo@web.com' && this.password === '123456') {
        this.$emit('login-success', { name: 'Italo', email: this.email });
      } else {
        alert('Credenciales incorrectas');
      }
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
  background-color: rgba(255, 255, 255, 0.5);
}

.login-card {
  background-color: #c53030;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.styled-button {
  background-color: #ffffff;
  color: #c53030;
  border: 2px solid #c53030;
  border-radius: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.styled-button:hover {
  background-color: darkgray;
  color: #ffffff;
}

.text-sm {
  margin-bottom: 0.5rem; /* Adjusted margin for minimalistic spacing */
}
</style>
