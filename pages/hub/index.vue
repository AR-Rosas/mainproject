<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-4">Welcome to the Hub</h1>
    <p>This is a protected area for authenticated users.</p>
    <UButton @click="handleLogout" color="red" class="mt-4">Logout</UButton>
  </UContainer>
</template>

<script setup lang="ts">
import { useSupabaseClient } from '#imports'
import { useRouter } from 'vue-router'

const supabase = useSupabaseClient()
const router = useRouter()

const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}
</script>