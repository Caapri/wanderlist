<template>
  <FilterBar />
  <div class="home-layout">
    <div class="destinations-container">
      <DestinationCard
        v-for="destination in filteredDestinations"
        :key="destination.id"
        :destination="destination"
      />
      <p v-if="filteredDestinations.length === 0">
        No se encontraron destinos que coincidan con los filtros aplicados.
      </p>
    </div>
    <div class="map-container">
      <MapView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDestinationsStore } from "../stores/destinations";
import FilterBar from "../components/FilterBar.vue";
import DestinationCard from "../components/DestinationCard.vue";
import MapView from "../components/map/MapView.vue";

const destinationsStore = useDestinationsStore();
const { filteredDestinations } = storeToRefs(destinationsStore);

onMounted(() => {
  destinationsStore.fetchAllDestinations();
});
</script>

<style scoped>
.home-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: calc(100vh - 200px);
  gap: 20px;
  padding: 20px;
}

.destinations-container {
  overflow-y: auto;
  height: 100%;
}

.map-container {
  height: 100%;
}
</style>
