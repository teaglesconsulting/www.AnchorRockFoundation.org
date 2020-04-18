<template lang="pug">
  div.layout
    nav.navbar.no-print.has-shadow
      div.container
        div.navbar-brand
          g-link(to="/").navbar-item
            g-image(src="~/images/logo.png" width="400" :immediate="true" :alt="$site.siteName")

          a.navbar-burger(@click="$state.navbarIsActive = !$state.navbarIsActive")
            span
            span
            span

        div.navbar-menu
          div.navbar-start
            //- g-link(to="/" active-class="is-active" exact).navbar-item.is-tab Home

          div.navbar-end
            template(v-for="(item, index) in $site.headerNavigation")
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

    footer.footer.has-text-centered
      p.mb-1: strong Anchor Rock Foundation Inc.
      p.mb-2 <a href="https://goo.gl/maps/T1csK6ETtv39RuAZ7">11555 Crossings Ct, Suite 110, Holland MI 49424</a> | <a href="tel:+16166004501">(616) 600-4501</a> |  <a href="https://www.anchorrockfoundation.org/">www.AnchorRockFoundation.org</a>
      form(action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top")
        input(type="hidden" name="cmd" value="_s-xclick")
        input(type="hidden" name="hosted_button_id" value="MPBLRY2UJ2CJJ")
        input(type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit"
          title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button")
</template>
