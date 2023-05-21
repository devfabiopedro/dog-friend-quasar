<template>
  <q-page class="row items-center justify-evenly">
    <q-table :rows="breed" style="max-width: 960px" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useBreedStore } from 'src/stores/breeds';
import { storeToRefs } from 'pinia';

const breedStore = useBreedStore();
const { breed } = storeToRefs(breedStore);

onMounted(async () => {
  await breedStore.fetch();
});
</script>
