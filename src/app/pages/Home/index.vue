<script setup lang="ts">
import { ref } from "vue"
import { toast } from 'vue-sonner'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import ThemeToggle from "@/components/ThemeToggle.vue";

const input = ref("Felix")
</script>

<template>
  <div
    class="h-full flex-col overflow-x-auto overflow-y-auto overflow-hidden flex flex-1 min-h-0 rounded-lg bg-background"
  >
    <div class="flex justify-center items-center overflow-hidden w-full h-full">
      <div class="flex flex-col gap-2">
        <div class="flex justify-center text-2x1 mb-5 p-2 border rounded-lg">
            Welcome, {{ input }} to shadcn/vue.
        </div>
        <div class="flex flex-col gap-1">
            <Label for="prompt-input">Prompt</Label>
            <Input id="prompt-input" :placeholder="input" v-model="input" />
        </div>
        <div class="flex gap-2 w-full">
            <Button class="flex-1" @click="toast(`Hello, ${input}.`)">Click me</Button>
            <ThemeToggle />
        </div>
      </div>
    </div>
  </div>
</template>
