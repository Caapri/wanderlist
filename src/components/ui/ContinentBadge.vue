<template>
  <span
    class="continent-badge"
    :style="{ backgroundColor: continentColors[continent] }"
  >
    {{ continent }}
  </span>
</template>

<script setup>
import { continentColors } from "../../utils/continentColors";

const props = defineProps({
  continent: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.continent-badge {
  color: white;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  font-size: 0.75rem;
  /* margin-left: 0.5rem; */
}
</style>
