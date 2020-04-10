<template lang="pug">
  Layout
    h1.title.has-text-centered {{ $page.contentPage.title }}
    h2.subtitle.has-text-centered(v-if="$page.contentPage.subtitle") {{ $page.contentPage.subtitle }}
    VueRemarkContent.content
      slot
</template>

<page-query>
query ($id: ID!) {
  contentPage(id: $id) {
    published
    title
    subtitle
  }
}
</page-query>
