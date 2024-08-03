<!-- This script block sets up the Vue component with TypeScript -->
<script setup lang="ts">
// You can add any app-wide setup logic here if needed
</script>

<!-- This template block defines the structure of the component -->
<template>
  <NuxtLayout name="mainlayout">
    <div class="h-screen bg-white">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<!-- This style block contains global CSS for the app -->
<style>
body {
  font-family: 'IBM Plex Mono', monospace;
}
</style>