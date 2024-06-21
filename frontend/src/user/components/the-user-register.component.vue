<script>
export default {
  name: "the-user-form",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    userData: {
      type: Object,
      default: () => ({
        email: '',
        username: '',
        first_name: '',
        father_name: '',
        mother_name: '',
        birth_date: '',
        phone_number: '',
        document_number: '',
        artist: false
      })
    }
  },
  data() {
    return {
      email: this.userData.email,
      username: this.userData.username,
      password: '',
      confirm_password: '',
      first_name: this.userData.first_name,
      father_name: this.userData.father_name,
      mother_name: this.userData.mother_name,
      birth_date: this.userData.birth_date,
      phone_number: this.userData.phone_number,
      document_number: this.userData.document_number,
      artist: this.userData.artist,
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
    isUsernameValid() {
      return this.username.length <= 20 && this.username.length >= 1;
    },
    isFirstNameValid() {
      return this.first_name.length >= 1;
    },
    isFatherNameValid() {
      return this.father_name.length >= 1;
    },
    isMotherNameValid() {
      return this.mother_name.length >= 1;
    },
    isBirthDateValid() {
      const re = /^\d{4}-\d{2}-\d{2}$/;
      return re.test(this.birth_date);
    },
    isPhoneNumberValid() {
      const re = /^\+?\d{10,15}$/;
      return re.test(this.phone_number);
    },
    isDocumentNumberValid() {
      return this.document_number.length >= 1;
    },
    isPasswordValid() {
      return this.isEdit || (this.password.length >= 6 && this.password.length <= 16);
    },
    isConfirmPasswordValid() {
      return this.isEdit || (this.password === this.confirm_password);
    },
    isFormValid() {
      return this.isEmailValid && this.isUsernameValid && this.isFirstNameValid && this.isFatherNameValid && this.isMotherNameValid && this.isBirthDateValid && this.isPhoneNumberValid && this.isPasswordValid && this.isConfirmPasswordValid;
    },
  },
  methods: {
    submitForm() {
      if (this.isEdit) {
        this.$emit('update-profile', {
          email: this.email,
          username: this.username,
          first_name: this.first_name,
          father_name: this.father_name,
          mother_name: this.mother_name,
          birth_date: this.birth_date,
          phone_number: this.phone_number,
          document_number: this.document_number,
          artist: this.artist,
        });
      } else {
        this.$emit('register', {
          email: this.email,
          username: this.username,
          password: this.password,
          first_name: this.first_name,
          father_name: this.father_name,
          mother_name: this.mother_name,
          birth_date: this.birth_date,
          phone_number: this.phone_number,
          document_number: this.document_number,
          artist: this.artist,
        });
      }
    }
  }
}
</script>

