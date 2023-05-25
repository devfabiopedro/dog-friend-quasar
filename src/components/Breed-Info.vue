<template>
  <q-list bordered class="rounded-borders">
    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      icon="info"
      label="Informações"
      header-class="text-blue"
    >
      <q-card>
        <q-card-section>
          <p><span class="text-bold">Peso: </span>{{ peso }} lbs.</p>
          <p><span class="text-bold">Altura: </span> {{ altura }} ft.</p>
          <p><span class="text-bold">Criado para:</span> {{ criacao }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      icon="timelapse"
      label="Tempo de vida"
      header-class="text-green"
    >
      <q-card>
        <q-card-section>
          <p><span class="text-bold">Expectativa:</span> {{ vida }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      icon="pets"
      label="Temperamento"
      header-class="text-purple"
    >
      <q-card>
        <q-card-section>
          <p class="text-bold">{{ outros }}</p>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script setup>
defineProps({
  peso: String,
  altura: String,
  criacao: String,
  vida: String,
  outros: String,
});
</script>

<style scoped></style>
