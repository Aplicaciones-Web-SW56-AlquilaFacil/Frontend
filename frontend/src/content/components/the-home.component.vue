<script>
import { CardEndpoint } from "../services/card-endpoint.service.json.js";
import card from "primevue/card/Card.vue";

export default {
  name: "the-home",
  computed: {
    card() {
      return card;
    }
  },
  data() {
    return {
      cards: null,
      cardApi: new CardEndpoint()
    };
  },
  created() {
    this.cardApi.getAll().then(response => {
      this.cards = response.data;
      console.log(this.cards);
    });
  }
};
</script>

<template>
  <pv-card class="home-card" v-for="card in cards" :key="card.id">
    <template #content>
      <router-link to="/home-detail" class="router-link">
        <div class="container-img-home">
          <img :src="card.imgUrl" alt="home" class="img-home">
        </div>
        <div class="container-text-home">
          <div>
            <p class="mb-1">{{ card.title }}</p>
            <p class="mb-1 text-gray-500">{{ card.description }}</p>
            <p><strong>S/. {{ card.price }} </strong> por noche</p>
          </div>
        </div>
      </router-link>
    </template>
  </pv-card>
</template>

<style>
.home-card {
  width: 300px;
  border: 1px solid #faefef;
  border-radius: 23px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  height: 400px;
  margin: 10vh auto 40px auto;
  display: flex;
}

.container-img-home {
  display: flex;
  margin: auto;
}

.img-home {
  display: flex;
  text-align: center;
  margin: 5px auto;
  /* Reducido el margen entre la imagen y los textos */
  width: 250px;
  height: 240px;
}

.container-text-home {
  display: block;
  margin: auto;
}

.router-link {
  text-decoration: none; /* Quita el subrayado del enlace */
}

@media (max-width: 600px) {
  .home-card {
    width: 100%;
    height: auto;
  }

  .img-home {
    width: 100%;
    height: auto;
  }
}
</style>

