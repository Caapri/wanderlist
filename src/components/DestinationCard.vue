<template>
  <div class="destination-card" @click="goToDestinationDetails">
    <img :src="destination.image" :alt="destination.name" />
    <div class="content">
      <h3>{{ destination.name }}</h3>
      <div class="location">
        <div class="country">
          <IconMapPin size="16" />
          {{ destination.country }}
        </div>
        <ContinentBadge :continent="destination.continent" />
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
import { useRouter } from "vue-router";
import ContinentBadge from "./ui/ContinentBadge.vue";

const router = useRouter();
const props = defineProps({
  destination: {
    type: Object,
    required: true,
  },
});

const goToDestinationDetails = () => {
  router.push({
    name: "Destination",
    params: { id: props.destination.id },
  });
};
</script>

<style scoped>
.destination-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  background-color: var(--surface-color);
  margin-top: 20px;
  cursor: pointer;

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .content {
    margin-left: 1rem;

    .location,
    .rating {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      margin-top: 0.5rem;
    }

    .country {
      margin-right: 5px;
    }
  }
}
</style>
