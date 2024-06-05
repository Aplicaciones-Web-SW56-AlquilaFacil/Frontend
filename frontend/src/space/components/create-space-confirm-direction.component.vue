<script>
export default {
  name: "create-space-confirm-direction.component"
}
</script>
<template>
  <div class="container-dir">
    <div class="left-column-confirm mx-auto">
      <h1 class="text-center">Confirm your address</h1>
      <h3 style="font-weight: normal" class="text-center">We will only share your address with those who have made a reservation</h3>

      <div class="mx-auto">
        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="Country/region">Country / region</label>
          <pv-inputtext id="Country/region" v-model="value" aria-describedby="Country/region-help" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="Address">Address</label>
          <pv-inputtext id="Address" v-model="value" aria-describedby="Address-help" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="Apartment">Apartment, floor, building, condominium, etc.</label>
          <pv-inputtext id="Apartment" v-model="value" aria-describedby="Apartment" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="City">City</label>
          <pv-inputtext id="City" v-model="value" aria-describedby="City" class="confirm-dir-input"/>
        </div>

        <div class="flex flex-column gap-2">
          <label class="label-conf-dir" for="District/province">District / province</label>
          <pv-inputtext id="District/province" v-model="value" aria-describedby="District/province" class="confirm-dir-input"/>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-1 shadow-2 border-gray-300">
  <router-link to="/describe-option">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/stand-out">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>


<style>
.back-next {
  background-color: #d13333;
  display: inline;
  width: 10%;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: bold;
  margin: 2% auto 5% auto;
}

.left-column-confirm {
  margin: 2% auto 3% 10%;
}

.container-dir {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
}

.confirm-dir-input {
  width: 70%;
  padding: 10px 10px;
  border-radius: 10px;
}

.label-conf-dir {
  margin-top: 20px;
}

@media (max-width: 768px) {

  .back-next {
    width: 20%;
    padding: 10px 10px;
    margin-top: 0;
    margin-right: -20.5%;
  }
}
</style>