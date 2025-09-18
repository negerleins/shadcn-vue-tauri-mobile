#### Minimal starter integrating Vue 3 + Vite, Tauri 2, Tailwind.

## Links
| Tool | URL |
|------|-----|
| shadcn-vue | https://www.shadcn-vue.com/ |
| Tauri | https://tauri.app/start/ |
| Vue 3 | https://vuejs.org/ |
| vue-sonner | https://sonner.emilkowal.ski/vue |

## Features
- Vue 3 + TypeScript + Vite
- Tauri 2 desktop (Android optional)
- shadcn-vue component patterns
- Toast system (vue-sonner + custom template)
- Carousel with `value-change` event
- Theme switching via `useColorMode`
- Tailwind (Vite plugin)

## Prerequisites
Rust + Cargo, Node.js (or Bun/pnpm), and platform build tools.
Windows: Visual Studio Build Tools (C++ workload). Android (optional): Android Studio + SDK/NDK, `ANDROID_HOME` env, accepted licenses.

Quick check:
```shell
rustc --version
cargo --version
npx tauri -V
```

## Install
```shell
git clone https://github.com/negerleins/shadcn-vue-tauri-mobile.git project
cd project
bun install   # or npm install / pnpm install
```

## Development
Web only:
```shell
bun run dev
```

Desktop (Tauri):
```shell
bunx tauri dev
```

Android (optional / experimental):
```shell
bunx tauri android dev
```

## Build
Desktop bundle:
```shell
bunx tauri build
```

Android bundle:
```shell
bunx tauri android build
```

Type-check + production build of frontend:
```shell
bun run build
```

## Project Layout
```
src/
  main.ts
  app/App.vue
  app/pages/
  components/ui/
  lib/
src-tauri/
  tauri.conf.json
  src/
```

## [@vueuse](https://vueuse.org/) Theme(s)
```ts
import { themeMode } from '@/lib/shared'
themeMode.value = 'dark'
```

## Toast Template(s) Example
```ts
import { toast, Template } from '@/components/ui/sonner'
import { markRaw } from 'vue'
toast('Hello', { component: markRaw(Template) })
```

## Scripts
| Script | Description |
|--------|-------------|
| dev | Vite dev server |
| build | Type-check + build |
| preview | Preview dist |
| tauri | Tauri CLI passthrough |

## Troubleshooting
| Problem | Fix |
|---------|-----|
| Tauri dev fails | Verify Rust toolchain / clear `src-tauri/target` |
| Android build errors | Check `ANDROID_HOME`, accept SDK licenses |
| Icons unchanged | Re-run `bunx tauri build` |
| Theme not updating | Ensure `data-theme` is on `<html>` |