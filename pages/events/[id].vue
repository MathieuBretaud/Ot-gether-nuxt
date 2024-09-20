<script setup lang="ts">

import type {EventResponse, EventType} from "~/types";

const route = useRoute();
const {data, pending, error} = useFetch<EventResponse>(`/api/events/${route.params.id}`);

// const event =ref()
</script>

<template>
  <UContainer>
    <div v-if="data" class="flex mt-6">
      <NuxtImg :src="data.data.image_url" width="400" height="300" fill/>
      <div>
        <h1>{{ data.data.title }}</h1>
        <p>{{ data.data.description }}</p>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
