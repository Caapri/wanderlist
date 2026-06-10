import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFiltersStore } from "./filters";

export const useDestinationsStore = defineStore("destinations", () => {
  const destinations = ref([]);

  const setDestinations = (value) => {
    destinations.value = value;
  };

  async function fetchAllDestinations() {
    const data = await import("../data/destinations.json");
    setDestinations(data.default);
  }

  const filteredDestinations = computed(() => {
    const filtersStore = useFiltersStore();

    return destinations.value.filter((destination) => {
      const matchesContinent =
        !filtersStore.continent ||
        destination.continent === filtersStore.continent;
      const matchesSearch = filtersStore.search
        ? destination.name
            .toLowerCase()
            .includes(filtersStore.search.toLowerCase())
        : true;
      const matchesTopRated = filtersStore.onlyTopRated
        ? destination.rating >= 4
        : true;

      return matchesContinent && matchesSearch && matchesTopRated;
    });
  });

  return {
    destinations,
    setDestinations,
    fetchAllDestinations,
    filteredDestinations,
  };
});
