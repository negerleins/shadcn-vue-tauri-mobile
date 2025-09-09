// import { ref } from "vue";
import { useColorMode, type UseColorModeReturn } from "@vueuse/core";

type themes = UseColorModeReturn<"light" | "dark" | "cosmic" | "breeze">;

export const themeMode: themes = useColorMode({
  selector: "html",
  attribute: "data-theme",
  storageKey: "vueuse-color-scheme",
  emitAuto: false,
});
