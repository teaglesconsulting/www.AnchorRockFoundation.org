<template lang="pug">
  g-link(:activeClass="activeClass" :exact="exact" v-bind="$attrs")
    slot
</template>
<script>
export default {
  name: 'BaseLink',
  props: {
    exact: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,
      default: 'is-active'
    }
  }
}
</script>
