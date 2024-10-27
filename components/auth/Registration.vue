<script setup lang="ts">
// const isOpen = ref(false)
const model = defineModel({type: Boolean})
const login = ref()
const password = ref()
</script>

<template>
  <div>
    <UModal v-model="model">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h4 class="font-bold">Bienvenue !</h4>
          <span>Connexion</span>
        </template>

        <div>
          <span>Adresse email</span>
          <UInput v-model="login"/>
        </div>
        <div>
          <span>Mot de passe</span>
        <UInput v-model="password"/>
        </div>

        <template #footer>

          <UButton label="Se connecter"/>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

