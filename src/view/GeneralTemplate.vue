<script setup>
import navbar from './../components/reutilisables/navbar.vue'
</script>

<template>
    <navbar />
    <div class="flex-cex flol items-center justify-center">
		<router-view />
  	</div>
</template>
