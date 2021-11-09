<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aktuální novinky {{ now }}</h2>
    </div>
    <app-news
      v-for="item in news"
      :key='item'
      :title = "item"
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
      news: ['první novinka', 'druhá novinka'],
      isOpen: false
    }
  }
}
</script>

<style lang="scss"></style>
