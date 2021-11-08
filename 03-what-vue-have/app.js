Vue.createApp({
  /*
    data(){
      return  {
          
      }
    }
    */
  data: () => ({
    myHtml: '<h1>Vue 3 app</h1>',
    title: 'Hlavička',
    person: {
      firstName: 'Jiří',
      lastName: 'Kofránek',
      age: 71
    },
    items: [1, 2,]
  }),
  methods: {
    stopPropagation (event) {
      event.stopPropagation()
    },
    addItem(){
     // console.log(this.$refs.myInput.value)
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value=''
    },
    remove(index){
      this.items.splice(index,1)
    },
    log(item){
      console.log('log item: ',item)
    },
  },

  computed: {
    evenItems () {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')
