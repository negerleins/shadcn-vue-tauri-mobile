<script setup lang="ts">
import { markRaw, ref } from "vue"
import { toast, Template } from '@/components/ui/sonner'
import { select } from "../shared.ts"

import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ThemeToggle.vue";

const input = ref("Klement")
const counter = ref(0)
</script>

<template>
    <div class="parent">
        <div class="inner-div">
            <div class="child">
                <div class="h1">
                    <span class="break-words">Welcome, {{ input }} to shadcn/vue.</span>
                </div>

                <div class="items">
                    <Input class="input" :placeholder="input" v-model="input" />

                    <div class="buttons">
                        <Button @click="() => select('Intro')" variant="outline">
                            <Icon icon="line-md:arrow-left" />
                        </Button>

                        <Button class="flex-1" @click="() => {
                            toast(`Hello, ${input}.`, {
                                position: 'top-center',
                                component: markRaw(Template),
                            })
                        }">
                            <Icon icon="game-icons:butter-toast" />
                            I'm toast
                        </Button>

                        <Button @click="counter++" variant="secondary">
                            {{ counter }}
                        </Button>

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.parent {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
    overflow: hidden;
    min-height: 0;
}

.parent .inner-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.parent .inner-div .child {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    align-items: center;
}

.parent .inner-div .child .h1 {
    display: flex;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
}

.parent .inner-div .child .items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.parent .inner-div .child .items .input {
    display: flex;
}

.parent .inner-div .child .items .buttons {
    display: flex;
    flex: 1;
    margin-top: 0.5rem;
    gap: 0.5rem;
}
</style>