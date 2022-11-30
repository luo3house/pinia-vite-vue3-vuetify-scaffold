<template>
  <h4 class="text-h4">Hi, Pinia + Vite + Vue3 + Vuetify</h4>
  <strong class="text-bold">{{ greeting }}</strong>
  <div style="padding: 20px">
    <v-select :items="techs" label="Tech" v-model="tech" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTechStore } from './store';

const techs = ['vue', 'vuetify', 'vite', 'pinia', 'ts', 'js'];

// These are from Pinia docs https://pinia.vuejs.org/core-concepts/#using-the-store
const store = useTechStore();
const { tech, greeting } = storeToRefs(store);
const { changeTech } = store;
</script>
