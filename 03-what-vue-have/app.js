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
      console.log(this.$refs.myInput.value)
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value=''
    }
  },

  computed: {
    evenItems () {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')
