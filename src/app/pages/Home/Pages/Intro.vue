<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { select } from "../shared.ts";
import { themeMode } from "@/lib/shared";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

// themeMode is a Ref<string>; script needs .value, template unwraps automatically
function onCarouselValueChange(index: number) {
    (themeMode as any).value = themes[index].name.toLowerCase()
}

const themes = [
    { name: 'Light', propBackground: 'bg-white', propColor: 'bg-black' },
    { name: 'Dark', propBackground: 'bg-black', propColor: 'bg-white' },
    { name: 'Cosmic', propBackground: 'bg-[#0f0f1a]', propColor: 'bg-[#a48fff]' },
    { name: 'Breeze', propBackground: 'bg-[#0f172a]', propColor: 'bg-[#34d399]' },
    { name: 'Twitter', propBackground: 'bg-[#000000]', propColor: 'bg-[#1d9bf0]' },
    { name: 'Red', propBackground: 'bg-[#221d27]', propColor: 'bg-[#ef4444]' },
];


</script>

<template>
    <div class="parent">
        <div class="inner-div">
            <div class="child">
                <div class="h1">
                    <span class="break-words">Welcome to shadcn/vue.</span>
                </div>

                <Carousel class="carousel" snap="snap-mandatory" align="center" @value-change="onCarouselValueChange">
                    <CarouselContent>
                        <CarouselItem class="w-10 h-100 item" v-for="theme in themes" :key="theme.name"
                            @click="themeMode = theme.name.toLowerCase()">
                            <div :class="theme.propBackground" class="flex p-2 flex-1 flex-col gap-2 rounded-lg">
                                <div class="flex gap-2 w-full">
                                    <div :class="theme.propColor" class="opacity-[0.75] w-[50px] h-[50px] rounded-lg" />
                                    <div :class="theme.propColor" class="opacity-[0.5] flex-1 rounded-lg" />
                                </div>

                                <div class="flex flex-col gap-2">
                                    <div :class="theme.propColor" class="opacity-[0.15] w-full h-[20px] rounded-lg" />
                                    <div :class="theme.propColor" class="opacity-[0.15] w-full h-[20px] rounded-lg" />
                                </div>

                                <div class="flex flex-1">
                                    <div :class="theme.propColor" class="opacity-[0.2] w-full h-full rounded-lg" />
                                </div>

                                <div class="flex items-end justify-end gap-2">
                                    <div :class="theme.propColor" class="opacity-[0.3] w-full h-[30px] rounded-lg" />
                                    <div :class="theme.propColor" class="opacity-[0.5] w-[80px] h-[30px] rounded-lg" />
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div class="items">
                    <div class="buttons">
                        <Button class="flex-1" @click="() => select('Home')">
                            <Icon icon="game-icons:butter-toast" />
                            Continue
                        </Button>
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

.parent .carousel {
    height: auto;
    width: auto;
}

.parent .carousel .item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>