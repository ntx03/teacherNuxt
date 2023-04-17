export default defineNuxtRouteMiddleware((to, from) => {
  if (!process.server) {
    const token = localStorage.getItem('token');
    if (token) {
    } else {
      return navigateTo('/admin');
    }
  }
});
