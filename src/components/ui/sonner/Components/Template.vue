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

const randomText = [
    "I'm a custom toast template!",
    "Here's another custom toast!",
    "This is a cool toast message!",
    "Vue Sonner makes toasts easy!",
    "Custom toasts for the win!",
    "Toast messages made simple!",
    "Enjoy your custom toast!",
    "Toasting with style!",
    "A toast a day keeps the worries away!",
    "Cheers to custom toasts!",
    "Toast like a pro!",
    "Stay awesome with toasts!",
    "Toasts are the best!",
    "Make every toast count!",
    "Toast your way!",
]

</script>

<template>
    <div class="toast">
        <div class="image">
            <Icon :icon="randomIcon[Math.floor(Math.random() * randomIcon.length)]" class="icon" />
        </div>
        <div class="content">
            {{ randomText[Math.floor(Math.random() * randomText.length)] }}
        </div>
    </div>
</template>

<style>
.toast {
    display: flex;
    width: 350px;
    gap: 0.5rem;
    justify-content: center;
}

.toast .image {
    display: flex;
    user-select: none;
    background-color: var(--background);
    border: 1px solid var(--border);
    padding: 1.25rem;
    border-radius: 0.5rem;
    height: 65px;
}

.toast .icon {
    font-size: 1.5rem;
}

.toast .content {
    display: flex;
    user-select: none;
    background-color: var(--background);
    border: 1px solid var(--border);
    padding: 1.25rem;
    border-radius: 0.5rem;
}
</style>