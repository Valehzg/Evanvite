<template>
    <header>
        <nav>
            <div class="nav-container">
                <div class="imagen-fondo">
                    <router-link :to="'/'">
                        <img src="./../../assets/evan.png" alt="Logotipo de tu tienda">
                    </router-link>
                </div>
                <ul>
                    <router-link to="/">Inicio</router-link>
                    <router-link to="/about">Nosotros</router-link>
                    <router-link to="/ubicacion">Ubicacion</router-link>
                    <router-link to="/registrate">Registrate</router-link>
                    <li>
                        <input type="text" placeholder="Buscar" id="search-input" @change="goToDress">
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToDress = () => {
    router.push('/comprar');
}
</script>

<style>
.imagen-fondo{
    height: 50px;
    width: 200px;
    margin-top: -15px;
}
.nav-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>