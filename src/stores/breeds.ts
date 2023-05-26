import { defineStore } from 'pinia';
import { BreedResult, Breed } from 'src/types/api';
import { ref } from 'vue';

export const useBreedStore = defineStore('breeds', () => {
  const breed = ref<Breed[]>([]);

  async function fetch(this: BreedStore) {
    const { data } = await this.api.get<BreedResult>('/breeds');
    breed.value = data;
  }
  return {
    breed,
    fetch,
  };
});

export type BreedStore = ReturnType<typeof useBreedStore>;
