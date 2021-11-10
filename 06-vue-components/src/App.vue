<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aktuální novinky {{ now }}</h2>
    </div>
    <app-news v-for="item in news"
     :key="item.id"
     :title="item.title"
     :id="item.id"
     :isOpen="item.isOpen"
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
          isOpen: false
        }
      ],
      isOpen: false
    }
  }
}
</script>

<style lang="scss"></style>
