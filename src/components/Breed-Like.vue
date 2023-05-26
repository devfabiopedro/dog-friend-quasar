<template>
  <q-checkbox
    v-model="liked"
    checked-icon="favorite"
    unchecked-icon="favorite_border"
    color="red"
  />

  <q-btn flat round color="primary" icon="share" />
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const props = defineProps({
  dog_id: Number,
});

const liked = useLocalStorage('breed-liked-' + props.dog_id, false);
</script>

<style scoped></style>
