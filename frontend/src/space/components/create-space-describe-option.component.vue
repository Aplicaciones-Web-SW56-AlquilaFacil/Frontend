<script>
export default {
  name: "create.space-describe-option.component"
}
</script>

<template>
  <div class="container-add-photo">
    <h2 class="text-2xl font-medium mb-6">Which of these options best describes your space?</h2>
  </div>
  <div class="container-add-photo">
    <div class="container-describe-option">
      <div class="">
        <pv-button class="options-button">
          <img src="../../assets/describe-option-icon1.png" class="img-option-button" alt="icon1" />
          Beach House</pv-button>
      </div>
      <div class="">
        <pv-button class="options-button">
          <img src="../../assets/describe-option-icon2.png" class="img-option-button" alt="icon2" />
          Urban House</pv-button>
      </div>
    </div>
  </div>
  <div class="container-add-photo">
    <div class="container-describe-option">
      <div class="">
        <pv-button class="options-button">
          <img src="../../assets/describe-option-icon3.png" class="img-option-button" alt="icon3" />
          Elegant Halls</pv-button>
      </div>
      <div class="">
        <pv-button class="options-button">
          <img src="../../assets/describe-option-icon4.png" class="img-option-button" alt="icon4" />
          Country House
        </pv-button>
      </div>
    </div>
  </div>
  <hr>
  <router-link to="/describe">
    <pv-button class="back-next" style="left: 0%; margin-left:6%;">Back</pv-button>
  </router-link>

  <router-link to="/confirm-direction">
    <pv-button class="back-next" style="left: 80%; margin-left:-11%;">Next</pv-button>
  </router-link>
</template>

<style>
.container-describe-option {
  display: flex;
}

.options-button {
  background-color: #ffffff;
  color: black;
  border-radius: 8px;
  padding: 10px 20px;
  border-color: grey;
  border-width: 2px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 50px 30% auto;
}

.img-option-button {
  width: 10vh;
  height: 10vh;
  margin-bottom: 15px;
}

</style>
