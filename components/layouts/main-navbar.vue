<script setup lang="ts">

import RegistrationModal from "~/components/auth/RegistrationModal.vue";

const isOpen = ref(false)

</script>

<template>
  <div
      class="bg-red-500	 z-50 content-center"
  >
    <UContainer>
      <div class="mx-auto flex items-center h-full justify-between">
        <NuxtLink to="/" class="flex items-center space-x-1">
          <NuxtImg src="/logo-otgether.png" class="h-12"/>
        </NuxtLink>
        <NuxtLink to="/events">
          <UButton color="red" variant="solid" size="xl">Nos évènements</UButton>
        </NuxtLink>
        <div class="flex items-center space-x-2">
          <NuxtLink to="/">
            <UButton @click="isOpen = true" color="red" variant="solid" size="xl"> Connexion</UButton>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
  <RegistrationModal v-model="isOpen" />
</template>
