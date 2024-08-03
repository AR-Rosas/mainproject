<template>
  <div ref="headerRef" class="fixed top-0 w-full z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-0.5 bg-transparent backdrop-blur">
      <nav>
        <ul class="flex items-center justify-center">
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
        <UButton v-if="user" @click="handleLogout" color="red" variant="ghost" class="ml-4">Logout</UButton>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseUser } from '#imports'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const headerRef = ref(null);
const user = useSupabaseUser()
const router = useRouter()

const publicItems = [
  { path: "/", icon: "i-solar-home-smile-outline", label: "Home" },
  { path: "/projects", icon: "i-solar-folder-with-files-outline", label: "Projects" },
  { path: "/articles", icon: "i-solar-document-add-outline", label: "Articles" },
  { path: "/lab", icon: "i-heroicons-beaker", label: "Lab" },
  { path: "/whats-in-my-bag", icon: "i-solar-backpack-outline", label: "What's in my bag" },
  { path: "/bookmarks", icon: "i-solar-bookmark-linear", label: "Bookmarks" },
];

const privateItems = [
  { path: "/hub", icon: "i-solar-home-smile-outline", label: "Hub" },
];

const navItems = computed(() => user.value ? [...publicItems, ...privateItems] : publicItems);

const handleLogout = async () => {
  const supabase = useSupabaseClient()
  try {
    await supabase.auth.signOut()
    router.push('/')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
</script>