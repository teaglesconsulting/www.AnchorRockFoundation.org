<template lang="pug">
  div.layout
    nav.navbar.no-print.has-shadow
      div.container
        div.navbar-brand
          g-link(to="/").navbar-item
            g-image(src="~/images/logo.png" width="400" :immediate="true" :alt="$static.metadata.siteName")

          a.navbar-burger(@click="$state.navbarIsActive = !$state.navbarIsActive")
            span
            span
            span

        div.navbar-menu
          div.navbar-start
            //- g-link(to="/" active-class="is-active" exact).navbar-item.is-tab Home

          div.navbar-end
            template(v-for="(item, index) in $static.metadata.headerNavigation")
              a(
                v-if="item.external"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="animated-link"
              ).navbar-item.is-tab {{ item.text }}
              BaseLink(v-else :to="item.link").navbar-item.is-tab {{ item.text }}

    div.main.container.section
      slot

    footer.has-text-centered
</template>

<static-query>
query {
  metadata {
    siteName
    headerNavigation : headerNavigation {
      text
      link
      external
    }
  }
}
</static-query>
