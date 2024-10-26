<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";
import type {EventsResponse} from "~/types";
import {useCategoryList} from "~/composables/useCategoryList";

const {categories} = useCategoryList();
const selectCategory = ref()
const searchEvent = ref();

const page = ref(1);

const { data: events, refresh } = await useAsyncData<EventsResponse>(
    'events',
    () => $fetch('/api/events/all', {
      method: 'GET',
      params: {
        page: page.value,
        search: searchEvent.value,
        category: selectCategory.value,
      },
    }),
    {
      watch: [page, searchEvent, selectCategory],
    }
);

console.log(selectCategory.value)

const handlePageChange = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Défilement fluide
  })
};

</script>

<template>
  <UContainer>
    <section class="my-6">
      <h2 class="text-l lg:text-l text-center text-navyBlue mb-4">
        Les derniers évènements
      </h2>
      <!--      <SearchBar v-model="searchEvent" v-model:categories="categories"/>-->
      <SearchBar v-model="searchEvent"/>
      <SelectCategories v-model="selectCategory" :categories="categories"/>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-7 mt-6">
        <template v-if="events?.data.length">
          <EventCard v-for="event in events.data" :key="event.id" :event="event"/>
        </template>
      </div>
      <div class="flex justify-center">
        <UPagination
            v-if="events"
            :activeButton="{color: 'black'}"
            @update:modelValue="handlePageChange"
            v-model="page"
            :page-count="events.meta.per_page"
            :total="events.meta.total"
        />
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
