<template>
  <div class="flex flex-col min-h-screen">
    <DashboardNavigation />
    
    <!-- Main content area -->
    <div class="flex-grow">
      <!-- You can add other content here if needed -->
    </div>
    
    <!-- Bottom container -->
    <UContainer class="mt-auto py-2">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">Welcome to the Hub</h1>
        <p>Your User ID: {{ userId }}</p>
        
        <UButton
          @click="goToProfile"
          color="primary"
          class="mt-4 mr-4"
        >
          View Profile
        </UButton>

        <p class="text-xs mt-8">This is the most lower part with very small fonts.</p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import DashboardNavigation from '~/components/dashboard/navigation.vue'

const supabase = useSupabaseClient()
const router = useRouter()
const user = useSupabaseUser()

const userId = computed(() => user.value?.id || 'Not available')

const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Error during logout:', error)
  }
}

const goToProfile = () => {
  if (user.value?.id) {
    router.push(`/hub/profile/${user.value.id}`)
  } else {
    console.error('User ID not available')
    alert('Unable to access profile. User ID not available.')
  }
}
</script>