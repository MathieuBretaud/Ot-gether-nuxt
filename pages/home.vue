<script setup lang="ts">
import LastLandingCard from "~/components/EventCard.vue";
import type {EventResponse, EventsResponse} from "~/types";

const page = ref(1);

const {data} = useFetch<EventsResponse>('/api/events/all', {
  method: 'GET',
  params: {
    page: page,
    watch: [page],
  },
});

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
      <h2 class="text-l lg:text-l text-center text-navyBlue mb-6">
        Les derniers évènements
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-7">
        <template v-if="data">
          <LastLandingCard v-for="event in data.data" :key="event.id" :event="event"/>
        </template>
      </div>
      <div class="flex justify-center">
        <UPagination
            v-if="data"
            :activeButton="{color: 'black'}"
            @update:modelValue="handlePageChange"
            v-model="page"
            :page-count="data.meta.per_page"
            :total="data.meta.total"
        />
      </div>
    </section>
  </UContainer>
</template>

<style scoped></style>
