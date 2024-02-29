<script setup>
import navbar from './../components/reutilisables/navbar.vue'
</script>

<template>
    <navbar />
    <div class="items-center justify-center">
		<router-view />
  	</div>
    <div class="footer">
      <p class="font-white">©</p>
      <p>© 2024 Evan.mx</p>
      <!-- link to instagram -->
      <div class="redes">
        <p>
          Redes sociales
        </p>
        <a href="https://www.instagram.com/evan.mxx/" target="_blank">
          <img src="./../assets/instagram.png" alt="instagram" class="footer-img">
        </a>
      </div>
    </div>
</template>

<style scoped>

flol{
  display: flex;
  flex-grow: initial;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  width: 100%;
}
.font-white{
  color: white;
}

.footer-img{
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: 0 10px;
}

.redes{
  display: flex;
  flex-direction: row;
}

.redes p{
  font-weight: bold;
}
</style>
