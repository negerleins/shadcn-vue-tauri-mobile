<script setup lang="ts">
import { markRaw, ref } from "vue"
import { toast, Template } from '@/components/ui/sonner'

import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import ThemeToggle from "@/components/ThemeToggle.vue";

const input = ref("Felix")
const counter = ref(0)
</script>

<template>
    <div class="h-full flex-col overflow-x-auto overflow-y-auto overflow-hidden flex flex-1 min-h-0 rounded-lg ">
        <div class="flex justify-center items-center overflow-hidden w-full h-full">
            <div class="flex flex-col gap-2 w-full items-center">
                <div class="flex text-xl mb-5 p-2 rounded-lg overflow-hidden">
                    <span class="break-words">Welcome, {{ input }} to shadcn/vue.</span>
                </div>
                <div class="flex flex-col gap-1">
                    <Input class="flex" id="prompt-input" :placeholder="input" v-model="input" />
                    <div class="flex flex-1 mt-2 gap-2">
                        <Button class="flex-1" @click="() => {
                            toast(`Hello, ${input}.`, {
                                position: 'top-center',
                                component: markRaw(Template),
                            })
                        }">
                            <Icon icon="game-icons:butter-toast" />
                            I'm toast
                        </Button>
                        <Button @click="() => {
                            counter += 1
                        }" variant="secondary">
                            {{ counter }}
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
