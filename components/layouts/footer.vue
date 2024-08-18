<script setup lang="ts">

</script>
<template>
  <div class="bg-red-500 text-center d-flex flex-column">
    <UContainer>
      <div class="pt-5 text-white">
        Ot'gether est un projet de groupe. Ce projet, nous permet de créer des
        événements autours de plusieurs thèmes, comme les jeux-vidéos ou encore
        des événements IRL (In Real Life) autour des sujets de votre choix. Le
        principe est de mettre en avant vos événements afin d'attirer des
        participants et ainsi rencontrer des personnes avec les mêmes centres
        d'intérêts.
      </div>
      <div
          class="my-4 flex justify-evenly "
      >
        <UButton color="red" variant="solid" size="xl" link="/" label="A propos"/>
        <UButton color="red" variant="solid" size="xl" link="/cgu" label="CGU"/>
        <UButton color="red" variant="solid" size="xl" link="/legal-notice" label="Mentions légales"/>
      </div>
      <div class="text-white pb-5">{{ new Date().getFullYear() }} — <strong>Ot'gether</strong></div>
    </UContainer>
  </div>
</template>