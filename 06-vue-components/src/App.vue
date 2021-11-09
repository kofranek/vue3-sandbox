<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Aktuální novinky {{ now }}</h2>
    </div>

    <div class="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
      <button class="btn" @click="isOpen = !isOpen">Otevřít</button>
      <p v-if="isOpen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        numquam, est culpa labore delectus placeat ipsum consequuntur
        accusantium.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      now: new Date().toLocaleDateString(),
      news: ['první novinka', 'druhá novinka'],
      isOpen: false
    }
  }
}
</script>

<style lang="scss"></style>
