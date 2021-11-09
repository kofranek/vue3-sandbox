import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'

const app = createApp(App)

// global registration
app.component('the-header', TheHeader)

app.mount('#app')
