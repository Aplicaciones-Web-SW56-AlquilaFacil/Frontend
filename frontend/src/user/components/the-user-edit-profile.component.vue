<script>
export default {
  name: "the-user-edit-profile",
  props: ['showProfile'],
  methods: {
    openProfile() {
      this.$emit('update:showProfile', true);
    }
  },
  emits: ['update:showProfile'],
}
</script>
<template>
  <h1 style="margin: 2% 5% auto 5%">Cuenta</h1>
  <h3 style="margin: 2% 5% auto 5%; font-weight: normal;">Cambia la informacion de tu cuenta y la configuracion de privacidad</h3>
  <pv-card  class="edit-profile-card">
    <template #content>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Nombre de usuario</label>
          <label>juan_perez01</label>
          <label>Cambiar</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Contraseña</label>
          <label>*******</label>
          <label>Cambiar</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Correo electronico</label>
          <label>juanperez@gmail.com</label>
          <label>Cambiar</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Suscripcion</label>
          <label>Propietario</label>
          <label>Cambiar</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Tipo</label>
          <label>Estandar</label>
          <label>Cambiar</label>
          <label>Cancelar</label>
        </div>
      </div>
    </template>
  </pv-card>
  <router-link to="/home">
  <pv-button class="forpass-button">Actualizar</pv-button>
  </router-link>
</template>


<style>
.edit-profile-card {
   border: solid black 2px;
   width: 800px;
   height: 400px;
   margin: 5% auto 5% auto;

}

.edit-profile-props {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto auto 8% 0px;
}

.edit-profile-container {
  display: flex;
  justify-content: center;
}

.edit-profile-props label {
  margin-right: 50px;
}

</style>