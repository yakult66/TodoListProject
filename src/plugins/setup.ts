import type { App } from 'vue'
import PrimeVue from 'primevue/config';
import router from '../router';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';

export function setup(app: App) {
    app.use(createPinia())
    app.use(router)
    app.use(PrimeVue, {
        theme: {
            options: {
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue, utilities'
                }
            }
        }
    });
}
