<script>
export default {
  name: "create-space-price"
}
</script>

<template>
  <div class="text-center mt-16 mb-36 container">
    <h1 class="text-4xl font-bold mb-12">Set the price</h1>
    <p class="text-gray-500 mb-12">Give a price to your space, you can change it whenever you want.</p>
    <pv-inputtext type="number" class="border border-gray-400 p-2 rounded-md mb-6 w-64 h-12 text-center" placeholder="Price"/>
    <p>Price for the organizer (taxes not included)</p>
  </div>

  <router-link to="/post">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/finish">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65vh;
}

</style>