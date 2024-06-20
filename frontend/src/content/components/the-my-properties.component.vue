<template>
  <div v-if="filteredCards.length > 0" class="properties-container">
    <div class="property-card" v-for="card in filteredCards" :key="card.id">
      <router-link :to="`/home-detail`" class="router-link">
        <div class="property-details">
          <img :src="card.imgUrl" alt="home" class="property-img">
          <div class="property-info">
            <h3>{{ card.title }}</h3>
            <p class="property-description">{{ card.description }}</p>
            <p><strong>S/. {{ card.price }} </strong> per night</p>
            <p class="property-message">{{ card.message }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div v-if="filteredCards.length === 0" class="no-results">
    <p>No results found for "{{ query }}"</p>
    <img class="no-results-img"
         src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/main/frontend/src/assets/placeholder.png?raw=true"
         alt="PlaceHolder">
  </div>
</template>

<script>
import { CardEndpoint } from "../services/card-endpoint.service.json.js";

export default {
  name: "the-my-properties",
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cards: [],
      cardApi: new CardEndpoint()
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card =>
          card.title.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  },
  created() {
    this.cardApi.getAll().then(response => {
      this.cards = response.data;
      console.log(this.cards);
    });
  }
};
</script>

<style>
.properties-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.property-card {
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08);
}

.property-details {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.property-img {
  width: 40%;
  object-fit: cover;
}

.property-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
}

.property-info h3 {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.property-description {
  color: #666;
  margin: 10px 0;
}

.property-message {
  color: #c53030;
  font-weight: bold;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.no-results-img {
  width: 100%;
  height: auto;
}
</style>
