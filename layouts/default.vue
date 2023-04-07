<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header class="fixed top-0 z-10 w-full shadow-sm" />
    <div class="grow bg-black pt-24">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
