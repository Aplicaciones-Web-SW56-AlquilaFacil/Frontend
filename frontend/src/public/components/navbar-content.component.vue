<script>
export default {
  name: 'navbar-content',
  data() {
    return {
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ],
      visible:false,
    };
  }
};
</script>

<template>
  <pv-toolbar class="flex justify-content-center items-center toolbar" aria-label="Toolbar content">
    <template #start>
      <div class=" flex flex-row gap-7 justify-content-center" aria-label="Main navigation section">
        <img class="md:block hidden" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo"/>
        <div class="flex justify-content-center">
          <div  class=" block lg:hidden card flex justify-content-center" aria-label="toolbar features content">
            <pv-sidebar   v-model:visible="visible" header="AlquilaFácil">
              <img class="md:hidden" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo"/>
              <h2> Inicio </h2>
              <h2> Subscripciones </h2>
              <pv-button class="md:hidden bg-red-600" label="Publica tu espacio">Publica tu espacio</pv-button>
              <pv-button class="button-custom md:hidden" label="Inicia sesión">Iniciar Sesión</pv-button>
            </pv-sidebar>
            <pv-button class="bg-transparent text-black-alpha-80 border-transparent text-2xl hover:text-cyan-600"  icon="pi pi-bars"  @click="visible = true" aria-label="Menu" />
          </div>
          <div  class=" hidden  text-center lg:flex lg:flex-row text-xs gap-5 align-items-center navbar-links " aria-label="toolbar features content" >
            <h2> Inicio </h2>
            <h2> Subscripciones </h2>
            <pv-button class="bg-red-600" label="Publica tu espacio">Publica tu espacio</pv-button>
          </div>
        </div>
        <div aria-label="login button" class="hidden md:flex text-centeralign-items-center">
          <pv-button class="button-custom" label="Inicia sesión">Iniciar Sesión</pv-button>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar{
  border-radius:0;
}
h2:hover{
  cursor:pointer;
  color: red;
}
h2{
  color:black;
  font-size: 1rem;
  font-weight: bold;
}
.navbar-links img {
  cursor: pointer;
}
.button-custom {
  background-color: white;
  border: 2px solid red;
  color: red;
}
</style>