<script>
import { CardEndpoint } from "../services/card-endpoint.service.json.js";
import { useAuthenticationStore } from "../../user/services/authentication.store.js";

export default {
  name: "the-my-properties",
  data() {
    return {
      locals: [],
      contacts: [],
      localsService: new CardEndpoint(),
      userId: null,
      userContacts: [],
    };
  },
  created() {
    this.userId = useAuthenticationStore().currentUserId;
    console.log('Current User ID:', this.userId);
    this.loadLocalsAndContacts();
  },
  methods: {
    loadLocalsAndContacts() {
      this.localsService.getAllLocals()
          .then(response => {
            console.log('Locals Response:', response.data);
            this.locals = response.data.filter(local => local.userId === this.userId);
            console.log('Filtered Locals for User ID:', this.locals);
            return this.localsService.getAllContacts();
          })
          .then(response => {
            console.log('Contacts Response:', response.data);
            this.contacts = response.data;
            this.userContacts = this.contacts.filter(contact =>
                this.locals.some(local => local.id === contact.propertyId)
            );
            console.log('User Contacts:', this.userContacts);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }
  }
}
</script>


<template>
  <div v-if="userContacts.length" class="properties-container">
    <div class="property-card" v-for="contact in userContacts" :key="contact.id">
      <router-link :to="`/home-detail/${contact.propertyId}`" class="router-link">
        <div class="property-details">
          <!--<img :src="card.imgUrl" alt="home" class="property-img">-->
          <div class="property-info">
            <!--<h3>{{ contact.nameSurname }}</h3>-->
            <p class="property-description">{{ contact.email }}</p>
            <p><strong>{{ contact.phone }} </strong></p>
            <p class="property-message">{{ contact.message }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div v-if="userContacts.length === 0" class="no-results">
    <p>No results found for messages</p>
    <img class="no-results-img"
         src="https://github.com/Aplicaciones-Web-SW56-AlquilaFacil/Frontend/blob/main/frontend/src/assets/placeholder.png?raw=true"
         alt="PlaceHolder">
  </div>
</template>

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
  width: 500px;
  height: auto;
}
</style>
