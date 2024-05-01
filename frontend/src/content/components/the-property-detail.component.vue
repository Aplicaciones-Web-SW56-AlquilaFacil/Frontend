<script>
export default {
  name: "the-property-detail",
  data() {
    return {
      property: "Property"
    };
  }
}
</script>

<template>
  <div class="flex flex-col items-center mb-28">
    <h1 class="text-2xl font-bold mb-2 mt-6 mr-64">Casa en la playa con patio</h1>

    <div class="flex justify-center items-center mb-4">
      <!-- La primera imagen más grande -->
      <img src="../../assets/image-detail.png" alt="Paso 1" class="rounded w-72 h-72 object-cover mr-2 mb-4">

      <div class="flex flex-col">
        <!-- Dos imágenes arriba -->
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="w-36 h-34 object-cover mb-2 mr-2">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="w-36 h-34 object-cover mb-4">
      </div>

      <div class="flex flex-col">
        <!-- Dos imágenes abajo -->
        <img src="../../assets/image-detail2.png" alt="Paso 2" class="w-36 h-34 object-cover mb-2">
        <img src="../../assets/image-detail2.png" alt="Paso 3" class="w-36 h-34 object-cover mb-4">
      </div>
    </div>

    <div class="flex">
      <div class="w-96">
        <h2 class="text-4xl font-bold mb-2">Asia, Lima</h2>
        <p class="text-gray-500 mb-2">100 Aforo - 3 habitaciones - 3 camas - 2 baños</p>
        <img src="../../assets/italo-photo.png" alt="Foto de Italo">
        <p class="mb-2">Propietario: Italo</p>
        <p class="text-gray-500 mb-2">Plan estándar</p>

        <p class="font-bold mb-2">Descripción:</p>
        <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nisi ac neque ultricies tincidunt. Proin eget vestibulum lorem. Sed fermentum tortor non libero consequat lacinia. Sed vel justo at nunc commodo luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras auctor velit id libero lobortis, sit amet maximus tortor suscipit. Null</p>
      </div>

      <div class="border-2 border-gray-300 rounded p-4">
        <h2 class="text-lg font-bold mb-2">CONTACTA</h2>

        <div class="flex items-center mb-4">
          <div class="mr-2">
            <pv-inputtext type="text" placeholder="Nombre" class="border border-gray-300 px-3 py-2 rounded w-32"/>
          </div>
          <div class="mr-2">
            <pv-inputtext type="text" placeholder="Apellido" class="border border-gray-300 px-3 py-2 rounded w-32"/>
          </div>
          <div class="mr-2">
            <pv-inputtext type="tel" placeholder="Teléfono" class="border border-gray-300 px-3 py-2 rounded w-32"/>
          </div>
        </div>


        <div class="flex items-center mb-4 w-full">
          <div class="mr-4 w-full">
            <pv-inputtext type="email" placeholder="Correo electrónico" class="border border-gray-300 px-3 py-2 rounded w-full"/>
          </div>
        </div>


        <div class="flex items-center mb-4 w-full">
          <div class="mr-4 w-full">
            <textarea placeholder="Mensaje (opcional)" class="border border-gray-300 px-3 py-2 rounded w-full h-44"></textarea>
          </div>
        </div>

        <pv-button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-36">
          Reserva
        </pv-button>
      </div>

    </div>
  </div>
</template>
