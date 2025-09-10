<script setup lang="ts">
import { Icon } from "@iconify/vue";

const randomIcon = [
    "svg-spinners:bouncing-ball",
    "svg-spinners:3-dots-rotate",
    "svg-spinners:blocks-shuffle-2",
    "svg-spinners:gooey-balls-1",
    "svg-spinners:pulse-rings-2",
    "svg-spinners:blocks-scale",
    "svg-spinners:clock",
    "svg-spinners:6-dots-scale-middle",
    "svg-spinners:3-dots-scale",
    "line-md:upload-loop",
]
</script>

<template>
    <div class="flex p-4 pr-5 pl-5 bg-background border w-[350px] rounded-lg">
        <div class="flex gap-4 items-center select-none">
            <Icon :icon="randomIcon[Math.floor(Math.random() * randomIcon.length)]" class="text-2xl" />
            I'm a custom toast template!
        </div>
    </div>
</template>