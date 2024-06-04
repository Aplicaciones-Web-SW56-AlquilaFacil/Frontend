<script>
export default {
  name: "the-property-detail",
}
</script>

<template>
  <div class="container">
    <h1>Casa en la playa con patio</h1>

    <div class="image-grid">
      <div class="large-image">
        <img src="../../assets/image-detail.png" alt="Paso 1" class="rounded-image">
      </div>

      <div class="image-column">
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="small-image">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="small-image">
      </div>

      <div class="image-column">
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="small-image">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="small-image">
      </div>
    </div>

    <div class="details">
      <div class="description">
        <h2 class="subtitle">Asia, Lima</h2>
        <p class="info">100 Aforo - 3 habitaciones - 3 camas - 2 baños</p>
        <img src="../../assets/italo-photo.png" alt="Foto de Italo">
        <p class="info">Propietario: Italo</p>
        <p class="info">Plan estándar</p>

        <p class="bold">Descripción:</p>
        <p style="width: 90%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. </p>
      </div>

      <div class="contact">
        <h2 class="contact-title">CONTACTA</h2>

        <div class="input-group">
          <input type="text" placeholder="Nombre" class="input-field">
          <input type="text" placeholder="Apellido" class="input-field">
          <input type="text" placeholder="Teléfono" class="input-field">
        </div>

        <div class="input-group">
          <input type="email" placeholder="Correo electrónico" class="input-field full-width">
        </div>

        <div class="input-group">
          <textarea placeholder="Mensaje (opcional)" class="input-field full-width"></textarea>
        </div>

        <button class="button">Reserva</button>
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
  flex-wrap: wrap; /* Added flex-wrap */
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
  min-width: 300px; /* Ensure minimum width for smaller screens */
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
  max-width: 400px; /* Ensure contact form doesn't stretch too wide */
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
  width: calc(100% - 16px); /* Adjust width to account for padding */
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