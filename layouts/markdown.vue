<template>
  <div class="markdown-layout">
    <Navigation />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.markdown-layout {
  max-width: 800px;
  margin: 0 auto;
}
</style>