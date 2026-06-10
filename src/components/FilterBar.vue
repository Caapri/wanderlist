<template>
  <section class="filter-bar">
    <div class="search-wrapper">
      <IconSearch size="16" />
      <input
        type="search"
        placeholder="Busca destinos..."
        @input="filtersStore.setSearch($event.target.value)"
      />
    </div>
    <ul>
      <li v-for="(filter, index) in filters" :key="index">
        <button
          :class="{
            active:
              filter.type === 'rating'
                ? onlyTopRated
                : continent === filter.value && !onlyTopRated,
          }"
          @click="handleFilterClick(filter)"
        >
          <component :is="filter.icon" size="16" />
          {{ filter.label }}
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { IconSearch, IconWorld, IconMapPin, IconStar } from "@tabler/icons-vue";
import { useFiltersStore } from "../stores/filters";
import { storeToRefs } from "pinia";

const filtersStore = useFiltersStore();
const { continent, onlyTopRated } = storeToRefs(filtersStore);
const filters = [
  {
    label: "Todos",
    icon: IconWorld,
    value: "",
    type: "continent",
  },
  {
    label: "Asia",
    icon: IconMapPin,
    value: "Asia",
    type: "continent",
  },
  {
    label: "Europa",
    icon: IconMapPin,
    value: "Europe",
    type: "continent",
  },
  {
    label: "América",
    icon: IconMapPin,
    value: "America",
    type: "continent",
  },
  {
    label: "Australia",
    icon: IconMapPin,
    value: "Australia",
    type: "continent",
  },
  {
    label: "África",
    icon: IconMapPin,
    value: "Africa",
    type: "continent",
  },
  {
    label: "4+ estrellas",
    icon: IconStar,
    value: "4+ estrellas",
    type: "rating",
  },
];

const handleFilterClick = (filter) => {
  filtersStore.resetFilters();
  filter.type === "continent"
    ? filtersStore.setContinent(filter.value)
    : filtersStore.setOnlyTopRated(true);
};
</script>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  justify-content: space-around;

  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      left: 0.5rem;
    }

    input {
      padding: 0.5rem 1.8rem;
      border: 1px solid var(--border-color);
      border-radius: 20px;
      background-color: var(--bg-color);
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li > button {
      background: none;
      border: 1px solid var(--border-color);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }

    li > button.active {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
  }
}
</style>
