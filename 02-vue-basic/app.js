const App = {
  data () {
    return {
      placeholderString: "napiš novou poznámku",
      title: 'Seznam poznámek',
    }
  }
}

Vue.createApp(App).mount('#app')
