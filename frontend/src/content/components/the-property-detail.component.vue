<script>
export default {
  name: "the-property-detail",
}
</script>

<template>
  <div class="container">
    <h1>Casa en la playa con patio</h1>

    <div class="image-grid">
      <!-- La primera imagen más grande -->
      <div class="large-image">
        <img src="../../assets/image-detail.png" alt="Paso 1" class="rounded-image">
      </div>

      <div class="image-column">
        <!-- Dos imágenes arriba -->
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="small-image">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="small-image">
      </div>

      <div class="image-column">
        <!-- Dos imágenes abajo -->
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
        <p style="width: 630px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nisi ac neque ultricies tincidunt. Proin eget vestibulum lorem. Sed fermentum tortor non libero consequat lacinia. Sed vel justo at nunc commodo luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras auctor</p>
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
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
}

.small-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 4px;
  margin-right: 4px;
  border-radius: 8px;
}

.details {
  display: flex;
  align-items: center;
  margin: 2% 16% 2% 16%;
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
  width: 30%;
}

.full-width {
  width: 95%;
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