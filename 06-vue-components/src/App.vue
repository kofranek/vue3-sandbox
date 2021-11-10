<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aktuální novinky {{ now }}</h2>
      <span>Celkem otevřeno: {{openRate}} krát </span>
 </div>
    <app-news v-for="item in news"
     :key="item.id"
     :title="item.title"
     :id="item.id"
     :isOpen="item.isOpen"
     @openNews="changeOpen"
     />
  </div>
</template>

<script>
import AppNews from './AppNews'
export default {
  name: 'App',
  components: {
    // 'app-news': AppNews
    // AppNews: AppNews
    AppNews
  },
  data () {
    return {
      titul: 'titulek',
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'první novinka',
          id: 11,
          isOpen: false
        },
        {
          title: 'druhá novinka',
          id: 22,
          isOpen: true
        }
      ],
      openRate: 0
    }
  },
  methods: {
    changeOpen (ident, open) {
      const item = this.news.find(el => el.id === ident)
      item.isOpen = open
      // console.log('Synchronizováno: rodič: item.isOpen=', item.isOpen, 'potomek: open=', open)
      if (open === true) {
        this.openRate++
      }
    }
  }
}
</script>

<style lang="scss"></style>
