<script setup lang="ts">
const login = ref()
const pseudo = ref()
const password = ref()
</script>

<template>
  <div>
    <span class="text-navyBlue">Pseudo</span>
    <UInput color="red" v-model="pseudo"/>
  </div>
  <div>
    <span class="text-navyBlue">Email *</span>
    <UInput color="red" v-model="login"/>
  </div>
  <div class="mt-6">
    <span class="text-navyBlue">Mot de passe *</span>
    <UInput color="red" v-model="password"/>
  </div>
<!--  <template #footer>-->
    <div class="mt-6">
      <UButton color="red" block label="S'inscrire"/>
    </div>
<!--  </template>-->

</template>

<style scoped>

</style>
