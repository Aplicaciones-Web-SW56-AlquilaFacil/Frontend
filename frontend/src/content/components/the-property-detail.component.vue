<script>
import {CardEndpoint} from "../services/card-endpoint.service.json.js";

export default {
  name: "the-property-detail",
  data() {
    return {
      locals: [],
      local: null,
      localsService: null,
      filters: {},
    }
  },
  created() {
    this.localsService = new CardEndpoint();
    //const localId = this.$route.params.id;
    this.localsService.getAllLocals()
        .then(response => {
          console.log('Response data1:', response.data);
          this.locals = response.data.map(local => ({
            id: local.id,
            localType: local.localType,
            nightPrice: local.nightPrice,
            photoUrl: local.photoUrl,
            cityPlace: local.cityPlace,
            streetAddress: local.streetAddress,
            descriptionMessage: local.descriptionMessage,
            localCategory: local.localCategory
          }));
          this.local = this.locals[1];
          console.log('Selected local:', this.local);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }
  /*created() {
    this.localsService = new CardEndpoint();
    this.localsService.getAllLocals()
        .then(response => {
          console.log('Response data1:', response.data);
          this.locals = response.data.map(local => {
            return {
              id: local.id,
              localType: local.localType,
              nightPrice: local.nightPrice,
              photoUrl: local.photoUrl,
              cityPlace: local.cityPlace,
              streetAddress: local.streetAddress,
              descriptionMessage: local.descriptionMessage,
              localCategory: local.localCategory
            };
          });
        })
        .catch(error => {
          console.error('Error fetching data1:', error);
        });
  }*/
}
</script>

<template>
  <div class="container" v-if="local">
    <h1>{{ local.localCategory.name }} {{ local.localType }}</h1>

    <div class="image-grid">
      <div class="large-image">
        <img :src="local.photoUrl" alt="Step 1" class="rounded-image">
      </div>

      <div class="image-column">
        <img src="../../assets/image-detail2.png" alt="Step 2" class="small-image">
        <img src="../../assets/image-detail2.png" alt="Step 3" class="small-image">
      </div>

      <div class="image-column">
        <img src="../../assets/image-detail2.png" alt="Step 2" class="small-image">
        <img src="../../assets/image-detail2.png" alt="Step 3" class="small-image">
      </div>
    </div>

    <div class="details">
      <div class="description">
        <h2 class="subtitle">{{ local.cityPlace }}</h2>
        <p class="info">{{ local.streetAddress }}</p>
        <p class="info">100 Capacity - 3 bedrooms - 3 beds - 2 bathrooms</p>
        <img src="../../assets/italo-photo.png" alt="Italo's Photo">
        <p class="info">Owner: Italo</p>
        <p class="info">Standard Plan</p>

        <p class="bold">Description:</p>
        <p style="width: 90%">{{ local.descriptionMessage }}</p>
        <p class="info">Price: S/. {{ local.nightPrice }} per night</p>
      </div>

      <div class="contact">
        <h2 class="contact-title">CONTACT</h2>

        <div class="input-group">
          <input type="text" placeholder="Name" class="input-field">
          <input type="text" placeholder="Last Name" class="input-field">
          <input type="text" placeholder="Phone" class="input-field">
        </div>

        <div class="input-group">
          <input type="email" placeholder="Email" class="input-field full-width">
        </div>

        <div class="input-group">
          <textarea placeholder="Message (optional)" class="input-field full-width"></textarea>
        </div>

        <button class="button">Book</button>
      </div>
    </div>
  </div>
</template>


<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.large-image {
  margin-right: 8px;
}

.image-column {
  display: flex;
  flex-direction: column;
}

.large-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.small-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: cover;
  margin-bottom: 4px;
  margin-right: 4px;
  border-radius: 8px;
}

.details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2% 16% 2% 16%;
  width: 70%;
}

.description {
  flex: 1;
  min-width: 300px;
}

.subtitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.info {
  color: #666;
  margin-bottom: 20px;
}

.bold {
  font-weight: bold;
  margin-bottom: 10px;
}

.contact {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
}

.contact-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.input-group {
  margin-bottom: 16px;
}

.input-field {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-right: 8px;
  width: calc(100% - 16px);
}

.full-width {
  width: 100%;
}

.button {
  background-color: #d13333;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: solid #d13333;
}

</style>