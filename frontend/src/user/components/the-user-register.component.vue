<script>
export default {
  name: "the-user-register",
  data() {
    return {
      // userServices: new UserEndpointService(),
      email: '',
      username: '',
      password: '',
      confirm_password: '',
      artist: false,
      password_input_style: {
        border: 'none',
        borderBottom: '1px solid #d1d1d1',
        width: '100%',
      },
    };
  },
  computed: {
    //las propiedades Computed son funciones que se ejecutan cada vez que una de las propiedades que utiliza cambia. Lo que permite actualizar el estado de la aplicación en tiempo real.
    isEmailValid() {
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; //Expresión regular para validar el correo electrónico. Referencia: https://regexr.com/3e48o
      return re.test(this.email);
    },

    isPasswordValid() {
      return this.password.length >= 6 && this.password.length <= 16;
    },

    isConfirmPasswordValid() {
      return this.password === this.confirm_password;
    },

    isUsernameValid() {
      return this.username.length <= 20 && this.username.length >= 1;
    },

    isFormValid() {
      return this.isEmailValid && this.isPasswordValid && this.isConfirmPasswordValid;
    },
  },
}
</script>

<template>
  <section class="flex justify-content-center align-items-center" aria-label="Registro de usuario">
    <div class="register-container pt-7 pb-7">
      <h4>Registro</h4>
      <div class="register-form pl-6 pt-4">
        <div class="flex flex-column gap-3">
          <label class="uppercase" for="email">CORREO ELECTRÓNICO*</label>
          <pv-inputtext :invalid="!isEmailValid" v-model="email" class="input-text" id="email" :placeholder="'Ingresa tu correo electrónico'" aria-label="Correo electrónico"/>
          <small v-if="!isEmailValid" class="text-red-500" aria-label="">Correo electrónico inválido</small>

          <label class="uppercase" for="password">CONTRASEÑA*</label>
          <pv-password :input-style="password_input_style" :invalid="!isPasswordValid" id="password" toggle-mask :placeholder="'Ingresa tu contraseña (6-16 caracteres)'" v-model="password"
                       :prompt-label="'Ingresa tu contraseña (6-16 caracteres)'" :weak-label="'Ingresa tu contraseña (6-16 caracteres)'" :medium-label="'Ingresa tu contraseña (6-16 caracteres)'" :strong-label="'Ingresa tu contraseña (6-16 caracteres)'" aria-label="Contraseña"/>
          <small v-if="!isPasswordValid" class="text-red-500">Contraseña inválida</small>

          <label class="uppercase" for="confirm-password">ESCRIBA NUEVAMENTE LA CONTRASEÑA*</label>
          <pv-password :input-style="password_input_style" :invalid="!isConfirmPasswordValid" class="password" id="confirm-password" toggle-mask :placeholder="'Ingresa tu contraseña (6-16 caracteres)'" v-model="confirm_password" :feedback="false" aria-label="Confirmar contraseña"/>
          <small v-if="!isConfirmPasswordValid" class="text-red-500">Ingresa tu contraseña (6-16 caracteres)</small>

          <div class="flex align-items-center">
            <pv-checkbox v-model="artist" inputId="is_artist" :binary="true" aria-label="Artista"/>
            <label for="is_artist" class="ml-2"> Al registrarme, acepto los Términos de uso y la Política de privacidad de AlquilaFacil</label>
          </div>

          <h4>AlquilaFacil recopila y procesa su dirección de correo electrónico con fines de marketing. Puede darse de baja fácilmente en cualquier momento a través del enlace de exclusión en los correos electrónicos de marketing.</h4>

          <div class="flex justify-content-center gap-2 mt-3 mb-3">
            <pv-button class="register-button w-full w-12rem" @click="register" :label="'Regístrate ahora'" plain text aria-label="Botón de registro" :disabled="!isFormValid" />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.register-container {
  width: 80%;
}

.register-button{
  background-color: #c53030;
}

.input-text{
  width: 100%;
  border: none;
  border-bottom: 1px solid #d1d1d1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .register-container {
    width: 90%;
  }
  .input-text, .register-button {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .register-container {
    width: 100%;
  }
  .input-text, .register-button {
    width: 100%;
  }
}

</style>