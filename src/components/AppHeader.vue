<template>
  <header class="app-header">
    <div>
      <IconMap2 size="32" color="var(--primary-color)" />
      Wanderlist
    </div>
    <nav>
      <router-link to="/">Explorar</router-link>
      <router-link to="/map">Mapa</router-link>
    </nav>
  </header>
</template>

<script setup>
import { IconMap2 } from "@tabler/icons-vue";
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
