<template>
  <div ref="headerRef" class="fixed top-0 w-full z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-0.5 bg-transparent backdrop-blur">
      <nav>
        <ul class="flex items-center justify-center">
          <li v-for="item in menuItems" :key="item.path" class="relative">
            <UTooltip :text="item.name">
              <UButton
                :to="item.path"
                :icon="item.icon"
                color="gray"
                variant="ghost"
                class="px-3 py-2 sm:text-base text-lg"
                :class="{
                  'text-primary-600 dark:text-primary-400': $route.path === item.path
                }"
              />
            </UTooltip>
            <span
              v-if="$route.path === item.path"
              class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
            ></span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
const headerRef = ref(null);

const menuItems = [
  { name: 'Home', path: '/hub', icon: 'i-solar-home-smile-outline' },
  { name: 'Profile', path: '/hub/profile', icon: 'i-solar-user-outline' },
  { name: 'Bookmarks', path: '/hub/bookmarks', icon: 'i-solar-bookmark-linear' },
  { name: 'Earnings', path: '/hub/earnings', icon: 'i-solar-dollar-outline' },
  { name: 'Settings', path: '/hub/settings', icon: 'i-solar-settings-outline' },
  { name: 'Logout', path: '/logout', icon: 'i-solar-logout-outline' },
];
</script>