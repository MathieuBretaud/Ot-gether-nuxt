<script setup lang="ts">
const login = ref()
const password = ref()
</script>

<template>
  <div>
    <span class="text-navyBlue">Adresse email</span>
    <UInput color="red" v-model="login"/>
  </div>
  <div class="mt-6">
    <span class="text-navyBlue">Mot de passe</span>
    <UInput color="red" v-model="password"/>
  </div>
<!--  <template #footer>-->
    <div class="mt-6">
      <UButton color="red" block label="Se connecter"/>
    </div>
<!--  </template>-->

</template>

<style scoped>

</style>
