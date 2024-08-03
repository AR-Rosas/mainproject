<template>
  <UContainer class="flex flex-col items-center justify-center min-h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold">Register</h1>
      </template>

      <UForm :state="formState" @submit="handleSignUp">
        <UFormGroup label="Email" name="email">
          <UInput v-model="formState.email" type="email" placeholder="Enter your email" autocomplete="email" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password" class="mt-4">
          <UInput v-model="formState.password" type="password" placeholder="Enter your password" autocomplete="new-password" required />
        </UFormGroup>

        <UButton type="submit" color="primary" class="mt-6 w-full" :loading="loading">
          {{ loading ? 'Registering...' : 'Sign Up' }}
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-sm text-center">
          Already have an account?
          <NuxtLink to="/login" class="text-primary hover:underline">Login</NuxtLink>
        </p>
      </template>
    </UCard>

    <UNotification v-if="error" :title="error" color="red" icon="i-heroicons-exclamation-circle" class="mt-4" :id="1" />
  </UContainer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useSupabaseClient } from '#imports'
import { navigateTo } from 'nuxt/app'

const supabase = useSupabaseClient()

const formState = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleSignUp = async () => {
  if (!formState.email || !formState.password) {
    error.value = 'Email and password are required'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const { error: signUpError } = await supabase.auth.signUp({
      email: formState.email,
      password: formState.password,
    })

    if (signUpError) {
      throw signUpError
    }

    navigateTo('/auth/confirm')
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unexpected error occurred. Please try again.'
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>
