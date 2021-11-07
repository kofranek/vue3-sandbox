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
    // inputChangeHandler (event) {
    //   /*
    //   console.log(
    //     'volán: inputChangeHandler event.target.value=',
    //     event.target.value
    //   )
    //   */
    //   this.inputValue = event.target.value
    // },
    addNewNote () {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
      //console.log('this.notes=', this.notes)
    },
    removeNote (index) {
      //console.log('removeNote index=', index)
      this.notes.splice(index, 1)
    },
    naVelkaPismena (item) {
      return item.toUpperCase()
    },
    numberOfChars () {
      //console.log('volá se numberChars()')
      let nChar = 0
      this.notes.forEach(item => {
        nChar += item.length
      })
      return nChar
    }
  },
  computed: {
    numberOfCharsComputed () {
      //console.log('volá se numberCharsComputed()')
      let nChar = 0
      this.notes.forEach(item => {
        nChar += item.length
      })
      return nChar
    }
  },
  watch: {
    // in Vue 3: When watching an array, the callback will only trigger when the array is replaced.
    // If you need to trigger on mutation, the deep option must be specified.
    /*
    notes (value) { //nefunguje ve Vue 3
      console.log('notes value changed =', value) 
    },
    */
    inputValue (value) {
      console.log('inputValue changed', value)
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')
