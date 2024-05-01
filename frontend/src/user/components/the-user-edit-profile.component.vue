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
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="text-left mb-8">
      <h2 class="text-4xl font-semibold mb-4">Cuenta</h2>
      <p class="text-gray-600">Cambia la información de tu cuenta y la configuración de privacidad.</p>
    </div>

    <div class="border border-gray-300 rounded-3xl p-8 mb-8 w-full max-w-4xl">
      <div class="md:w-full flex flex-col justify-start">
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 p-8">Nombre de usuario</p>
          <p class="mr-2 p-8">juan_perez01</p>
          <a href="" class="text-orange-500 hover:text-orange-700 mr-2 p-8">Cambiar</a>
        </div>
      </div>
      <div class="md:w-full flex flex-col justify-start">
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 p-8">Contraseña</p>
          <p class="mr-2 p-8">*******</p>
          <a href="" class="text-orange-500 hover:text-orange-700 mr-2 p-8">Cambiar</a>
        </div>
      </div>
      <div class="md:w-full flex flex-col justify-start">
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 p-8">Correo electrónico</p>
          <p class="mr-2 p-8">juanperez@gmail.com</p>
          <a href="" class="text-orange-500 hover:text-orange-700 mr-2 p-8">Cambiar</a>
        </div>
      </div>
      <div class="md:w-full flex flex-col justify-start">
        <div class="flex justify-between items-center mb-4">
          <div class="flex justify-start items-center gap-60 mb-4">
            <p class="p-8">Suscripción</p>
            <p class="p-button-group-28">Propietario</p>
          </div>
          <a href="" class="text-orange-500 hover:text-orange-700">Cambiar</a>
          <a href="" class="text-red-800 hover:text-red-950 mr-1">Cancelar</a>
        </div>
      </div>
      <div class="md:w-full flex flex-col justify-start">
        <div class="flex justify-between items-center mb-4">
          <p class="mr-2 p-8">Tipo</p>
          <p class="mr-2 p-8">Estandar</p>
          <a href="" class="text-orange-500 hover:text-orange-700 mr-2 p-8">Cambiar</a>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>