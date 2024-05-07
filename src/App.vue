<script setup>

import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <div class="container mx-auto">
    <MainHeader />
  </div>

  <RouterView />
</template>

<style scoped></style>
