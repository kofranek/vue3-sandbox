const h = Vue.h
const app = Vue.createApp({
  data () {
    return {
      title: 'to je z template'
    }
  },
  methods: {
    changeTitle () {
      this.title = 'Vue 3'
    }
  },
  //    template:  `
  //     <div class="card center">
  //         <h1>{{title}}</h1>
  //         <button class ="btn" @click="changeTitle">Změnit hlavičku</button>
  //     </div>
  //    `,
  render () {
      return (
          h('div', 
          {class: 'card center'}, 
          [
              h('h1',{},this.title),
              h('button',{class: 'btn',
                         onClick: this.changeTitle}, 'Změnit hlavičku')
          ]
          )
        
        )
  }
})

app.mount('#app')

Vue.createApp({
    data(){
        return {
            title: 'titulek z druhé úlohy Vue'
        }
    }
}).mount('#app2')
