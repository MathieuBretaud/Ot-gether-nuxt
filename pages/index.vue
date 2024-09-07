<template>
  <UContainer>
    <main>
      <!-- HERO SECTION -->
      <section
          class="flex flex-col sm:flex-row sm:h-[100vh] items-center h-[90vh] gap-4"
      >
        <div class="flex flex-col space-y-3">
          <h1 class="text-l lg:text-xl text-center text-navyBlue mb-6">
            Des évenements pour partager de bons moments.
          </h1>
          <p class="text-lg opacity-80">
            Quels que soient tes centres d'intérêts,
            crée ou rejoins un événement sur Ot'gether.
            Viens découvrir les événements proches de chez toi. C'est gratuit !
          </p>
        </div>
        <NuxtImg src="/image-hero.jpg" sizes="100vw sm:50vw md:800px"/>
      </section>

      <section v-if="data" class="my-6">
        <h2 class="text-l lg:text-l text-center text-navyBlue mb-6">Les derniers évènements</h2>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-7">
          <template v-for="event in data.data" :key="event.id">
            <LastLandingCard :event="event"/>
          </template>
        </div>
      </section>

      <section class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-7">
        <UCard class="bg-gradientOrangePink hover:bg-gradientOrangePinkHover">
          <h2 class="text-m text-white mb-4">Découvrez toutes les catégories d'évènements !</h2>
        </UCard>

        <LandingCard/>
        <LandingCard/>
        <LandingCard/>
        <LandingCard/>
        <LandingCard/>
      </section>
    </main>
  </UContainer>

</template>
<script setup lang="ts">
// onMounted(async () => {

import LastLandingCard from "~/components/landing/LastLandingCard.vue";

const {data, status, error, refresh, clear} = await useFetch('/api/events/last', {
  method: 'GET',
})
console.log(data.value.data)

// })


</script>
