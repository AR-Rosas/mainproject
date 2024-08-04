<template>
  <UContainer>
    <footer class="py-8 mt-16 border-t">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex items-center gap-4">
          <UIcon name="i-heroicons-document-text" class="w-8 h-8" />
          <span class="text-xl font-semibold">My Content Site</span>
        </div>
        <nav>
          <ul class="flex gap-6">
            <li><ULink to="/">Home</ULink></li>
            <li><ULink to="/about">About</ULink></li>
            <li><ULink to="/blog">Blog</ULink></li>
          </ul>
        </nav>
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} My Content Site. All rights reserved.
        </div>
      </div>
    </footer>
  </UContainer>
</template>

<script lang="ts" setup>
// No additional setup needed
</script>