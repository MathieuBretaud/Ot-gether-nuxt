<script setup lang="ts">
import LastLandingCard from "~/components/landing/LastLandingCard.vue";

const page: any = ref(1)
const items: any = ref([])


const {data, status, error, refresh, clear} = await useFetch('/api/events/all', {
  method: 'GET',
})
items.value = data.value!.data;
page.value = data.value!.current_page
console.log(items.value)
</script>

<template>
  <UContainer>
    <section v-if="items" class="my-6">
      <h2 class="text-l lg:text-l text-center text-navyBlue mb-6">Les derniers évènements</h2>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-7">
        <template v-for="event in items" :key="event.id">
          <LastLandingCard :event="event"/>
        </template>
      </div>
    </section>

<!--    <UPagination v-model="page" :page-count="5" :total="items.length"/>-->
  </UContainer>
</template>

<style scoped>

</style>