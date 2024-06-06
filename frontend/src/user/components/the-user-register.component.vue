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
    isEmailValid() {
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
          <label class="uppercase" for="email">EMAIL*</label>
          <pv-inputtext :invalid="!isEmailValid" v-model="email" class="input-text" id="email" :placeholder="'Ingresa tu correo electrónico'" aria-label="Correo electrónico"/>
          <small v-if="!isEmailValid" class="text-red-500" aria-label="">Invalid Email</small>

          <label class="uppercase" for="password">PASSWORD*</label>
          <pv-password :input-style="password_input_style" :invalid="!isPasswordValid" id="password" toggle-mask :placeholder="'Enter your password (6-16 characters)'" v-model="password"
                       :prompt-label="'Enter your password (6-16 characters)'" :weak-label="'Enter your password (6-16 characters)'" :medium-label="'Enter your password (6-16 characters)'" :strong-label="'Enter your password (6-16 characters)'" aria-label="Password"/>
          <small v-if="!isPasswordValid" class="text-red-500">Invalid Password</small>

          <label class="uppercase" for="confirm-password">PLEASE TYPE PASSWORD AGAIN*</label>
          <pv-password :input-style="password_input_style" :invalid="!isConfirmPasswordValid" class="password" id="confirm-password" toggle-mask :placeholder="'Enter your password (6-16 characters)'" v-model="confirm_password" :feedback="false" aria-label="Confirma password"/>
          <small v-if="!isConfirmPasswordValid" class="text-red-500">Enter your password (6-16 characters)</small>

          <div class="flex align-items-center">
            <pv-checkbox v-model="artist" inputId="is_artist" :binary="true" aria-label="Artista"/>
            <label for="is_artist" class="ml-2"> By registering, I accept the Terms of Use and Privacy Policy of AlquilaFacil</label>
          </div>

          <h4>AlquilaFacil collects and processes your email address for marketing purposes. You can easily unsubscribe at any time via the opt-out link in the marketing emails.</h4>

          <div class="flex justify-content-center gap-2 mt-3 mb-3">
            <pv-button class="register-button w-full w-12rem" @click="register" :label="'Sign Up now'" plain text aria-label="Botón de registro" :disabled="!isFormValid" />
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