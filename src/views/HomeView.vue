<template>
  <div>
    <div class="destinations-grid">
      <DestinationCard
        v-for="destination in filteredDestinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDestinationsStore } from "../stores/destinations";
import DestinationCard from "../components/DestinationCard.vue";

const destinationsStore = useDestinationsStore();
const { filteredDestinations } = storeToRefs(destinationsStore);

onMounted(() => {
  destinationsStore.fetchAllDestinations();
});
</script>

<style scoped></style>
