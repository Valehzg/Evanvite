<template>
    <!-- Parte central con grid de tres columnas, la del medio dividida en dos filas -->
    <div class="flex-grow w-full grid grid-cols-3">
      <div class="col-span-1 min-heigth"> <!-- Columna izquierda -->
        <img :src="juanita" alt="tienda1" class="template-img">
      </div>  
      <div class="flex flex-col col-span-1">
        <div class="flex-grow"> <!-- Primera fila de la columna del medio -->
          <img :src="panchita" alt="tienda1" class="template-img">
        </div>
        <div class="flex-grow"> <!-- Segunda fila de la columna del medio -->
          <img :src="jesen" alt="tienda1" class="template-img">
        </div>
      </div>
      <div class="col-span-1"> <!-- Columna derecha -->
        <img :src="valeria" alt="tienda1" class="template-img">
      </div>
		</div>

		<!-- Parte inferior con el eslogan -->
		<div class="w-full flex justify-center py-4">
			<div class="eslogan">
				<p class="bodoni-moda-fuente">
					Viste con actitud, destaca con elegancia.
				</p>
			</div>
		</div>

    <div class=" titu">
      <p class="bodoni-moda-fuente">P   r   o   d   u   c   t   o    s</p>
      
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
import juanita from './../assets/prin1.png';
import panchita from './../assets/prin2.png';
import jesen from './../assets/prin3.png';
import valeria from './../assets/prin4.png';
import vestidouno from './../assets/vestido1.jpg';
import vestidodos from './../assets/vestido.jpg';
import rosauna from './../assets/rosa1.jpg';
import rosados from './../assets/rosa2.jpg';
import rosatres from './../assets/rosa4.jpg';
import azuluno from './../assets/azul1.jpg';
import azuldos from './../assets/azul2.jpg';
import azultres from './../assets/azul3.jpg';



const cantidadDeImagenes = 8;
const conjuntoDeImagenes = [vestidouno,vestidodos,rosauna,azuluno,azuldos,rosatres,azultres,rosados];
const conjuntoDeDescripcion = ['Vestido Rosa','Vestido Moño','Blazer Caramelo','Blazer Algodon','Bolso Azul','Bolso Moño','Tacones Azul','Tacones Rosa','Zapatos','Bufanda'];
const conjuntoDePrecios = ['$4999','$4800','$3700','$3500','$3540','$3900','$3000','$2900','$3000','$2900'];
</script>

<style scoped>
.imagenes-catalogo{
  width: 100%;
  height: 350px;
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

.template-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.titu {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  padding: 50px 0;

}

.eslogan{
  text-align: center;
  font-size: 100px;
  padding: 80px 0 ;
 
}

</style>

