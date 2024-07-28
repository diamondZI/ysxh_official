import './assets/main.css'
// main.ts
import 'virtual:uno.css'
import directive from '@/directive'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(directive)
app.use(createPinia())
app.use(router)

app.mount('#app')
