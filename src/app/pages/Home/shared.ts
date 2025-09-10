import { ref, markRaw, computed } from 'vue';

import Home from './Pages/Home.vue';

export const pages = ref([
    { name: 'Home', component: markRaw(Home), enabled: true },
]);

export const select = (page: string) => pages.value.forEach(item => {
    item.enabled = item.name === page;
});

export const page = computed(() => pages.value.find(item => item.enabled));
