<template>
  <!-- v-for="data in breed":key="data.reference_image_id" -->

  <div v-for="data in breed" :key="data.reference_image_id">
    <div class="card-body">
      <div class="card-title">
        {{ data.name }}
        <div class="card-title-sheet">criado para: {{ data.bred_for }}</div>
      </div>
      <div>
        <img :src="data.image.url" :alt="data.reference_image_id" />
      </div>
      <div class="card-brief">
        <ul>
          <li>Origem: {{ data.origin }}</li>
          <li>Temperamento: {{ data.temperament }}</li>
          <li>Peso: {{ data.weight.metric }} lb.</li>
          <li>Altura: {{ data.height.metric }} in.</li>
          <li>Tempo de vida: {{ data.life_span }}.</li>
        </ul>
      </div>
    </div>
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

<style scoped>
* {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;
  padding: 4px;
}

.card-body {
  width: 300px;
  background-color: #006dcc;
  border-radius: 12px;
}
.card-body img {
  border-radius: 12px 12px 0 0;
}
.card-title {
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
}

.card-title-sheet {
  font-size: 12px;
}
.card-brief {
  padding: 0;
  margin: 5px;
  background-color: #fff;
  border-radius: 12px;
}
.card-brief ul li {
  padding: 0;
}
</style>
