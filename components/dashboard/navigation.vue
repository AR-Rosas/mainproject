<template>
  <div ref="headerRef" class="fixed top-0 w-full z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-0.5 bg-transparent backdrop-blur">
      <nav class="flex items-center justify-between">
        <ul class="flex items-center">
          <li v-for="item in navItems" :key="item.path" class="relative">
            <UTooltip :text="item.label">
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
        <UTooltip v-if="user" text="Logout">
          <UButton
            @click="handleLogout"
            icon="i-solar-logout-3-outline"
            color="red"
            variant="ghost"
            class="px-3 py-2 sm:text-base text-lg"
          />
        </UTooltip>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseUser, useSupabaseClient } from '#imports'
import { useRouter } from 'vue-router'

const user = useSupabaseUser()
const router = useRouter()
const supabase = useSupabaseClient()

const navItems = [
  { path: "/", icon: "i-solar-home-smile-outline", label: "Home" },
  { path: "/profile", icon: "i-solar-user-outline", label: "Profile" },
  { path: "/bookmarks", icon: "i-solar-bookmark-linear", label: "Bookmarks" },
  { path: "/earnings", icon: "i-solar-dollar-outline", label: "Earnings" },
  { path: "/settings", icon: "i-solar-settings-outline", label: "Settings" },
];

const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    router.push('/')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
</script>