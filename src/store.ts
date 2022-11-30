import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTechStore = defineStore('toolchain', () => {
  const tech = ref('vue');
  const greeting = computed(() => `I am using ${tech.value}`);
  function changeTech(value) {
    tech.value = value;
  }
  return { tech, greeting, changeTech };
});
