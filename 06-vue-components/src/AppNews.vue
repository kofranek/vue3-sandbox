<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{isNewsOpen ? "Zavřít" : "Otevřít"}}
    </button>
    <p v-if="isNewsOpen">
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
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      this.$emit('open-news', this.id, this.isNewsOpen)
    }
  }
}
</script>
