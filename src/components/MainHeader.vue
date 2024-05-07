<template>
  <header class="flex justify-between py-4 px-4">
    <div class="flex items-center">
      <RouterLink to="/" class="flex items-center">
        <img alt="logo" src="@/../public/logo.png" class="max-w-8 max-h-8" />
      </RouterLink>
      <nav class="flex items-center justify-between gap-8 ml-12 text-sm">
        <RouterLink to="/" class="font-eUkraine-regular">Home</RouterLink>
        <RouterLink to="/about" class="font-eUkraine-regular">About</RouterLink>
      </nav>
    </div>

    <div class="flex gap-2">
      <RouterLink to="/" class="icon-link">
        <UserCircleIcon class="size-6" />
      </RouterLink>
      <RouterLink to="/" class="icon-link">
        <ShoppingBagIcon class="size-6" />
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.icon-link {
  @apply w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-200 transition-all;
}
</style>
