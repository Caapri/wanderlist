import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("filters", () => {
  const continent = ref("");
  const search = ref("");
  const onlyTopRated = ref(false);

  const setContinent = (value) => {
    continent.value = value;
  };

  const setSearch = (value) => {
    search.value = value;
  };

  const setOnlyTopRated = (value) => {
    onlyTopRated.value = value;
  };

  const resetFilters = () => {
    continent.value = "";
    search.value = "";
    onlyTopRated.value = false;
  };

  return {
    continent,
    search,
    onlyTopRated,
    setContinent,
    setSearch,
    setOnlyTopRated,
    resetFilters,
  };
});
