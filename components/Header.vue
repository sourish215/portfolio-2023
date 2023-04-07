<script setup lang="ts"></script>

<template>
  <header class="max-w-[100vw]">
    <div class="flex h-24 flex-row items-center justify-end font-thin text-white md:px-12">
      <!-- <NuxtLink to="/">
        <p class="rounded-md border p-3 text-5xl font-extralight hover:bg-[#00dc81] hover:text-black">sb.</p>
      </NuxtLink> -->
      <div class="flex flex-row gap-x-12">
        <NuxtLink to="/">
          <p class="text-2xl hover:text-[#00dc81]">Home</p>
        </NuxtLink>
        <NuxtLink to="/projects">
          <p class="text-2xl hover:text-[#00dc81]">Projects</p>
        </NuxtLink>
        <NuxtLink to="/resume">
          <p class="text-2xl hover:text-[#00dc81]">Resume</p>
        </NuxtLink>
        <NuxtLink to="/about">
          <p class="text-2xl hover:text-[#00dc81]">About</p>
        </NuxtLink>
        <NuxtLink to="/contact">
          <p class="text-2xl hover:text-[#00dc81]">Contact</p>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
