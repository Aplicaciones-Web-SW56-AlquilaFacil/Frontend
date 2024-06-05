<script>


export default {
  name: "create-space-finish",
}
</script>

<template>
  <div class="container-add-photo">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">That's it!</h1>
      <p class="text-gray-500 mb-4">This is what we will show to others.</p>
    </div>
  </div>
  <div style="display: flex; justify-content:center;">
    <pv-card class="finish-card">
      <template #content>
        <div class="container-add-photo">
          <div class="border border-gray-300 rounded-lg p-3 mb-12 shadow-xl">
            <img src="../../assets/final-image.jpg" alt="Image description" style="width: 100%">
            <div>
              <p class="mb-2">Miraflores, Lima</p>
              <p class="mb-2 text-gray-500">Beach House</p>
              <p class="mb-2">S/. 1000 per night</p>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
  <hr>
  <router-link to="/home">
    <pv-button class="back-next" style="left: 80%;">Next</pv-button>
  </router-link>
</template>


<style>
.finish-card {
  width: 40%;
  min-width: 290px;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 51px rgba(0, 0, 0, 0.25);
  margin: 40px auto 50px auto;
}
</style>