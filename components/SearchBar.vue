<script setup lang="ts">
const searchValue = ref('')
</script>

<template>
  <UInput color="red" variant="outline" placeholder="Search..."
          v-model="searchValue"/>
</template>

<style scoped>

</style>
