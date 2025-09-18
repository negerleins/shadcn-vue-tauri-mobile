import { ref, markRaw, computed } from 'vue';

import Home from './Pages/Home.vue';
import Intro from './Pages/Intro.vue';

export const pages = ref([
    { name: 'Home', component: markRaw(Home), enabled: false },
    { name: 'Intro', component: markRaw(Intro), enabled: true },
]);

export const select = (page: string) => pages.value.forEach(item => {
    item.enabled = item.name === page;
});

export const page = computed(() => pages.value.find(item => item.enabled));
