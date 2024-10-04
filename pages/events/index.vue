<script setup lang="ts">
import EventCard from "~/components/EventCard.vue";
import type {EventsResponse} from "~/types";

const page = ref(1);

const {data} = useFetch<EventsResponse>('/api/events/all', {
  method: 'GET',
  params: {
    page: page,
    watch: [page],
  },
});
const searchEvent = ref('');

const filteredEvents = computed(() => {
  if (data.value) {
    const searchValue = searchEvent.value.toLocaleLowerCase().trim();
    return data.value.data.filter((event) => {
      return event.title
          .toLocaleLowerCase()
          .includes(searchValue);
    })
  }
})

const totalPageUpdate = computed(() => {
  if (searchEvent.value !== '') {
    console.log(searchEvent.value);
    return filteredEvents.value!.length / data.value!.meta.per_page
  } else {
    return data.value!.meta.total
  }
})

const showPaginator = computed(() => data.value!.data.length !== data.value!.meta.per_page)

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
      <SearchBar v-model="searchEvent"/>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-7 mt-6">
        <template v-if="filteredEvents?.length">
          <EventCard v-for="event in filteredEvents" :key="event.id" :event="event"/>
        </template>
      </div>
      <div class="flex justify-center">
        <UPagination
            v-if="data"
            :activeButton="{color: 'black'}"
            @update:modelValue="handlePageChange"
            v-model="page"
            :page-count="data.meta.per_page"
            :total="totalPageUpdate"
        />
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
