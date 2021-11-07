const App = {
  data () {
    return {
      placeholderString: 'napiš novou poznámku',
      title: 'Seznam poznámek',
      inputValue: '',
      notes: ['první poznámka', 'druhá poznámka']
    }
  },
  methods: {
    inputChangeHandler (event) {
      console.log(
        'volán: inputChangeHandler event.target.value=',
        event.target.value
      )
      this.inputValue = event.target.value
    },
    addNewNote () {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
      console.log('this.notes=', this.notes)
    },
    removeNote (index) {
      console.log('removeNote index=', index)
      this.notes.splice(index, 1)
    },
    naVelkaPismena (item) {
      return item.toUpperCase()
    },
    numberOfChars () {
      console.log('volá se numberChars()')
      let nChar = 0
      this.notes.forEach(item => {
        nChar += item.length
      })
      return nChar
    }
  },
  computed: {
    numberOfCharsComputed () {
      console.log('volá se numberCharsComputed()')
      let nChar = 0
      this.notes.forEach(item => {
        nChar += item.length
      })
      return nChar
    }
  }
}

Vue.createApp(App).mount('#app')
