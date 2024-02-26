<script setup>
import navbar from './../components/reutilisables/navbar.vue'
</script>

<template>
    <navbar />
    <!--div>
        <div class="imagen-fondo">
            <img src="./../assets/fondo1.png" />
        </div>
        <router-view />
    </div-->
    <div class="flex flex-col items-center justify-center">

    <!-- Parte central con grid de tres columnas, la del medio dividida en dos filas -->
    <div class="flex-grow w-full grid grid-cols-3 gap-4">
      <div class="bg-red-500 col-span-1 min-heigth"> <!-- Columna izquierda -->
        seccion 1
      </div>
      <div class="flex flex-col col-span-1 gap-4">
        <div class="bg-green-500 flex-grow"> <!-- Primera fila de la columna del medio -->
          seccion 2.1
        </div>
        <div class="bg-yellow-500 flex-grow"> <!-- Segunda fila de la columna del medio -->
					seccion 2.2
        </div>
      </div>
      <div class="bg-blue-500 col-span-1"> <!-- Columna derecha -->
				seccion 3
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

	<!-- Cuadricula con los productos [imagen,descipccion precio] -->
	<div class="product-list-container">
		<div class="grid grid-cols-5 gap-4 w-full">
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
			<div class="product-container">
				<div class="template-img">soy la imagen</div>
				<p>Descripcion</p>
				<p>Precio</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

.product-list-container{
	padding: 20px;
	margin: 20px auto;
	text-align: right;
}
.product-container{
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
.imagen-fondo{
    position: fixed;
    z-index: -1;
    opacity: 0.3;
}

.min-heigth{
	min-height: 85vh;
}

.template-img{
	width: 120px;
	height: 200px;
	background-color: red;
}

</style>
