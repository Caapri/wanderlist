<template>
  <div class="destination-details-container" v-if="destination">
    <div class="hero-image">
      <img :src="destination.image" :alt="destination.name" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>{{ destination.name }}</h1>
        <div class="destination-country">
          <IconMapPin size="16" />
          {{ destination.country }}
        </div>
      </div>
    </div>
    <div class="destination-details">
      <div class="description">
        <div class="section-label">Sobre este destino</div>
        <p>{{ destination.description }}</p>
      </div>
      <div class="additional-information">
        <div class="section-label">Información</div>
        <div class="item">
          <div class="icon">
            <IconWorld size="16" color="grey" />
          </div>
          <div class="item-content">
            <span class="item-label">Continente</span>
            <ContinentBadge :continent="destination.continent" />
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <IconStar size="16" color="grey" />
          </div>
          <div class="item-content">
            <span class="item-label">Valoración</span>
            <span>{{ destination.rating }}</span>
          </div>
        </div>
        <div class="item">
          <span>MAPA</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDestinationsStore } from "../stores/destinations";
import { IconMapPin, IconWorld, IconStar } from "@tabler/icons-vue";
import ContinentBadge from "../components/ui/ContinentBadge.vue";

const route = useRoute();
const destinationsStore = useDestinationsStore();
const id = route.params.id;
const destination = ref(null);

onMounted(async () => {
  if (!destinationsStore.destinations.length) {
    await destinationsStore.fetchAllDestinations();
  }

  destination.value = destinationsStore.destinations.find(
    (dest) => dest.id === Number(id),
  );
});
</script>

<style scoped>
.destination-details-container {
  display: flex;
  flex-direction: column;
  /* min-height: calc(
    100vh - 300px - 60px
  ); */
}

.hero-image {
  position: relative;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65) 0%,
      transparent 55%
    );
  }

  .hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px 32px;
    color: white;

    .destination-country {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}

.destination-details {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: var(--bg-color);

  .description {
    flex: 2;
    margin-right: 20px;
  }

  .additional-information {
    flex: 1;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    background-color: var(--surface-color);
    padding: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      padding-bottom: 10px;
      align-items: center;
      gap: 10px;

      .icon {
        padding: 10px;
        display: flex;
        border-radius: 10px;
        background-color: var(--bg-color);
      }

      .item-content {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .item-label {
          font-size: 13px;
          color: var(--text-muted-color);
        }
      }
    }

    .item:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  }
}

.section-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted-color);
}
</style>
