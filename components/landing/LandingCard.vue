<script lang="ts" setup>
type categoryType = {
  label: string;
  content: string;
}
defineProps<{
  category: categoryType
}>()
</script>
<template>
  <UCard :ui="{ header: { background: 'bg-gradientBg'} }">
    <template #header>
      <h3 class="text-s mb-4">{{category.label}}</h3>
    </template>

    <div class="text-body-m text-grey mb-6">
      {{category.content}}
    </div>
  </UCard>
</template>

