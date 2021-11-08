const app=Vue.createApp({
   data() {
       return {
           title: 'to je z template'
       }
   },
   template:  `
    <div class="card center">
        <h1>{{title}}</h1>
        <button class ="btn" @click="title='Vue 3'">Změnit hlavičku</button>
    </div>
   `
})

app.mount('#app')