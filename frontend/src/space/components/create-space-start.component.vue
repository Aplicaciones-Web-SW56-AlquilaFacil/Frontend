<script>
export default {
  name: "create-space-start.component",
  props: ['showCreateSpace'],
  methods: {
    createSpaceStart () {
      this.$emit('update:showCreateSpace', true);
    }
  },
  emits: ['update:showCreateSpace'],
}
</script>
<template>
  <div class="container-dir">
    <div class="left-column-confirm">
      <h1 class="text-4xl font-bold">Starting to use<br>AlquilaFacil is very<br>simple</h1>
    </div>

    <div class="right-column-confirm">
      <div class="enum-start">
        <div>
          <h2 class="font-bold">1 Describe your space</h2>
          <p class="text-gray-500">Share some basic details.</p>
        </div>
        <img src="../../assets/icon-step1.png" alt="Step 1" class="img-start">
      </div>
      <div class="enum-start">
        <div>
          <h2 class="font-bold">2 Make it stand out</h2>
          <p class="text-gray-500">Add at least 4 photos, a title, and a <br> description. We'll take care of the rest.</p>
        </div>
        <img src="../../assets/icon-step2.png" alt="Step 2" class="img-start">
      </div>
      <div class="enum-start">
        <div>
          <h2 class="font-bold">3 Finish and publish</h2>
          <p class="text-gray-500">Add the final settings and publish your space.</p>
        </div>
        <img src="../../assets/icon-step3.png" alt="Step 3" class="img-start">
      </div>
    </div>
  </div>
  <hr>
  <router-link to="/describe">
    <pv-button class="back-next" style="left: 80%; margin-left:0%;">Let's get started</pv-button>
  </router-link>
</template>


<style>
.img-start {
  width: 14vh;
  height: 14vh;
  margin: auto 20% auto auto;
}

.enum-start {
  display: flex;
  justify-content: center;
  margin: 5vh 20vh 5vh auto;
}
</style>