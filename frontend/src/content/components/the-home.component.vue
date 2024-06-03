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
  display: inline-flex; /* Hacer que la tarjeta se ajuste a su contenido */
  flex-direction: column;
  width: auto; /* Ajustar el ancho al contenido */

}


.container-img-home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img-home {
  width: 100%;
  max-width: 100%; /* Cambiado a 100% para ajustar el tamaño máximo */
  height: auto; /* Ajusta la altura automáticamente */
  display: block;
}


.container-text-home {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  box-sizing: border-box; /* Asegura que el padding no aumente el tamaño del contenedor */
}

.router-link {
  text-decoration: none;
}

@media (min-width: 1200px) {

  .home-card {
    display: inline-flex; /* Hacer que la tarjeta se ajuste a su contenido */
    width: auto; /* Ajustar el ancho al contenido */
    max-width: 270px; /* Establecer el tamaño máximo de la tarjeta */
    max-height: 370px; /* Corregido aquí */
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%; /* Reducir el ancho máximo de la imagen */
    height: auto;
  }

  .container-text-home {
    max-width: 100%; /* Reducir el ancho máximo del contenedor de texto */
    box-sizing: border-box; /* Asegurar que el relleno no afecte el tamaño total */
    text-align: left; /* Alinear el texto a la izquierda */
    margin: 0 auto; /* Centrar el contenedor de texto horizontalmente */
    font-size: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {

  .home-card {
    display: inline-flex; /* Hacer que la tarjeta se ajuste a su contenido */
    width: auto; /* Ajustar el ancho al contenido */
    max-width: 170px; /* Establecer el tamaño máximo de la tarjeta */
    max-height: 270px; /* Corregido aquí */
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%; /* Reducir el ancho máximo de la imagen */
    height: auto;
  }

  .container-text-home {
    max-width: 100%; /* Reducir el ancho máximo del contenedor de texto */
    box-sizing: border-box; /* Asegurar que el relleno no afecte el tamaño total */
    text-align: left; /* Alinear el texto a la izquierda */
    margin: 0 auto; /* Centrar el contenedor de texto horizontalmente */
    font-size: 13px;
  }
}

@media (min-width: 601px) and (max-width: 768px) {

  .home-card {
    display: inline-flex; /* Hacer que la tarjeta se ajuste a su contenido */
    width: auto; /* Ajustar el ancho al contenido */
    max-width: 205px; /* Establecer el tamaño máximo de la tarjeta */
    max-height: 309px; /* Corregido aquí */
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 100%; /* Reducir el ancho máximo de la imagen */
    height: auto;
  }

  .container-text-home {
    max-width: 100%; /* Reducir el ancho máximo del contenedor de texto */
    box-sizing: border-box; /* Asegurar que el relleno no afecte el tamaño total */
    text-align: left; /* Alinear el texto a la izquierda */
    margin: 0 auto; /* Centrar el contenedor de texto horizontalmente */
    font-size: 15px;
  }
}

@media (max-width: 600px) {

  .home-card {
    display: inline-flex; /* Hacer que la tarjeta se ajuste a su contenido */
    width: auto; /* Ajustar el ancho al contenido */
    max-width: 150px; /* Establecer el tamaño máximo de la tarjeta */
    max-height: 250px; /* Corregido aquí */
  }

  .container-img-home {
    width: 100%;
  }

  .img-home {
    width: 100%;
    max-width: 80%; /* Reducir el ancho máximo de la imagen */
    height: auto;
  }

  .container-text-home {
    max-width: 80%; /* Reducir el ancho máximo del contenedor de texto */
    box-sizing: border-box; /* Asegurar que el relleno no afecte el tamaño total */
    text-align: left; /* Alinear el texto a la izquierda */
    margin: 0 auto; /* Centrar el contenedor de texto horizontalmente */
    font-size: 13px;
  }
}

</style>
