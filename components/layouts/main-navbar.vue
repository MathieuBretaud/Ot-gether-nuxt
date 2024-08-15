<script setup lang="ts">


</script>

<template>
  <div
      class="h-[10vh] fixed top-0 left-0 right-0 bg-red-500	 z-50"
  >

    <div class="container mx-auto flex items-center h-full justify-between">
      <NuxtLink to="/" class="flex items-center space-x-1">
        <NuxtImg src="/logo-otgether.png" width="200"/>
        <!--        <span class="text-2xl font-medium">Jira software</span>-->
      </NuxtLink>

      <div class="flex items-center space-x-2">
        <NuxtLink to="/test">
          <UButton color="red" variant="solid" size="xl"> Connexion</UButton>
        </NuxtLink>
        <NuxtLink to="/toto">
          <UButton color="red" variant="solid" size="xl"> Inscription</UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
