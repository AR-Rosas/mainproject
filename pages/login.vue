<template>
  <UContainer class="flex flex-col items-center justify-center min-h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold">Login</h1>
      </template>

      <UForm :state="formState" @submit="handleLogin">
        <UFormGroup label="Email" name="email">
          <UInput v-model="formState.email" type="email" placeholder="Enter your email" autocomplete="email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password" class="mt-4">
          <UInput v-model="formState.password" type="password" placeholder="Enter your password" autocomplete="current-password" required />
        </UFormGroup>

        <UButton type="submit" color="primary" class="mt-6 w-full" :loading="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-sm text-center">
          Don't have an account?
          <NuxtLink to="/register" class="text-primary hover:underline">Register</NuxtLink>
        </p>
      </template>
    </UCard>

    <UNotification v-if="error" :title="error" color="red" icon="i-heroicons-exclamation-circle" class="mt-4" :id="1" />
  </UContainer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { navigateTo } from 'nuxt/app'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const formState = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  if (!formState.email || !formState.password) {
    error.value = 'Email and password are required'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    })

    if (signInError) throw signInError

    // Ensure user state is updated
    await new Promise(resolve => setTimeout(resolve, 500))

    if (user.value) {
      navigateTo('/hub')
    } else {
      error.value = 'Login failed. Please try again.'
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An error occurred during login'
  } finally {
    loading.value = false
  }
}
</script>
