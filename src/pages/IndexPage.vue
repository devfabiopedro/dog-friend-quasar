<template>
  <q-page class="row items-center justify-evenly">
    <pre>
      {{ breeds }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { useApi } from 'src/composables/api';
import { onMounted, ref } from 'vue';
import { BreedResult } from 'src/types/api';

const api = useApi();
const breeds = ref<BreedResult>();

onMounted(async () => {
  const { data } = await api.get('/breeds');
  breeds.value = data;
});
</script>
