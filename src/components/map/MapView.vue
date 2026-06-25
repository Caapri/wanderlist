<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { storeToRefs } from "pinia";
import { useDestinationsStore } from "../../stores/destinations";

const destinationsStore = useDestinationsStore();
const { filteredDestinations } = storeToRefs(destinationsStore);
let map;
let markers = [];

const addMarkersToMap = () => {
  markers.forEach((marker) => {
    marker.remove();
  });
  markers = [];

  filteredDestinations.value.forEach((destination) => {
    if (destination.coordinates.latitude && destination.coordinates.longitude) {
      const marker = L.marker([
        destination.coordinates.latitude,
        destination.coordinates.longitude,
      ]).addTo(map);
      marker.bindPopup(
        `<b>${destination.name}</b><br>${destination.description}`,
      );
      markers.push(marker);
    }
  });
};

onMounted(() => {
  map = L.map("map").setView([20, 0], 2);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  addMarkersToMap();
});

watch(filteredDestinations, () => {
  addMarkersToMap();
});
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
