<script>
export default {
  name: "the-home",
}
</script>

<template>
  <pv-card class="home-card">
    <template #content>
      <div class="container-img-home">
          <img src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/feature/bounded-content/frontend/src/assets/image-detail2.png?raw=true"
               class="img-home">
      </div>
      <div class="container-text-home">
          <div>
            <p class="mb-2">Miraflores, Lima</p>
            <p class="mb-2 text-gray-500">Casa de playa</p>
            <p><strong>S/. 1000 </strong>por noche</p>
          </div>
      </div>
    </template>
  </pv-card>
</template>

<style>

.home-card {
  width: 300px;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.25);
  height: 400px;
  margin: 10vh auto 40px auto;
}

.container-img-home {
  display: block;
  margin: auto auto auto auto;
}

.container-text-home {
  display: block;
  margin: auto auto auto 10px;
}

.img-home {
  display: flex;
  text-align: center;
  margin: 10px auto 30px auto;
}

</style>