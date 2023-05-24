<!-- <template>
  <q-page class="flex-center">
    <q-table :rows="breed" />
  </q-page>
</template> -->
<template>
  <div class="q-pa-md row justify-between items-center q-gutter-md">
    <q-card class="my-card" v-for="data in breed" :key="data.id">
      <q-card-section class="bg-primary text-white">
        <q-img :src="data.image.url" alt="" />
        <div class="text-subtitle2">{{ data.name }}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
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
