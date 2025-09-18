<script setup lang="ts">
import { page } from './shared';
</script>

<template>
  <div class="parent">
    <div class="inner-div">
      <Transition name="fade-slide" mode="out-in">
        <component v-if="page" :is="page.component" :key="page.name" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  overflow: hidden;
  min-height: 0;
  border-radius: 0.5rem;
}

.parent .inner-div {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.6s ease;
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