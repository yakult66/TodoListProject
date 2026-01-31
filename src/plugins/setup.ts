import type { App } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from '../router';
import { createPinia } from 'pinia';

export function setup(app: App) {
    app.use(createPinia())
    app.use(router)
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });
}
