<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Page title -->
    <h1 class="text-2xl font-bold mb-4">Confirm Your Email</h1>

    <!-- Display message based on confirmation status -->
    <p v-if="!confirmed" class="text-center mb-4">
      Please check your email for a confirmation link. Click the button below once you've confirmed your email.
    </p>
    <p v-else class="text-center mb-4 text-green-600">
      Your email has been confirmed successfully!
    </p>

    <!-- Button to check confirmation or go home -->
    <UButton v-if="!confirmed" @click="checkConfirmation" :disabled="loading">
      {{ loading ? 'Checking...' : "I've confirmed my email" }}
    </UButton>
    <NuxtLink v-else to="/" class="mt-4">
      <UButton>Go to Home</UButton>
    </NuxtLink>

    <!-- Error message display -->
    <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>

    <!-- Link back to login page -->
    <NuxtLink to="/login" class="mt-4 text-blue-500 hover:underline">Back to Login</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSupabaseClient } from '#imports'

// Initialize Supabase client
const supabase = useSupabaseClient()

// Create reactive references for component state
const loading = ref(false) // Indicates whether a confirmation check is in progress
const confirmed = ref(false) // Indicates whether the email has been confirmed
const error = ref('') // Stores any error messages

// Define the function to check email confirmation status
const checkConfirmation = async () => {
  loading.value = true // Set loading state to true when check starts
  error.value = '' // Clear any previous error messages

  try {
    // Attempt to get the current user's data
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    // If there's an error fetching user data, throw it
    if (userError) throw userError

    // Check if the user's email has been confirmed
    if (user?.email_confirmed_at) {
      confirmed.value = true // Set confirmed to true if email is confirmed
    } else {
      // Set error message if email is not confirmed
      error.value = 'Your email has not been confirmed yet. Please check your inbox and click the confirmation link.'
    }
  } catch (e) {
    // Handle any errors that occur during the confirmation check
    error.value = e instanceof Error ? e.message : 'An error occurred while checking your email confirmation.'
  } finally {
    // Reset loading state regardless of success or failure
    loading.value = false
  }
}

// Automatically check confirmation status when the component is mounted
onMounted(() => {
  checkConfirmation()
})
</script>
