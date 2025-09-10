<!-- App.vue -->

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
import { RouterView } from "vue-router";

import { useColorMode } from "@vueuse/core";
import { UseScreenSafeArea } from '@vueuse/components';

useColorMode();
</script>

<template>
  <UseScreenSafeArea>
    <div id="app">
      <div class="flex flex-col h-screen relative p-5">
        <ClientOnly>
          <Toaster />
        </ClientOnly>
        
        <div class="h-full overflow-y-auto flex min-h-0 justify-center">
          <RouterView style="height: 100%" />
        </div>
      </div>
    </div>
  </UseScreenSafeArea>
</template>
