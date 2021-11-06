const App = {
  data () {
    return {
      placeholderString: 'napiš novou poznámku',
      title: 'Seznam poznámek',
      inputValue: ''
    }
  },
  methods: {
    inputChangeHandler (event) {
      console.log(
        'volán: inputChangeHandler event.target.value=',
        event.target.value
      )
      this.inputValue = event.target.value
    }
  }
}

Vue.createApp(App).mount('#app')
