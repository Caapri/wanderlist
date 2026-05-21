<template>
  <div class="destination-card">
    <img :src="destination.image" :alt="destination.name" />
    <div class="content">
      <h3>{{ destination.name }}</h3>
      <div class="country">
        <IconMapPin size="16" />
        {{ destination.country }}
        <span
          class="continent-badge"
          :style="{ backgroundColor: continentColors[destination.continent] }"
        >
          {{ destination.continent }}
        </span>
      </div>
      <div class="rating">
        <IconStar
          size="16"
          v-for="(_, i) in 5"
          :key="i"
          :style="{
            color: i < Math.floor(destination.rating) ? 'gold' : 'lightgray',
          }"
        />
        {{ destination.rating }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconMapPin, IconStar } from "@tabler/icons-vue";

const props = defineProps({
  destination: {
    type: Object,
    required: true,
  },
});

const continentColors = {
  Asia: "#1D9E75",
  Europe: "#534AB7",
  America: "#50C878",
  Africa: "#993C1D",
  Australia: "#FF8C00",
};
</script>

<style scoped>
.destination-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  background-color: var(--surface-color);
  margin-top: 20px;

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .content {
    margin-left: 1rem;

    .country,
    .rating {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      margin-top: 0.5rem;
    }

    .country > .continent-badge {
      color: white;
      padding: 0.1rem 0.4rem;
      border-radius: 10px;
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
  }
}
</style>
