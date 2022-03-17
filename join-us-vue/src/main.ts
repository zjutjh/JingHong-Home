import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')