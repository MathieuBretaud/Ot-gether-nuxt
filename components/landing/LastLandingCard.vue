<template>
  <!--  <UCard-->
  <!--      :style="{ backgroundImage: `url(${event.category.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }">-->
  <UCard :ui="{ header: { padding: 0} }">
    <template #header>
      <NuxtImg :src="event.category.image_url" width="400" height="300"/>
    </template>

    <div class="h-56">
      <UBadge color="gray">{{ event.category.name }}</UBadge>
      <h3 class="text-s mb-4 text-gray mt-6">{{ event.title }}</h3>
      <div class="text-body-s text-gray mb-6">
        <p>
        Nombre de participants : {{ event.participants.length }} / {{ event.participant_max }}
        </p>
        <p>Début de l'événement : {{ formatDate(event.start_event) }}</p>
      </div>
    </div>
    <template #footer>
      <UButton>Detail</UButton>
    </template>
  </UCard>

</template>
<script setup lang="ts">
import {formatDate} from "~/helpers";

defineProps<{
  event: any
}>()
</script>

