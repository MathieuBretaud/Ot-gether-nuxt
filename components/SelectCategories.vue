<script setup lang="ts">

defineProps(['categories'])
const model = defineModel<number>()

</script>

<template>
  <USelect placeholder="choisissez une catégorie" v-model="model" :options="categories" valueAttribute="id" option-attribute="name"/>
</template>

<style scoped>

</style>
