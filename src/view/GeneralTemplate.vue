<script setup>
import navbar from './../components/reutilisables/navbar.vue'
</script>

<template>
    <navbar />
    <div>
        <div class="imagen-fondo">
            <img src="./../assets/fondo1.png" />
        </div>
        <router-view />
    </div>
</template>

<style>
.imagen-fondo{
    position: fixed;
    z-index: -1;
    opacity: 0.3;
}
</style>

