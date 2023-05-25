<template>
  <q-checkbox
    v-model="val"
    checked-icon="favorite"
    unchecked-icon="favorite_border"
    color="red"
  />

  <q-btn flat round color="primary" icon="share" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

const val = ref(false);
const liked = useLocalStorage('liked-' + props.id, false);

defineProps({
  dog_id: number,
});
</script>

<style scoped></style>
