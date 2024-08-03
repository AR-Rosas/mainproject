<script setup lang="ts">
// This script handles the callback after authentication

// Import necessary functions and composables
import { ref, onMounted } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'

// Get the current user
const user = useSupabaseUser()

// Create reactive references for error handling and loading state
const error = ref('') // Stores any error messages
const loading = ref(true) // Indicates whether the callback process is ongoing

// Execute this function when the component is mounted
onMounted(async () => {
  // Initialize Supabase client
  const supabase = useSupabaseClient()

  // Attempt to get the current session
  const { error: err } = await supabase.auth.getSession()

  // Handle the result of getSession
  if (err) {
    // If there's an error, store the error message
    error.value = err.message
  } else if (user.value) {
    // If there's a user, navigate to the hub page
    navigateTo('/hub')
  }

  // Set loading to false once the process is complete
  loading.value = false
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div v-if="loading" class="text-center">
      <p>Processing login...</p> <!-- Displayed while the callback process is ongoing -->
    </div>
    <div v-else-if="error" class="text-center">
      <h1 class="text-2xl font-bold mb-4 text-red-500">Login failed</h1> <!-- Displayed if there's an error -->
      <p>{{ error }}</p> <!-- Display the error message -->
      <NuxtLink to="/login" class="text-blue-500 hover:underline mt-4 block">Try Again</NuxtLink> <!-- Link to retry login -->
    </div>
  </div>
</template>