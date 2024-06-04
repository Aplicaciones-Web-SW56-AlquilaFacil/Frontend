<script>
import { defineComponent } from "vue";
import TheHome from "../components/the-home.component.vue";

export default defineComponent({
  components: { TheHome },
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      // Lógica para manejar la búsqueda con Axios
      console.log("Searching for:", this.query);
    }
  }
});
</script>

<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-text-column">
        <label for="search" class="search-label">Donde</label>
        <div class="search-input-container">
          <input type="text" id="search" class="search-input" v-model="query" placeholder="Solo ingresa el lugar" />
        </div>
      </div>
      <button @click="search" class="search-button">
        <i class="pi pi-search"></i>
      </button>
    </div>
  </div>

  <div class="container">
    <div class="grid">
      <the-home class="home-card"></the-home>
    </div>
  </div>
</template>

<style>

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 2px solid #D13333;
  border-radius: 50px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
}

.search-text-column {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}

.search-label {
  font-weight: bold;
  margin-left: 25px;
}

.search-input-container {
  display: flex;
  align-items: center;
}

.search-input {
  border: none;
  outline: none;
  padding: 5px;
  margin-left: 20px;
  flex: 1;
  border-radius: 4px;
}

.search-button {
  background-color: #D13333;
  border: none;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 110px;
}

.search-button:hover {
  background-color: #c12e2e;
}

.search-button i {
  font-size: 1.2em;
}

.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
