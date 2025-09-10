<script setup lang="ts">
import { page } from './shared';
</script>

<template>
  <div class="flex flex-1 flex-col h-full overflow-x-auto overflow-y-auto overflow-hidden min-h-0 rounded-lg">
    <div class=" overflow-hidden w-full h-full">
      <Transition name="fade-slide" mode="out-in">
        <component v-if="page" :is="page.component" :key="page.name" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.45s ease, transform 0.225s ease;
}

.fade-slide-enter-from,
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>