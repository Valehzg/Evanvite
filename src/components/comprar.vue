<template>
    <div class="lo-general w-full">
        <div class="flex w-full sub-contenedor">
            <div class="gallery-container px-20">
                <div class="thumbnails">
                    <div v-for="(image, index) in images" :key="index" class="thumbnail" @click="selectImage(index)">
                        <img :src="image" :alt="`Image ${index}`" />
                    </div>
                </div>
                <div class="selected-image">
                    <img :src="selectedImage" alt="Selected Image" />
                </div>
            </div>
            <div class="producto-descripcion">
                <p class="product-title">Vestido Con Moño Elegante</p>
                <div class="product-price">$4800 MXN</div>
                <div class="product-sizes py-4">
                    <span>Tallas:  </span>
                    <span class="size">XS</span>
                    <span class="size">S</span>
                    <span class="size">M</span>
                    <span class="size">L</span>
                    <span class="size">XL</span>
                </div>
                <div class="wishlist">
                    <button class="wishlist-btn">♥</button>
                    <button class="add-to-cart-btn">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image1 from "./../assets/vestido.jpg";
import image2 from "./../assets/prenda2.jpg";
import image3 from "./../assets/prenda3.jpg";
import image4 from "./../assets/prenda4.jpg";
export default {
  data() {
    return {
      images: [
        image1,
        image2,
        image4,
        image3,
      ],
      selectedImageIndex: 0
    };
  },
  computed: {
    selectedImage() {
      return this.images[this.selectedImageIndex];
    }
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index;
    }
  }
};
</script>

<style scoped>
.letrota{
    font-size: xx-large;
}
.lo-general{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 150px);
    width: 100%;
}

.gallery-container {
  display: flex;
}
.thumbnails {
  display: flex;
  flex-direction: column;
}
.thumbnail img {
  min-width: 100px; /* o el tamaño que prefieras para las miniaturas */
  max-width: 100px; /* o el tamaño que prefieras para las miniaturas */
  cursor: pointer;
  margin-bottom: 10px; /* espacio entre miniaturas */
}
@media screen and (max-width: 900px) {
    .thumbnail img {
        min-width: 50px; /* o el tamaño que prefieras para las miniaturas */
        max-width: 50px; /* o el tamaño que prefieras para las miniaturas */
    }
}
.selected-image img {
  max-width: 500px;
  padding-left: 20px;
}
@media screen and (max-width: 900px) {
    .selected-image img {
        max-width: 300px;
        padding-left: 15px;
    }
}

.producto-descripcion {
  min-width: 100px;
}
.sub-contenedor {
  padding-top: 50px;
  min-height: 740px;
}

.product-details {
  font-family: 'TuFuente', sans-serif;
  margin-left: 2rem; /* Ajusta según el layout */
}

.product-title {
  color: #333; /* Ajusta el color según tu diseño */
  margin-bottom: 1rem;
  font-size: 50px;
  font-family:'Times New Roman';
}

.product-price {
  font-size: 1.5rem;
  color: #666; /* Ajusta el color según tu diseño */
  margin-bottom: 1rem;
}

.product-sizes {
  margin-bottom: 2rem;
  margin-top: 200px;
}
@media screen and (max-width: 900px) {
    .product-sizes {
    margin-top: 50px;
    }
}

.size {
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
  /* Añade estilos para las tallas seleccionadas si es necesario */
}

.add-to-cart-btn {
  background-color: #000; /* Ajusta el color según tu diseño */
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #444; /* Ajusta el color para el hover */
}

.wishlist-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding-right: 30px;
}

.wishlist {
  display: flex;
  align-items: center;
}

/* Añade estilos responsivos si es necesario */
@media (max-width: 768px) {
  .product-details {
    margin-left: 0;
  }
}

</style>