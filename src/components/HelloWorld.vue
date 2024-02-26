<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Parte superior con el logo -->
    <div class="bg-blue-500 w-full flex justify-center py-4">
      <section class="logo">
        <img src="./../assets/evan.png" alt="Logotipo de tu tienda">
      </section>
    </div>

    <!-- Parte central con grid de tres columnas, la del medio dividida en dos filas -->
    <div class="flex-grow w-full grid grid-cols-3 gap-4">
      <div class="bg-red-500 col-span-1"> <!-- Columna izquierda -->
        <!-- Contenido de la columna izquierda -->
      </div>
      <div class="flex flex-col col-span-1 gap-4">
        <div class="bg-green-500 flex-grow"> <!-- Primera fila de la columna del medio -->
          <!-- Contenido de la primera fila de la columna del medio -->
        </div>
        <div class="bg-yellow-500 flex-grow"> <!-- Segunda fila de la columna del medio -->
          <!-- Contenido de la segunda fila de la columna del medio -->
        </div>
      </div>
      <div class="bg-blue-500 col-span-1"> <!-- Columna derecha -->
        <!-- Contenido de la columna derecha -->
      </div>
    </div>

    <!-- Parte inferior con el eslogan -->
    <div class="bg-purple-500 w-full flex justify-center py-4">
      <div class="eslogan">
        <h1>
            Viste con actitud, destaca con elegancia.
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
