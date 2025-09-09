<script setup lang="ts">
import { Icon } from "@iconify/vue";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { themeMode } from "@/lib/shared.ts";

</script>

<template>
  <div class="h-full" style="-webkit-app-region: no-drag">
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger as-child>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost">
                <Icon
                  icon="line-md:moon-rising-filled-alt-loop"
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
                />
                <Icon
                  icon="line-md:sun-rising-filled-loop"
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent> Select Theme </TooltipContent>

          <DropdownMenuContent align="start" class="mt-2">
            <DropdownMenuItem @click="themeMode = 'light'"> Light </DropdownMenuItem>
            <DropdownMenuItem @click="themeMode = 'dark'"> Dark </DropdownMenuItem>
            <DropdownMenuItem @click="themeMode = 'cosmic'"> Cosmic </DropdownMenuItem>
            <DropdownMenuItem @click="themeMode = 'breeze'"> Breeze </DropdownMenuItem>
            <DropdownMenuItem @click="themeMode = 'auto'"> System </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>