<template>
  <section class="flex justify-content-center align-items-center" aria-label="User Form">
    <div class="form-container pt-7 pb-7">
      <h4>{{ isEdit ? 'Edit Profile' : 'Register' }}</h4>
      <div class="form pl-6 pt-4">
        <div class="flex flex-column gap-3">
          <label class="uppercase" for="email">EMAIL*</label>
          <pv-inputtext :invalid="!isEmailValid" v-model="email" class="input-text" id="email"
                        placeholder="Enter your email" aria-label="Correo electrónico"/>
          <small v-if="!isEmailValid" class="text-red-500">Invalid Email</small>

          <div v-if="!isEdit" class="flex flex-column gap-3">
            <label class="uppercase" for="password">PASSWORD*</label>
            <pv-password :input-style="password_input_style" :invalid="!isPasswordValid" id="password" toggle-mask
                         placeholder="Enter your password (6-16 characters)" v-model="password"
                         :prompt-label="'Enter your password (6-16 characters)'"
                         :weak-label="'Enter your password (6-16 characters)'"
                         :medium-label="'Enter your password (6-16 characters)'"
                         :strong-label="'Enter your password (6-16 characters)'" aria-label="Password"/>
            <small v-if="!isPasswordValid" class="text-red-500">Invalid Password</small>

            <label class="uppercase" for="confirm-password">PLEASE TYPE PASSWORD AGAIN*</label>
            <pv-password :input-style="password_input_style" :invalid="!isConfirmPasswordValid" class="password"
                         id="confirm-password" toggle-mask placeholder="Enter your password (6-16 characters)"
                         v-model="confirm_password" :feedback="false" aria-label="Confirma password"/>
            <small v-if="!isConfirmPasswordValid" class="text-red-500">Enter your password (6-16 characters)</small>
          </div>

          <label class="uppercase" for="first_name">FIRST NAME*</label>
          <pv-inputtext :invalid="!isFirstNameValid" v-model="first_name" class="input-text" id="first_name"
                        placeholder="Enter your first name" aria-label="Nombre"/>
          <small v-if="!isFirstNameValid" class="text-red-500">Invalid First Name</small>

          <label class="uppercase" for="father_name">FATHER'S NAME*</label>
          <pv-inputtext :invalid="!isFatherNameValid" v-model="father_name" class="input-text" id="father_name"
                        placeholder="Enter your father's name" aria-label="Nombre del padre"/>
          <small v-if="!isFatherNameValid" class="text-red-500">Invalid Father's Name</small>

          <label class="uppercase" for="mother_name">MOTHER'S NAME*</label>
          <pv-inputtext :invalid="!isMotherNameValid" v-model="mother_name" class="input-text" id="mother_name"
                        placeholder="Enter your mother's name" aria-label="Nombre de la madre"/>
          <small v-if="!isMotherNameValid" class="text-red-500">Invalid Mother's Name</small>

          <label class="uppercase" for="birth_date">BIRTH DATE (YYYY-MM-DD)*</label>
          <pv-inputtext :invalid="!isBirthDateValid" v-model="birth_date" class="input-text" id="birth_date"
                        placeholder="Enter your birth date" aria-label="Fecha de nacimiento"/>
          <small v-if="!isBirthDateValid" class="text-red-500">Invalid Birth Date</small>

          <label class="uppercase" for="phone_number">PHONE NUMBER*</label>
          <pv-inputtext :invalid="!isPhoneNumberValid" v-model="phone_number" class="input-text" id="phone_number"
                        placeholder="Enter your phone number" aria-label="Número de teléfono"/>
          <small v-if="!isPhoneNumberValid" class="text-red-500">Invalid Phone Number</small>

          <label class="uppercase" for="document_number">DOCUMENT NUMBER*</label>
          <pv-inputtext :invalid="!isDocumentNumberValid" v-model="document_number" class="input-text" id="document_number"
                        placeholder="Enter your document number" aria-label="Número de documento"/>
          <small v-if="!isDocumentNumberValid" class="text-red-500">Invalid Document Number</small>

          <div class="flex align-items-center">
            <pv-checkbox v-model="artist" inputId="is_artist" :binary="true" aria-label="Artista"/>
            <label for="is_artist" class="ml-2"> By registering, I accept the Terms of Use and Privacy Policy of
              AlquilaFacil</label>
          </div>

          <h4>AlquilaFacil collects and processes your email address for marketing purposes. You can easily unsubscribe
            at any time via the opt-out link in the marketing emails.</h4>

          <div class="flex justify-content-center gap-2 mt-3 mb-3">
            <pv-button class="form-button w-full w-12rem" @click="submitForm"
                       :label="isEdit ? 'Update Profile' : 'Sign Up now'" plain text aria-label="Botón de registro"
                       :disabled="!isFormValid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-container {
  width: 80%;
}

.form-button {
  background-color: #c53030;
}

.input-text {
  width: 100%;
  border: none;
  border-bottom: 1px solid #d1d1d1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .form-container {
    width: 90%;
  }

  .input-text, .form-button {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .form-container {
    width: 100%;
  }

  .input-text, .form-button {
    width: 100%;
  }
}
</style>
