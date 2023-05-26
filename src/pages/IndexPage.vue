<template>
  <q-page-container>
    <q-page>
      <div class="row q-col-gutter-md q-pa-md">
        <div
          class="col col-xs-12 col-sm-4 col-md-3 col-lg-2"
          v-for="dog in breed"
          :key="dog.reference_image_id"
        >
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6 text-center">{{ dog.name }}</div>
            </q-card-section>
            <q-card-section>
              <q-img
                class="rounded-borders"
                :src="dog.image.url"
                :ratio="4 / 3"
                :fit="'scale-down'"
                :alt="dog.name"
                :spinner-color="'primary'"
              ></q-img>
            </q-card-section>

            <BreedInfo
              class="q-py-sm"
              :peso="dog.height.metric"
              :altura="dog.weight.metric"
              :criacao="dog.bred_for"
              :vida="dog.life_span"
              :outros="dog.temperament"
            />

            <q-separator />

            <q-card-actions class="justify-around q-px-sm bg-grey-3">
              <BreedLike :dog_id="dog.id" :key="dog.reference_image_id" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
import BreedInfo from '../components/Breed-Info.vue';
import BreedLike from '../components/Breed-Like.vue';
import { onMounted } from 'vue';
import { useBreedStore } from 'src/stores/breeds';
import { storeToRefs } from 'pinia';

const breedStore = useBreedStore();
const { breed } = storeToRefs(breedStore);

onMounted(async () => {
  await breedStore.fetch();
});
</script>
