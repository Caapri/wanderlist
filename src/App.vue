<template>
  <AppHeader />
  <FilterBar />
  <!-- TODO: make :destination prop dynamic -->
  <DestinationCard
    :destination="{
      id: 1,
      name: 'Kyoto',
      country: 'Japan',
      continent: 'Asia',
      description:
        'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It\'s also known for its formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha female entertainers often found in the Gion district.',
      rating: 4.8,
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
    }"
  />
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import FilterBar from "./components/FilterBar.vue";
import DestinationCard from "./components/DestinationCard.vue";
</script>

<style lang="scss" scoped></style>
