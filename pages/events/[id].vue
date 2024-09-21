<script setup lang="ts">

import type {EventResponse, EventType} from "~/types";
import {formatDate} from "~/helpers";

const route = useRoute();
const {data, pending, error} = useFetch<EventResponse>(`/api/events/${route.params.id}`);

// const event =ref()
</script>

<template>
  <UContainer>
    <div v-if="data" class="my-6 flex justify-center items-center bg-gradientBg p-6 text-navyBlue">
      <div class="flex flex-col">
        <h1 class="text-m lg:text-l text-center">{{ data.data.title }}</h1>
        <p>{{ data.data.description }}</p>
        <div class="flex flex-col ">
          <strong>Participants {{ data.data.participants_count }} / {{ data.data.participant_max }}</strong>
          <p>{{ data.data.category }}</p>
          <p>Début de l'événement : {{ formatDate(data.data.start_date) }}</p>
        </div>
      </div>
      <div class="ml-4">
        <NuxtImg :src="data.data.image_url" width="400" height="300" fill/>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
