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
      <div class="view">
        <Toaster />
        
        <div class="router-div">
          <RouterView class="router-view" />
        </div>
      </div>
    </div>
  </UseScreenSafeArea>
</template>

<style>
#app .view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  padding: 1.25rem;
}

#app .router-div {
  height: 100%;
  overflow-y: auto;
  display: flex;
  min-height: 0;
  justify-content: center;
}

#app .router-view {
  height: 100%;
  width: 100%;
}
</style>