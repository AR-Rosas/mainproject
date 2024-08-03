export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/content/') && !to.meta.layout) {
    to.meta.layout = 'markdown'
  }
})