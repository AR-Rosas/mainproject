<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">User Profile</h1>
    <div v-if="loading" class="text-center">
      <p>Loading user data...</p>
    </div>
    <div v-else-if="error" class="text-red-500">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else-if="userData">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <p id="username" class="text-gray-900">{{ userData.username }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <p id="email" class="text-gray-900">{{ userData.email }}</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="fullName">
            Full Name
          </label>
          <p id="fullName" class="text-gray-900">{{ userData.fullName }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>No user data found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSupabaseClient } from '#imports'

const route = useRoute()
const supabase = useSupabaseClient()

const userData = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  const userId = route.params.userid as string
  console.log('User ID from route:', userId)

  if (!userId) {
    error.value = 'User ID is missing from the route'
    loading.value = false
    return
  }

  try {
    const { data, error: fetchError } = await supabase
      .from('users')
      .select('username, email, full_name')
      .eq('id', userId)
      .single()

    if (fetchError) throw fetchError

    if (!data) {
      throw new Error('No user data found')
    }

    console.log('Fetched user data:', data)

    userData.value = {
      username: data.username,
      email: data.email,
      fullName: data.full_name
    }
  } catch (e) {
    console.error('Error fetching user data:', e)
    error.value = e instanceof Error ? e.message : 'An error occurred while fetching user data'
  } finally {
    loading.value = false
  }
})
</script>