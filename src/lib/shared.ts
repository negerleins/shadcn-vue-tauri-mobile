// import { ref } from "vue";
import { useColorMode } from "@vueuse/core";
import type { Ref } from "vue";

export const themeMode = useColorMode({
  selector: "html",
  attribute: "data-theme",
  storageKey: "vueuse-color-scheme",
  emitAuto: false,
}) as unknown as Ref<string>;
