<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";
import type {EventsResponse} from "~/types";
import {useCategoryList} from "~/composables/useCategoryList";

const {categories} = useCategoryList();
const selectCategory = ref()
console.log(selectCategory.value)
const page = ref(1);
const {data: events} = useFetch<EventsResponse>('/api/events/all', {
  method: 'GET',
  params: {
    page: page,
    watch: [page],
  },
});
const searchEvent = ref('');

watch(selectCategory, (newValue) => {
  selectCategory.value = newValue
})

const filteredEvents = computed(() => {
  if (events.value) {
    if (searchEvent) {
    const searchValue = searchEvent.value.toLocaleLowerCase().trim();
      return events.value.data.filter((event) => {
        return event.title
            .toLocaleLowerCase()
            .includes(searchValue);
      })
    }
    if (selectCategory.value) {
      return events.value.data.filter((event) => {
        console.log(selectCategory.value)
        return event.category === selectCategory.value
      })
    }
    // return events.value.data
  }
})

const totalPageUpdate = computed(() => {
  if (searchEvent.value !== '') {
    console.log(searchEvent.value);
    return filteredEvents.value!.length / events.value!.meta.per_page
  } else {
    return events.value!.meta.total
  }
})


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
        <template v-if="filteredEvents?.length">
          <EventCard v-for="event in filteredEvents" :key="event.id" :event="event"/>
        </template>
      </div>
      <div class="flex justify-center">
        <UPagination
            v-if="events"
            :activeButton="{color: 'black'}"
            @update:modelValue="handlePageChange"
            v-model="page"
            :page-count="events.meta.per_page"
            :total="totalPageUpdate"
        />
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
