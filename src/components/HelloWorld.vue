<template>
    <!-- Parte central con grid de tres columnas, la del medio dividida en dos filas -->
    <div class="flex-grow w-full grid grid-cols-3">
      <div class="bg-red-500 col-span-1 min-heigth"> <!-- Columna izquierda -->
        <img :src="juanita" alt="tienda1" class="template-img">
      </div>
      <div class="flex flex-col col-span-1">
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
		<!-- Cuadricula con los productos [imagen,descipccion precio] -->
		<div class="product-list-container w-full">
      <div class="grid grid-cols-4 gap-4 px-40">
        <div v-for="item in cantidadDeImagenes">
          <img :src="conjuntoDeImagenes[item-1]" alt="ropa1" class="imagenes-catalogo">
					<p>{{conjuntoDeDescripcion[item-1]}}</p>
					<p>{{conjuntoDePrecios[item-1]}}</p>
        </div>
      </div>
		</div>
</template>

<script setup>
import imagen1 from './../assets/imagen1.png';
import juanita from './../assets/tienda1.png';

const cantidadDeImagenes = 8;
const conjuntoDeImagenes = [imagen1,imagen1,imagen1,juanita,juanita,imagen1,imagen1,imagen1];
const conjuntoDeDescripcion = ['Sueter','Pantalon','Camisa','Chamarra','Vestido','Blusa','Short','Falda','Zapatos','Bufanda'];
const conjuntoDePrecios = ['$200','$300','$400','$500','$600','$700','$800','$900','$1000','$1100'];
</script>

<style scoped>
.imagenes-catalogo{
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.product-list-container{
	padding: 20px;
	margin: 20px auto;
	text-align: right;
}

.min-heigth{
	min-height: 85vh;
}

</style>
