import '~/scss/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", () => import("~/layouts/Default.vue"))

  Vue.component("BaseLink", () => import("~/components/BaseLink.vue"))
}
