// src/router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Hello from './components/HelloWorld.vue';  
import about from './components/about.vue';
import ubicacion from './components/ubicacion.vue';
import registrate from './components/login.vue';
// Importa otros componentes según sea necesario

const routes = [
  {
    path: '/',
    component: Hello,
    meta: { title: 'inicio' },
  },  
  {
    path: '/about',
    component: about,
    meta: { title: 'Aboutme' },
  },

  {
    path: '/ubicacion',
    component: ubicacion,
    meta: { title: 'Ubicacion' },
  },

  {
    path: '/registrate',
    component: registrate,
    meta: { title: 'registrate' },
  },
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
