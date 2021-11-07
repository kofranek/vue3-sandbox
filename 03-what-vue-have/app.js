Vue.createApp({
    /*
    data(){
      return  {
          
      }
    }
    */
   data: ()=>({
       myHtml: '<h1>Vue 3 app</h1>',
        title: 'Hlavička',
        person: {
            firstName: 'Jiří',
            lastName: 'Kofránek',
            age: 71
        },
        items: [1,2,3,4,5,6]
   })
}).mount('#app')