<script setup lang="ts">
// const isOpen = ref(false)

const model = defineModel({type: Boolean})
import ConnexionPage from '~/pages/auth/connexion.vue'
import RegistrationPage from '~/pages/auth/registration.vue'

const selectPage = shallowRef(ConnexionPage)
// const connexion = ref(true)
// const registration = ref(false)
const currentPage = ref('connexion')
const switchPage = (page: any) => {
  selectPage.value = page === 'connexion' ? ConnexionPage : RegistrationPage
  currentPage.value = page
}
</script>


<template>
  <div>
    <UModal v-model="model">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="text-center mb-4">
            <h4 v-if="currentPage === 'connexion'" class="font-bold">Bienvenue !</h4>
            <h4 v-if="currentPage === 'registration'" class="font-bold">Inscrivez-vous en un clic !</h4>
          </div>
          <div class="flex gap-4 items-center justify-center">
            <UButton @click="switchPage('connexion')" color="black" variant="link">Se connecter</UButton>
            <UButton @click="switchPage('registration')" color="black" variant="link">Créer un compte</UButton>
          </div>
        </template>
        <KeepAlive>
          <component :is="selectPage"/>
        </KeepAlive>
      </UCard>
    </UModal>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>/
