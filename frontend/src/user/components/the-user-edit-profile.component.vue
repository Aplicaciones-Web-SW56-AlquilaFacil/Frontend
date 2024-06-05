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
  <h1 style="margin: 2% 5% auto 5%">Account</h1>
  <h3 style="margin: 2% 5% auto 5%; font-weight: normal;">Change your account information and privacy settings</h3>
  <pv-card  class="edit-profile-card">
    <template #content>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>User Name</label>
          <label>juan_perez01</label>
          <label>Change</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Password</label>
          <label>*******</label>
          <label>Change</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Email</label>
          <label>juanperez@gmail.com</label>
          <label>Change</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Suscription</label>
          <label>Propietary</label>
          <label>Change</label>
        </div>
      </div>
      <div class="edit-profile-container">
        <div class="edit-profile-props">
          <label>Type</label>
          <label>Estandar</label>
          <label>Change</label>
          <label>Cancel</label>
        </div>
      </div>
    </template>
  </pv-card>
  <router-link to="/home">
  <pv-button class="forpass-button">Update</pv-button>
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

/* Responsive styles */
@media (max-width: 768px) {
  .edit-profile-card {
    width: 90%;
    height: auto;
  }
  .edit-profile-props {
    flex-direction: column;
    align-items: flex-start;
  }
  .edit-profile-props label {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .edit-profile-card {
    width: 100%;
  }
}


</style>