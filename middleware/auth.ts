export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  // Log the middleware trigger and user authentication status
  console.log('Auth middleware triggered for path:', to.path);
  console.log('User authenticated:', !!user.value);

  // Require authentication for /hub routes
  if (to.path.startsWith('/hub/') && !user.value) {
    return navigateTo('/auth/login');
  }
});
