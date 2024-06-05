<script>
export default {
  name: "create-space-add-photo.component"
}
</script>

<template>
  <div class="container-add-photo">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">Add some photos of your space</h2>
      <p class="text-gray-500 mb-4">To start, you will need four photos. Afterwards, you can
        <br>add more or make changes.</p>
    </div>
  </div>
  <div class="container-add-photo">
    <div class="border-photo">
      <div class="border-container">
        <img src="../../assets/add-photo-icon.png" alt="icon" class="w-14 h-14 mb-2 mx-auto justify-start">
        <div class="border-container">
          <p class="mb-2 font-bold text-center">Drag the photos</p>
          <p class="mb-2 text-gray-500">Choose at least 5 photos</p>
        </div>
      </div>
      <p class="justify-end text-center mb-2 underline">Upload photos from your device</p>
    </div>
  </div>

  <hr>
  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="title">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>

</template>


<style>

.border-container {
  display: block;
  justify-content: center;
  text-align: center;
  margin: 40px auto auto auto;
}

.container-add-photo {
  display: flex;
  justify-content: center;
}

.border-photo {
  border: dashed;
  width: 400px;
  height: 350px;
  margin: 20px auto 3% auto;
}

</style>
