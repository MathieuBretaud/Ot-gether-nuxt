<template>
  <!--  <UCard-->
  <!--      :style="{ backgroundImage: `url(${event.category.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }">-->
  <UCard :ui="{ header: { padding: 0} }">
    <template #header>
      <NuxtImg :src="event.category.image_url" width="400" height="300" />

    </template>
    <h3 class="text-s mb-4 text-gray">{{ event.title }}</h3>
    <div class="text-body-m text-gray mb-6">
      {{ event.description }}
    </div>
    <template #footer>
      <div class="text-body-m text-gray mb-6">
        {{ event.category.name }}
      </div>
      <UButton>Button</UButton>
    </template>
  </UCard>
</template>
<script setup lang="ts">
defineProps<{
  event: any
}>()
</script>

