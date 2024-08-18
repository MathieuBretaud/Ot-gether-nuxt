<template>
  <UContainer>
    <main>
      <!-- HERO SECTION -->
      <section
          class="flex flex-col sm:flex-row sm:h-[100vh] items-center h-[90vh] pt-[5vh] gap-4"
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

      <!-- Tab section -->
      <section>
        <h1 class="text-4xl font-medium px-4">
          All from a single source of truth
        </h1>

      </section>

    </main>
  </UContainer>
</template>
<script setup lang="ts">
</script>