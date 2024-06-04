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
          <div style="color: black;">
            <p>{{ card.title }}</p>
            <p class="text-gray-500">{{ card.description }}</p>
            <p><strong>S/. {{ card.price }} </strong> por noche</p>
          </div>
        </div>
      </router-link>
    </template>
  </pv-card>
</template>


<style>
.home-card {
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  display: inline-flex;
  flex-direction: column;
  min-width: 200px;
}


.container-img-home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img-home {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}


.container-text-home {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.router-link {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

@media (min-width: 1200px) {

  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 270px;
    max-height: 370px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {

  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 170px;
    max-height: 270px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 13px;
  }
}

@media (min-width: 601px) and (max-width: 768px) {

  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 205px;
    max-height: 309px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .container-text-home {
    max-width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 15px;
  }
}

@media (max-width: 600px) {

  .home-card {
    display: inline-flex;
    width: auto;
    max-width: 150px;
    max-height: 250px;
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 80%;
    height: auto;
  }

  .container-text-home {
    max-width: 80%;
    box-sizing: border-box;
    text-align: left;
    margin: 0 auto;
    font-size: 13px;
  }
}

</style>
