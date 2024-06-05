<script>
export default {
  name: "create-space-stand-out.component"
}
</script>
<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <div>
        <h2 class="mb-12 font-bold">Step 2</h2>
        <h1 class="text-4xl mb-12 font-bold">Make your space
          <br> stand out</h1>
        <p class="text-gray-500 mb-12">In this step, you'll need to add some photos of your space.
          <br> Then, you'll need to create a title and a description.</p>
      </div>
    </div>
    <div class="right-column-confirm">
      <img src="../../assets/image-step2.png" alt="step2" class="img-confirm-dir">
    </div>
  </div>
  <hr>
  <router-link to="/confirm-direction">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/add-photo">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

