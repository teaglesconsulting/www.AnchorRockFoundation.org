<template lang="pug">
  Layout
    h1.title.has-text-centered {{ $page.contentPage.heading }}
    h2.subtitle.has-text-centered(v-if="$page.contentPage.subheading") {{ $page.contentPage.subheading }}
    VueRemarkContent.content
      slot
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.contentPage.heading,
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  contentPage(id: $id) {
    published
    title
    heading
    subheading
  }
}
</page-query>
