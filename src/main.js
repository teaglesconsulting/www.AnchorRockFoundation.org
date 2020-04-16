import '~/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.prototype.$site = require("../content/site.config.json")

  // Set default layout as a global component
  Vue.component("Layout", () => import("~/layouts/Default.vue"))

  Vue.component("BaseLink", () => import("~/components/BaseLink.vue"))

  Vue.component("ContactForm", () => import("~/components/ContactForm.vue"))
  Vue.component("VolunteerForm", () => import("~/components/VolunteerForm.vue"))
}
