<!-- App.vue -->

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

import { RouterView } from "vue-router";
import { useColorMode } from "@vueuse/core";
useColorMode();
</script>

<template>
  <div id="app" class>
    <div class="flex flex-col h-screen relative">
      <Toaster/>
      <!-- Router -->
      <div class="p-5 h-full overflow-y-auto flex min-h-0 justify-center">
        <RouterView style="height: 100%" />
      </div>
    </div>
  </div>
</template>
