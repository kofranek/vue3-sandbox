<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Otevřít</button>
    <p v-if="isOpen">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti numquam,
      est culpa labore delectus placeat ipsum consequuntur accusantium.
    </p>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true,
      validator (value) {
        return value % 11 === 0
      }
    // isOpen: Boolean
    // isOpen nemůžu načítat od rodiče, protože ho měním lokálně ale rodič se o změně nedozví
    }
  },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
