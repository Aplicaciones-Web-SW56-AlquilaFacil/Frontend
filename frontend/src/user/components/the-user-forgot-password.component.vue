<script>

export default {
  name: "the-user-forgot-password",
}
</script>

<template>
  <h2 style="margin: 2% 5% auto 5%">Recupera tu contraseña</h2>
    <div>
      <img class="forgot-pass-image" src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/feature/bounded-user/frontend/src/assets/forgot-password.png?raw=true" alt="forgot-password">
    </div>
      <h2 class="strong-subtitle">¿Olvidaste tu contraseña? No te preocupes</h2>
    <h4 style="text-align: center; font-weight: normal;">Le enviaremos una URL para restablecer su contraseña.
    Ingrese la dirección de correo electrónico que ha registrado en AlquilaFácil.</h4>
  <pv-inputtext placeholder="Ingresa tu correo electronico" class="forpass-input"></pv-inputtext>
  <pv-button class="forpass-button">Enviar</pv-button>
</template>

<style>

.forpass-input {
  display: flex;
  margin: 2% auto 2% auto;
  width: 30%;
  border-color: #d13333 !important;
}

.forgot-pass-image {
  display: block;
  margin: auto auto auto auto;
  width: auto;
  height: auto;
}

.strong-subtitle {
  display: flex;
  margin: auto auto auto auto;
  justify-content: center;
}

.forpass-button {
  background-color: #d13333;
  display: block;
  width: 10%;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin: auto auto 6% auto;
  border: #d13333;
}

/* Responsive styles */
@media (max-width: 768px) {
  .forpass-input {
    width: 90%;
  }
  .forpass-button {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .forpass-input {
    width: 100%;
  }
  .forpass-button {
    width: 70%;
  }
}

</style>